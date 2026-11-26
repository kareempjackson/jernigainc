"use client";

import { useEffect, useRef, useState } from "react";
import { INTRO_SEEN_KEY } from "@/components/site-intro-boot";
import {
  TREE_ICON_HEAD as HEAD,
  TREE_ICON_HEIGHT,
  TREE_ICON_PATHS,
  TREE_ICON_WIDTH,
} from "@/components/tree-icon-paths";

/*
 * The entrance, shown once per visitor.
 *
 *   1. The tree grows on a deep blue field: trunk and arms, the head, then
 *      the leaves opening outwards from it.
 *   2. The camera moves in on the head. As the tree gets larger it turns from
 *      solid to glass to nothing, so the site shows through its shape.
 *   3. The head fills the screen, the blue is gone, and the page's own
 *      opening animation plays.
 *
 * The blue field and the tree are painted on one canvas; the tree is cut out
 * of the field rather than laid over the page, which is what lets the real
 * site show through it.
 *
 * <html data-intro> carries the state for CSS (see "Entrance" in globals.css):
 * "playing" while the cover is up, "revealing" once the page may start its
 * own animations, "seen" when there is nothing to show.
 */

// Timings, in milliseconds.
const TRUNK_MS = 800;
const HEAD_DELAY = 200;
const LEAF_DELAY = 380; // first leaf
const LEAF_STAGGER = 24; // each further leaf
const LEAF_MS = 650;
const ZOOM_START = 2250; // the grown tree holds briefly before this
const ZOOM_MS = 2700;
const TOTAL = ZOOM_START + ZOOM_MS;
// Reduced motion: the tree is simply shown, then the cover fades.
const STILL_MS = 1100;
const FADE_MS = 600;

const FIELD_CENTRE = "#123a66"; // blue-900
const FIELD_EDGE = "#0b2140"; // navy-900
const INK = "#f7f4ef"; // paper-100

const clamp = (n: number) => Math.max(0, Math.min(1, n));
const easeOut = (t: number) => 1 - (1 - t) ** 3;
const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2;
/** 0 below `from`, 1 above `to`, smooth in between. */
const ramp = (from: number, to: number, n: number) => {
  const t = clamp((n - from) / (to - from));
  return t * t * (3 - 2 * t);
};
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

// When each shape starts to appear: the trunk, the head, then the leaves in
// order of their distance from the head.
const order = TREE_ICON_PATHS.map((p, i) => ({
  i,
  far: Math.hypot(p.cx - HEAD.cx, p.cy - HEAD.cy),
}))
  .filter(({ i }) => i !== 0 && i !== HEAD.index)
  .sort((a, b) => a.far - b.far);
const DELAYS = TREE_ICON_PATHS.map((_, i) => {
  if (i === 0) return 0;
  if (i === HEAD.index) return HEAD_DELAY;
  return LEAF_DELAY + order.findIndex((o) => o.i === i) * LEAF_STAGGER;
});

export function SiteIntro() {
  const cover = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [done, setDone] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const el = cover.current;
    const cv = canvas.current;
    const ctx = cv?.getContext("2d");
    if (!el || !cv || !ctx) return;

    // Normally decided by the script in SiteIntroBoot. It has not run when
    // this layout is reached by an in-app navigation, so decide here.
    if (!root.dataset.intro) {
      let seen = true;
      try {
        seen = localStorage.getItem(INTRO_SEEN_KEY) !== null;
      } catch {}
      root.dataset.intro = seen ? "seen" : "playing";
    }
    if (root.dataset.intro === "seen") return;
    try {
      localStorage.setItem(INTRO_SEEN_KEY, "1");
    } catch {}

    const shapes = TREE_ICON_PATHS.map((p) => new Path2D(p.d));
    const tree = new Path2D();
    for (const shape of shapes) tree.addPath(shape);

    let field: CanvasGradient | string = FIELD_EDGE;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(window.innerWidth * dpr);
      cv.height = Math.round(window.innerHeight * dpr);
      const gradient = ctx.createRadialGradient(
        cv.width / 2,
        cv.height / 2,
        0,
        cv.width / 2,
        cv.height / 2,
        Math.hypot(cv.width, cv.height) / 2,
      );
      gradient.addColorStop(0, FIELD_CENTRE);
      gradient.addColorStop(1, FIELD_EDGE);
      field = gradient;
    };

    /** Paints the entrance as it stands `t` milliseconds in. */
    const paint = (t: number) => {
      const { width: w, height: h } = cv;
      const zoom = easeInOut(clamp((t - ZOOM_START) / ZOOM_MS));

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, w, h);
      // The field thins out at the very end, so the last of it leaves softly.
      ctx.globalAlpha = 1 - ramp(0.8, 1, zoom);
      ctx.fillStyle = field;
      ctx.fillRect(0, 0, w, h);

      // Camera. The tree starts at about a third of the screen and ends with
      // its head covering the corners. The scale grows by a constant ratio,
      // not a constant amount, so the approach reads as steady travel.
      const small = Math.min(h * 0.36, w * 0.6) / TREE_ICON_HEIGHT;
      const large = (Math.hypot(w, h) / 2 / HEAD.r) * 1.1;
      // Before the zoom, a slow drift inwards so the frame is never still.
      const drift = mix(0.93, 1, easeOut(clamp(t / ZOOM_START)));
      const scale = small * drift * (large / small) ** zoom;
      // Aim moves from the middle of the tree to the middle of its head.
      const aim = ramp(0, 0.45, zoom);
      const x = mix(TREE_ICON_WIDTH / 2, HEAD.cx, aim);
      const y = mix(TREE_ICON_HEIGHT / 2, HEAD.cy, aim);
      ctx.setTransform(scale, 0, 0, scale, w / 2 - x * scale, h / 2 - y * scale);

      ctx.fillStyle = INK;
      if (t < ZOOM_START) {
        // Growing: each shape fades in while moving out from the head.
        shapes.forEach((shape, i) => {
          const a = easeOut(
            clamp((t - DELAYS[i]) / (i === 0 ? TRUNK_MS : LEAF_MS)),
          );
          if (a <= 0) return;
          const k = mix(i === 0 ? 0.94 : 0.8, 1, a);
          ctx.save();
          ctx.translate(HEAD.cx, HEAD.cy);
          ctx.scale(k, k);
          ctx.translate(-HEAD.cx, -HEAD.cy);
          ctx.globalAlpha = a;
          ctx.fill(shape);
          ctx.restore();
        });
        return;
      }

      // Zooming: the tree is cut out of the field (so the site shows) while
      // its own colour fades. Solid, then tinted glass, then clear.
      const clear = ramp(0.03, 0.5, zoom);
      ctx.globalCompositeOperation = "destination-out";
      ctx.globalAlpha = clear;
      ctx.fill(tree);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1 - clear;
      ctx.fill(tree);
    };

    let frame = 0;
    let timer = 0;
    let finished = false;
    const finish = () => {
      finished = true;
      root.dataset.intro = "seen";
      setDone(true);
    };
    /** Fades the whole cover out, for Escape and for reduced motion. */
    const fadeOut = () => {
      if (finished) return;
      cancelAnimationFrame(frame);
      root.dataset.intro = "revealing";
      setLeaving(true);
      timer = window.setTimeout(finish, FADE_MS);
    };

    resize();
    // From here the canvas paints the blue, and the cover will be taken down
    // by this code, so the CSS background and safety net are not needed.
    el.style.background = "none";
    el.style.animation = "none";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      paint(ZOOM_START);
      timer = window.setTimeout(fadeOut, STILL_MS);
    } else {
      // Time is counted in frames actually shown, so a tab left in the
      // background picks up where it stopped.
      let t = 0;
      let last = performance.now();
      const tick = (now: number) => {
        t += Math.min(now - last, 50);
        last = now;
        paint(t);
        // Let the page begin as the tree turns clear.
        if (t > ZOOM_START + ZOOM_MS * 0.5) root.dataset.intro = "revealing";
        if (t < TOTAL) frame = requestAnimationFrame(tick);
        else finish();
      };
      paint(0);
      frame = requestAnimationFrame(tick);
    }

    const onResize = () => {
      resize();
      if (root.dataset.intro === "playing" && timer) paint(ZOOM_START);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") fadeOut();
    };
    // The page underneath stays put until the entrance is over.
    const hold = (event: Event) => event.preventDefault();
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    el.addEventListener("wheel", hold, { passive: false });
    el.addEventListener("touchmove", hold, { passive: false });

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
      el.removeEventListener("wheel", hold);
      el.removeEventListener("touchmove", hold);
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={cover}
      className="site-intro"
      data-leaving={leaving ? "" : undefined}
    >
      <canvas ref={canvas} aria-hidden="true" className="size-full" />
    </div>
  );
}

"use client";

import {
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Glyph } from "@/components/icons";

/** Height of the sticky navigation bar the film pins beneath. */
const NAV = 80;
/*
 * The timeline, in screens of scroll after the section pins (storyboard A–D):
 * the film grows until GROW, holds full screen until HOLD, then the pin lets
 * go and it docks into the "Who we are" slot over the next DOCK.
 */
const GROW = 1.05;
const HOLD = 1.5;
const DOCK = 0.6;
/** The inline card's shape (1192 × 620 in the design). */
const CARD_RATIO = 1.92;
/** Where the docked film lands; rendered by components/who-we-are.tsx. */
const SLOT_ID = "who-film-slot";

type Rect = { x: number; y: number; w: number; h: number };

const clamp = (n: number) => Math.max(0, Math.min(1, n));
const mix = (a: Rect, b: Rect, t: number): Rect => ({
  x: a.x + (b.x - a.x) * t,
  y: a.y + (b.y - a.y) * t,
  w: a.w + (b.w - a.w) * t,
  h: a.h + (b.h - a.h) * t,
});
/** The spec's "move" easing, cubic-bezier(0.65, 0, 0.35, 1), near enough. */
const easeMove = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;

/**
 * "In the room": the film that grows with the scroll.
 *
 * The section pins under the navigation bar. As the visitor scrolls, the film
 * grows from an inline card to fill the screen and starts playing, muted and
 * looped, once it is 60% of the way there. It holds, the pin releases, and it
 * then shrinks and travels into its slot beside "Who we are", still playing.
 * It is one element throughout, tied to the scroll position, so scrolling back
 * plays everything in reverse. Clicking it opens the full player with sound.
 *
 * How: the film is a screen-sized layer inside a sticky box. Each frame it is
 * moved, scaled and cropped (transform + clip-path, never width/height) to
 * sit over a target rectangle: the card, the full screen, or the slot.
 *
 * With reduced motion none of this runs: the film is an ordinary inline card
 * with a play button. On small screens it expands but does not dock.
 */
export function FilmScroll({
  eyebrow,
  title,
  body,
  filmTitle,
  meta,
  src,
  poster,
  captions,
}: {
  eyebrow: string;
  title: string[];
  body: string;
  filmTitle: string;
  /** Small chip in the corner, e.g. "2:14 · Captions on". */
  meta?: string;
  src?: string;
  poster?: string;
  /** WebVTT captions track. */
  captions?: string;
}) {
  const section = useRef<HTMLElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const cue = useRef<HTMLParagraphElement>(null);
  const chrome = useRef<HTMLDivElement>(null);
  const playMark = useRef<HTMLSpanElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [playerOpen, setPlayerOpen] = useState(false);

  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // Screens scrolled since the section pinned, smoothed (the spec's scrub).
  const raw = useMotionValue(0);
  const t = useSpring(raw, { stiffness: 170, damping: 30, mass: 0.6 });

  const measure = useCallback(() => {
    const el = section.current;
    if (!el) return;
    raw.set((NAV - el.getBoundingClientRect().top) / window.innerHeight);
  }, [raw]);

  const apply = useCallback(
    (time: number) => {
      const box = sticky.current;
      const layer = frame.current;
      const area = stage.current;
      if (!box || !layer || !area || reduce) return;

      const home = box.getBoundingClientRect();
      const vw = home.width;
      const vh = home.height;
      const full: Rect = { x: 0, y: 0, w: vw, h: vh };

      // The card: the largest 1.92:1 rectangle that fits the stage area.
      const space = area.getBoundingClientRect();
      const w = Math.min(space.width, space.height * CARD_RATIO);
      const card: Rect = {
        w,
        h: w / CARD_RATIO,
        x: space.left - home.left + (space.width - w) / 2,
        y: space.top - home.top + (space.height - w / CARD_RATIO) / 2,
      };

      const slot = document.getElementById(SLOT_ID);
      const canDock =
        slot !== null && window.matchMedia("(min-width: 1024px)").matches;

      let rect: Rect;
      let docked = 0;
      if (time <= HOLD || !canDock) {
        rect = mix(card, full, clamp(time / GROW));
      } else {
        docked = clamp((time - HOLD) / DOCK);
        const to = slot.getBoundingClientRect();
        rect = mix(
          full,
          {
            x: to.left - home.left,
            y: to.top - home.top,
            w: to.width,
            h: to.height,
          },
          easeMove(docked),
        );
      }

      // Cover the target rectangle: scale to fill it, crop the overhang.
      const scale = Math.max(rect.w / vw, rect.h / vh);
      const cropX = Math.max(0, (vw - rect.w / scale) / 2);
      const cropY = Math.max(0, (vh - rect.h / scale) / 2);
      layer.style.transform = `translate(${rect.x + rect.w / 2 - vw / 2}px, ${
        rect.y + rect.h / 2 - vh / 2
      }px) scale(${scale})`;
      layer.style.clipPath = `inset(${cropY}px ${cropX}px)`;
      layer.style.visibility = "visible";

      // Heading, cue and the poster's chrome fade as the film grows.
      const fade = String(1 - clamp(time / 0.6));
      if (intro.current) intro.current.style.opacity = fade;
      if (cue.current) cue.current.style.opacity = fade;
      if (chrome.current) chrome.current.style.opacity = fade;
      // Without a film yet, the play mark stays so the frame still reads as one.
      if (playMark.current) playMark.current.style.opacity = src ? fade : "1";

      // Muted playback begins at 60% of full size and carries on while docked.
      const player = video.current;
      if (player) {
        if (clamp(time / GROW) >= 0.6) {
          if (player.paused) player.play().catch(() => {});
        } else if (!player.paused) {
          player.pause();
        }
      }

      // The slot shows its "Now playing" label once the film has landed.
      slot?.style.setProperty("--film-dock", src ? String(docked) : "0");
      slot?.toggleAttribute("data-docked", docked > 0);
    },
    [reduce, src],
  );

  useMotionValueEvent(scrollY, "change", measure);
  useMotionValueEvent(t, "change", apply);

  useEffect(() => {
    measure();
    t.jump(raw.get());
    apply(raw.get());
    const again = () => {
      measure();
      apply(t.get());
    };
    const observer = new ResizeObserver(again);
    observer.observe(document.body);
    window.addEventListener("resize", again);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", again);
    };
  }, [apply, measure, raw, t]);

  // The docked slot's progress line follows the film.
  const onTime = () => {
    const player = video.current;
    if (!player?.duration) return;
    document
      .getElementById(SLOT_ID)
      ?.style.setProperty(
        "--film-progress",
        String(player.currentTime / player.duration),
      );
  };

  const openPlayer = () => {
    if (!src) return;
    video.current?.pause();
    setPlayerOpen(true);
  };
  const closePlayer = () => {
    setPlayerOpen(false);
    apply(t.get());
  };

  return (
    <section
      ref={section}
      id="film"
      className="dot-grid relative z-10 scroll-mt-20 bg-paper-100 text-blue-900 motion-safe:h-[calc(250svh-5rem)]"
    >
      <div
        ref={sticky}
        className="flex flex-col motion-safe:sticky motion-safe:top-20 motion-safe:h-[calc(100svh-5rem)]"
      >
        <div
          ref={intro}
          className="mx-auto grid w-full max-w-[1440px] shrink-0 items-end gap-x-16 gap-y-6 px-6 pb-8 pt-14 md:px-16 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:pt-[clamp(2rem,6svh,4.5rem)]"
        >
          <div>
            <p className="type-eyebrow mb-4 font-normal text-blue-900/70">
              {eyebrow}
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,min(5vw,7.5svh),4.5rem)] leading-[1.04] tracking-[-0.015em]">
              {title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <p className="type-body max-w-md text-blue-900/75 lg:pb-2">{body}</p>
        </div>

        {/* The stage: the card sits here until the scroll takes over. With
            reduced motion this is simply the film's inline frame. */}
        <div className="mx-auto w-full max-w-[1440px] min-h-0 flex-1 px-6 md:px-16 motion-reduce:flex-none motion-reduce:pb-16">
          <div
            ref={stage}
            className="h-full motion-reduce:relative motion-reduce:aspect-video motion-reduce:h-auto lg:motion-reduce:aspect-[1.92]"
          >
            <div
              ref={frame}
              className="absolute inset-0 overflow-hidden bg-blue-200 will-change-transform motion-safe:invisible"
            >
              {src ? (
                <video
                  ref={video}
                  src={src}
                  poster={poster}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onTimeUpdate={onTime}
                  className="absolute inset-0 size-full object-cover"
                >
                  {captions && (
                    <track kind="captions" src={captions} srcLang="en" />
                  )}
                </video>
              ) : poster ? (
                <Image
                  src={poster}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              ) : (
                <span className="absolute bottom-[8%] left-[14%] text-xs text-blue-900/60">
                  Film slot · {filmTitle}
                </span>
              )}

              <div ref={chrome}>
                {meta && (
                  <span className="absolute left-[6%] top-[8%] flex items-center gap-2 bg-white px-3 py-2 text-xs text-blue-900">
                    <Glyph name="clock" size={13} />
                    {meta}
                  </span>
                )}
              </div>
              <span
                ref={playMark}
                className="pointer-events-none absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-lilac-200 text-blue-900 sm:size-24"
              >
                <Glyph name="play" size={30} className="ml-1" />
              </span>

              {/* The whole film is the button. */}
              <button
                type="button"
                onClick={openPlayer}
                disabled={!src}
                aria-label={
                  src
                    ? `Play with sound: ${filmTitle}`
                    : `${filmTitle} (film coming soon)`
                }
                className="absolute inset-0 enabled:cursor-pointer"
              />
            </div>
          </div>
        </div>

        <p
          ref={cue}
          aria-hidden="true"
          className="hidden shrink-0 pb-6 pt-5 text-center text-sm text-blue-900/70 motion-safe:block"
        >
          Scroll to expand
          <svg
            viewBox="0 0 10 6"
            width={12}
            height={7}
            className="mx-auto mt-1.5"
          >
            <path
              d="M1 1l4 4 4-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            />
          </svg>
        </p>
      </div>

      {playerOpen &&
        src &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={filmTitle}
            onKeyDown={(event) => {
              if (event.key === "Escape") closePlayer();
            }}
            className="fade-in fixed inset-0 z-[60] flex items-center justify-center bg-navy-900"
          >
            <video
              src={src}
              poster={poster}
              controls
              autoPlay
              playsInline
              className="max-h-full w-full"
            >
              {captions && (
                <track kind="captions" src={captions} srcLang="en" default />
              )}
            </video>
            <button
              type="button"
              autoFocus
              onClick={closePlayer}
              className="absolute right-6 top-6 flex h-12 items-center gap-3 border border-white/40 bg-navy-900/60 px-5 text-[13px] font-medium text-white transition-colors hover:bg-white hover:text-blue-900"
            >
              Close
              <Glyph name="cross" size={12} className="rotate-45" />
            </button>
          </div>,
          document.body,
        )}
    </section>
  );
}

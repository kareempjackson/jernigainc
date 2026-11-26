"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

/**
 * Turns on the attribute-driven reveals described in globals.css ("Motion").
 * Mounted once per page (see app/(site)/template.tsx).
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const pending = "[data-reveal]:not([data-revealed])";

    // "In view" = the element's top has come a little way up the screen.
    const reveal = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          reveal.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    // Looping animations (the orbit) only run while their element is on screen.
    const inView = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.toggleAttribute("data-inview", entry.isIntersecting);
      }
    });

    // On the very first load, whatever is already on screen stays as it is:
    // hiding it now, after it has been painted, would make it blink.
    const firstLoad = !root.classList.contains("reveal-ready");
    const scan = (keepVisible: boolean) => {
      for (const el of document.querySelectorAll(pending)) {
        const { top, bottom } = el.getBoundingClientRect();
        if (keepVisible && top < window.innerHeight && bottom > 0) {
          el.setAttribute("data-revealed", "");
        } else {
          reveal.observe(el);
        }
      }
      for (const el of document.querySelectorAll("[data-inview-watch]")) {
        inView.observe(el);
      }
    };
    scan(firstLoad);
    root.classList.add("reveal-ready");

    // Content that streams in later is picked up as it arrives.
    const added = new MutationObserver(() => scan(false));
    added.observe(document.body, { childList: true, subtree: true });

    return () => {
      reveal.disconnect();
      inView.disconnect();
      added.disconnect();
    };
  }, []);

  return null;
}

/**
 * A figure that counts up from zero when it scrolls into view, e.g.
 * "35,000+" or "50+ years". Anything without a number, and plain years such
 * as "2008", is shown as is. The server renders the final value.
 */
export function CountUp({
  value,
  duration = 1200,
  eager = false,
  className = "",
}: {
  value: string;
  /** Milliseconds. */
  duration?: number;
  /** Count as soon as it mounts, even if it is already on screen. */
  eager?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(value);

  useLayoutEffect(() => {
    const el = ref.current;
    const match = value.match(/^(\D*)(\d[\d,]*)(.*)$/);
    if (!el || !match) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ""));
    const isYear = /^(19|20)\d\d$/.test(digits) && !suffix.startsWith("+");
    if (isYear || target === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { top, bottom } = el.getBoundingClientRect();
    const onScreen = top < window.innerHeight && bottom > 0;
    if (onScreen && !eager) return;

    const format = (n: number) =>
      prefix + (digits.includes(",") ? n.toLocaleString("en-US") : n) + suffix;
    let frame = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        // Ease-out, so the last digits settle rather than slam.
        setText(format(Math.round(target * (1 - (1 - t) ** 4))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    setText(format(0));
    if (eager) {
      run();
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        run();
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration, eager]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {text}
    </span>
  );
}

/**
 * Moves its children a fraction of the distance scrolled, so they drift
 * against the page. `shift` is that fraction (0.15 = moves 15px for every
 * 100px scrolled); `rotate` turns it by that many degrees over one screen of
 * scroll. With `bounded`, travel is limited to the amount the element
 * overhangs its parent, for a photo that is taller than its frame.
 */
export function Parallax({
  children,
  shift,
  rotate = 0,
  bounded = false,
  className = "",
}: {
  children: ReactNode;
  shift: number;
  rotate?: number;
  bounded?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // Scroll position at which the element sits at rest, and its travel limit.
  const rest = useRef(0);
  const limit = useRef(Infinity);
  // Screen height, measured in the browser (this also renders on the server).
  const screen = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const box = parent.getBoundingClientRect();
      const centre = box.top + window.scrollY + box.height / 2;
      // At rest when its parent is centred on screen (or at the page top).
      screen.current = window.innerHeight;
      rest.current = Math.max(0, centre - window.innerHeight / 2);
      limit.current = bounded
        ? Math.max(0, (el.offsetHeight - box.height) / 2)
        : Infinity;
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    return () => observer.disconnect();
  }, [bounded]);

  // With reduced motion both stay at zero, so nothing moves.
  const y = useTransform(scrollY, (value) => {
    if (reduce) return 0;
    const offset = (value - rest.current) * shift;
    return Math.max(-limit.current, Math.min(limit.current, offset));
  });
  const turn = useTransform(scrollY, (value) => {
    if (reduce) return 0;
    const screens = (value - rest.current) / (screen.current || 1);
    return Math.max(-1, Math.min(1, screens)) * rotate;
  });

  return (
    <motion.div ref={ref} style={{ y, rotate: turn }} className={className}>
      {children}
    </motion.div>
  );
}

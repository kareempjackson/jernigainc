"use client";

import type { HomeContent } from "@/content/home";
import Image from "next/image";
import { animate } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Flower } from "@/components/brand";
import { Glyph } from "@/components/icons";

type Testimonial = {
  quote: string;
  source: string;
  /** A file under /public. */
  avatarSrc?: string;
};

/**
 * "Client testimonials": a row of quote cards. The arrows move it one card at
 * a time, it can be dragged with the mouse or swiped, and an arrow greys out
 * when the row is at that end.
 */
export function Testimonials({
  content: c,
}: {
  content: HomeContent["testimonials"];
}) {
  const items: Testimonial[] = c.items.map((t) => ({
    quote: t.quote,
    source: t.source,
    avatarSrc: t.avatar ?? undefined,
  }));
  const track = useRef<HTMLUListElement>(null);
  const [ends, setEnds] = useState({ start: true, end: false });
  const motionRef = useRef<{ stop: () => void } | null>(null);
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);

  /** Grey out an arrow when there is nowhere further to go that way. */
  const updateEnds = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEnds({ start: el.scrollLeft <= 1, end: el.scrollLeft >= max - 1 });
  }, []);

  useEffect(() => {
    updateEnds();
    window.addEventListener("resize", updateEnds);
    return () => window.removeEventListener("resize", updateEnds);
  }, [updateEnds]);

  /** One card's width plus the gap. */
  const cardStep = () => {
    const card = track.current?.querySelector("li");
    return (card?.getBoundingClientRect().width ?? 320) + 16;
  };

  /** Glide to a scroll position over 500ms with the "move" easing. */
  const glideTo = (left: number) => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const target = Math.max(0, Math.min(max, left));
    motionRef.current?.stop();
    // Snapping would fight a scripted scroll, so it is off for the duration.
    el.style.scrollSnapType = "none";
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    motionRef.current = animate(el.scrollLeft, target, {
      duration: reduce ? 0 : 0.5,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (value) => {
        el.scrollLeft = value;
      },
      onComplete: () => {
        el.style.scrollSnapType = "";
      },
    });
  };

  const step = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const size = cardStep();
    // Land on a card edge, wherever the row currently sits.
    glideTo((Math.round(el.scrollLeft / size) + direction) * size);
  };

  // Mouse drag. Touch already scrolls the row natively.
  const onPointerDown = (event: React.PointerEvent<HTMLUListElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const el = event.currentTarget;
    motionRef.current?.stop();
    el.style.scrollSnapType = "none";
    drag.current = { x: event.clientX, left: el.scrollLeft, moved: false };
    el.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event: React.PointerEvent<HTMLUListElement>) => {
    const state = drag.current;
    if (!state) return;
    const delta = event.clientX - state.x;
    if (Math.abs(delta) > 3) state.moved = true;
    event.currentTarget.scrollLeft = state.left - delta;
  };
  const onPointerUp = (event: React.PointerEvent<HTMLUListElement>) => {
    const state = drag.current;
    if (!state) return;
    drag.current = null;
    const el = event.currentTarget;
    el.releasePointerCapture(event.pointerId);
    const size = cardStep();
    if (state.moved) glideTo(Math.round(el.scrollLeft / size) * size);
    else el.style.scrollSnapType = "";
  };

  const arrow =
    "flex size-11 items-center justify-center rounded-full border border-white/40 transition-[background-color,color,opacity] duration-200 enabled:hover:bg-white enabled:hover:text-blue-900 disabled:opacity-30";

  return (
    <section className="relative overflow-hidden bg-navy-700 text-white">
      <Flower
        outline
        size={340}
        className="pointer-events-none absolute -right-20 -top-10 hidden rotate-12 text-white/15 md:block"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-16 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <div data-reveal="group">
            <p className="mb-4 text-sm text-white/75">{c.eyebrow}</p>
            <h2 className="type-h2">{c.title}</h2>
          </div>
          <div className="flex gap-2 pb-1">
            <button
              type="button"
              onClick={() => step(-1)}
              disabled={ends.start}
              aria-label="Previous testimonials"
              className={arrow}
            >
              <Glyph name="arrow-right" size={16} className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              disabled={ends.end}
              aria-label="Next testimonials"
              className={arrow}
            >
              <Glyph name="arrow-right" size={16} />
            </button>
          </div>
        </div>

        <ul
          ref={track}
          tabIndex={0}
          aria-label="Client testimonials"
          onScroll={updateEnds}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          data-reveal="group"
          className="-mx-6 mt-14 flex cursor-grab touch-pan-x select-none snap-x snap-mandatory gap-4 overflow-x-auto active:cursor-grabbing px-6 [scrollbar-width:none] md:-mx-16 md:scroll-px-16 md:px-16 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <li
              key={item.source}
              className="w-[min(82vw,360px)] shrink-0 snap-start lg:w-[calc((100%-3rem)/4)] lg:min-w-[280px]"
            >
              <figure className="flex h-full min-h-[300px] flex-col bg-blue-500 p-6">
                <blockquote className="font-serif text-[1.375rem] leading-[1.25] tracking-[-0.01em]">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-10 text-xs text-white/85">
                  <span className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-blue-900">
                    {item.avatarSrc ? (
                      <Image
                        src={item.avatarSrc}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    ) : (
                      <Flower size={16} />
                    )}
                  </span>
                  {item.source}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";

import { useInView } from "framer-motion";
import { type CSSProperties, useRef, useState } from "react";
import { GuideFrame, Photo, Tag } from "@/components/brand";
import { Glyph } from "@/components/icons";
import { CountUp } from "@/components/motion";
import type { HomeContent } from "@/content/home";

/** How long each stat stays up before the next takes over. */
const HOLD_MS = 5000;

/**
 * "Since 2008": one headline number at a time, each with a partner photo.
 *
 * The first number counts up when the section scrolls into view. The short
 * bars beneath are a small carousel: the current bar fills over five seconds,
 * then the next stat takes over. Clicking a bar jumps to it, and hovering (or
 * focusing) the section pauses the timer. With reduced motion there is no
 * timer; the bars are plain buttons.
 */
export function Impact({ content: c }: { content: HomeContent["impact"] }) {
  const slides = c.slides;
  const [index, setIndex] = useState(0);
  const [held, setHeld] = useState(false);
  // Becomes true once the visitor or the timer has moved off the first stat.
  const [moved, setMoved] = useState(false);
  const section = useRef<HTMLElement>(null);
  const onScreen = useInView(section, { amount: 0.35 });
  const slide = slides[index] ?? slides[0];
  if (!slide) return null;

  const go = (next: number) => {
    setMoved(true);
    setIndex(next % slides.length);
  };

  return (
    <section
      ref={section}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
      className="bg-blue-700 text-white"
    >
      <div className="mx-auto grid max-w-[1440px] gap-x-20 gap-y-14 px-6 py-20 md:px-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:py-24">
        <div className="flex flex-col">
          <p className="flex items-center gap-2.5 text-sm" data-reveal="rise">
            <Glyph name="check" size={16} className="text-lilac-300" />
            {c.eyebrow}
          </p>
          <div aria-live="polite" className="mt-16 lg:mt-auto">
            <p className="font-serif text-[clamp(4.5rem,11vw,10rem)] leading-[0.9] tracking-[-0.02em]">
              <CountUp
                key={slide.figure}
                value={slide.figure}
                duration={moved ? 700 : 1600}
                eager={moved}
              />
            </p>
            <p
              key={slide.caption}
              className="fade-in mt-6 max-w-[33rem] text-lg leading-snug text-white/85 lg:min-h-[3.5rem]"
            >
              {slide.caption}
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            {slides.map((item, i) => (
              <button
                key={item.figure}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show ${item.figure}`}
                aria-current={i === index}
                className="group py-3"
              >
                <span className="relative block h-0.5 w-14 overflow-hidden bg-white/30 transition-colors group-hover:bg-white/60">
                  {i === index && (
                    <span
                      key={index}
                      onAnimationEnd={() => go(index + 1)}
                      className="fill-x absolute inset-0 bg-white"
                      style={
                        {
                          "--duration": `${HOLD_MS}ms`,
                          animationPlayState:
                            onScreen && !held ? "running" : "paused",
                        } as CSSProperties
                      }
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        <GuideFrame
          lineClass="border-white/20"
          className="aspect-square w-full max-w-[600px] lg:justify-self-end"
        >
          <div className="absolute inset-[8%] bg-blue-500 text-white">
            <div key={slide.partner} className="fade-in absolute inset-0">
              <Photo
                src={slide.image ?? undefined}
                alt=""
                slot={slide.partner}
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 bg-navy-100 px-6 py-6 text-blue-900 sm:px-8">
              <p className="text-xl leading-tight sm:text-2xl">
                {slide.partner}
              </p>
              <p className="mt-3 flex flex-wrap gap-2">
                {slide.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </p>
            </div>
          </div>
        </GuideFrame>
      </div>
    </section>
  );
}

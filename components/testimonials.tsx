"use client";

import type { HomeContent } from "@/content/home";
import Image from "next/image";
import { useRef } from "react";
import { Flower } from "@/components/brand";
import { Glyph } from "@/components/icons";

type Testimonial = {
  quote: string;
  source: string;
  /** A file under /public. */
  avatarSrc?: string;
};

/** "Client testimonials": a row of quote cards that scrolls sideways. */
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

  const step = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const distance = (card?.getBoundingClientRect().width ?? 320) + 16;
    el.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-navy-700 text-white">
      <Flower
        outline
        size={340}
        className="pointer-events-none absolute -right-20 -top-10 hidden rotate-12 text-white/15 md:block"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-16 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-sm text-white/75">{c.eyebrow}</p>
            <h2 className="type-h2">{c.title}</h2>
          </div>
          <div className="flex gap-2 pb-1">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous testimonials"
              className="flex size-11 items-center justify-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-blue-900"
            >
              <Glyph name="arrow-right" size={16} className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next testimonials"
              className="flex size-11 items-center justify-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-blue-900"
            >
              <Glyph name="arrow-right" size={16} />
            </button>
          </div>
        </div>

        <ul
          ref={track}
          tabIndex={0}
          aria-label="Client testimonials"
          className="-mx-6 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 [scrollbar-width:none] md:-mx-16 md:scroll-px-16 md:px-16 [&::-webkit-scrollbar]:hidden"
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

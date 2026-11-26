"use client";

import { useState } from "react";
import { GuideFrame, Photo, Tag } from "@/components/brand";
import { Glyph } from "@/components/icons";

export type ImpactSlide = {
  figure: string;
  caption: string;
  partner: string;
  tags: string[];
  /** A file under /public. */
  imageSrc?: string;
  imageAlt?: string;
};

export const defaultSlides: ImpactSlide[] = [
  {
    figure: "35,000+",
    caption:
      "Professionals trained since 2008, across education, healthcare, behavioral health, legal and entertainment.",
    partner: "Education partners",
    tags: ["K–12", "Higher ed"],
  },
  {
    figure: "100+",
    caption:
      "Organizations served since 2008, from single schools to national health systems.",
    partner: "Healthcare partners",
    tags: ["Health systems", "Research teams"],
  },
  {
    figure: "50+ years",
    caption: "Collective experience across our consultants.",
    partner: "Behavioral health partners",
    tags: ["Clinics", "Care teams"],
  },
];

/** "Since 2008": one headline number at a time, each with a partner photo. */
export function Impact({ slides = defaultSlides }: { slides?: ImpactSlide[] }) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <section className="bg-blue-700 text-white">
      <div className="mx-auto grid max-w-[1440px] gap-x-20 gap-y-14 px-6 py-20 md:px-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:py-24">
        <div className="flex flex-col">
          <p className="flex items-center gap-2.5 text-sm">
            <Glyph name="check" size={16} className="text-lilac-300" />
            Since 2008
          </p>

          <div aria-live="polite" className="mt-16 lg:mt-auto">
            <p className="font-serif text-[clamp(4.5rem,11vw,10rem)] leading-[0.9] tracking-[-0.02em]">
              {slide.figure}
            </p>
            <p className="mt-6 max-w-[33rem] text-lg leading-snug text-white/85 lg:min-h-[3.5rem]">
              {slide.caption}
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            {slides.map((item, i) => (
              <button
                key={item.figure}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${item.figure}`}
                aria-current={i === index}
                className="group py-3"
              >
                <span
                  className={`block h-0.5 w-14 transition-colors ${
                    i === index
                      ? "bg-white"
                      : "bg-white/30 group-hover:bg-white/60"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <GuideFrame
          lineClass="border-white/20"
          className="aspect-square w-full max-w-[600px] lg:justify-self-end"
        >
          <div className="absolute inset-[8%] bg-blue-500 text-white">
            <Photo
              key={slide.partner}
              src={slide.imageSrc}
              alt={slide.imageAlt}
              slot={slide.partner}
              sizes="(min-width: 1024px) 35vw, 100vw"
            />
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

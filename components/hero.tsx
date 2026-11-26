import { homeDefaults, type HomeContent } from "@/content/home";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  BlockButton,
  BloomGrid,
  Chip,
  Float,
  Flower,
} from "@/components/brand";
import { Parallax } from "@/components/motion";
import { Glyph, isGlyph } from "@/components/icons";

/**
 * Homepage hero. Pass `imageSrc` (a file under /public) once the photograph is
 * available; until then the frame shows the bloom pattern.
 */
export function Hero({
  content: c = homeDefaults.hero,
  imageSrc,
  imageAlt = "",
  className = "",
}: {
  content?: HomeContent["hero"];
  imageSrc?: string;
  imageAlt?: string;
  /** e.g. `h-full` when the parent sizes the hero to the viewport. */
  className?: string;
}) {
  imageSrc = imageSrc ?? c.image ?? undefined;
  const timeline = c.timeline.map((t) => [t.when, t.what] as const);
  return (
    <section
      className={`relative overflow-hidden bg-blue-700 text-white ${className}`}
    >
      {/* Petal outlines, cropped at the frame edge */}
      {/* Drifts at a third of the scroll speed and turns 15° as it goes. */}
      <Parallax
        shift={0.7}
        rotate={15}
        className="pointer-events-none absolute -right-32 -top-20 hidden lg:block"
      >
        <Flower outline size={420} className="rotate-12 text-white/30" />
      </Parallax>

      <div className="relative mx-auto grid h-full max-w-[1440px] gap-x-16 gap-y-12 px-6 py-12 md:px-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:grid-rows-[minmax(0,1fr)] lg:pb-10 lg:pt-16">
        <div className="flex min-h-0 flex-col lg:h-full lg:max-h-[580px] lg:self-center">
          <p className="fade-up flex items-center gap-2.5 text-sm text-white/85">
            <Glyph name="check" size={16} className="text-lilac-300" />
            {c.eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-[clamp(2.5rem,min(5.6vw,9.5svh),5.25rem)] leading-[0.98] tracking-[-0.02em]">
            {/* Each line rises out of its own mask, one after another. */}
            {c.title.map((line, i) => (
              <span
                key={line}
                className="-mb-[0.16em] block overflow-hidden pb-[0.16em]"
              >
                <span
                  className="line-rise"
                  style={{ "--n": i } as CSSProperties}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p
            className="fade-up mt-6 max-w-[30rem] text-base leading-[1.55] text-white/80"
            style={{ "--delay": "450ms" } as CSSProperties}
          >
            {c.body}
          </p>
          <div
            className="fade-up mt-8 flex flex-wrap items-center gap-x-8 gap-y-5 lg:mt-auto lg:pt-6"
            style={{ "--delay": "550ms" } as CSSProperties}
          >
            <BlockButton href={c.primaryHref} variant="light">
              {c.primaryLabel}
            </BlockButton>
            <Link
              href={c.secondaryHref}
              className="group type-button flex items-center gap-3"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-lilac-300 text-blue-900 transition-colors group-hover:bg-white">
                <svg
                  viewBox="0 0 12 14"
                  width={12}
                  height={14}
                  aria-hidden="true"
                >
                  <path d="M0 0l12 7-12 7z" fill="currentColor" />
                </svg>
              </span>
              {c.secondaryLabel}
            </Link>
          </div>
        </div>

        <div className="relative min-h-0 lg:ml-10 lg:max-h-[580px] lg:self-center lg:h-full">
          <div
            className="fade-up relative aspect-[4/3] overflow-hidden bg-blue-900 lg:aspect-auto lg:h-full"
            style={{ "--rise": "32px", "--delay": "300ms" } as CSSProperties}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <BloomGrid
                cols={9}
                rows={9}
                budClass="text-blue-700"
                bloomClass="text-mist-300"
                animated
                className="absolute inset-0 size-full p-8"
              />
            )}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-900/80 to-transparent" />
            <dl className="absolute inset-x-0 bottom-0 grid grid-cols-3 gap-4 p-5 sm:p-7">
              {timeline.map(([when, what]) => (
                <div key={when}>
                  <dt className="text-sm">{when}</dt>
                  <dd className="mt-0.5 text-xs text-white/75">{what}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Data chips overlap the frame edge */}
          <div className="absolute left-3 top-4 flex flex-col items-start gap-2.5 sm:-left-10 sm:top-6">
            {c.chips.slice(0, 2).map((chip, i) => (
              <Float key={chip.label} index={i}>
                <Chip
                  size="lg"
                  icon={isGlyph(chip.icon) ? chip.icon : undefined}
                  figure={chip.figure}
                  label={chip.label}
                  className={i === 0 ? "bg-navy-100" : "bg-lilac-200"}
                />
              </Float>
            ))}
          </div>
          <div className="absolute right-3 top-[46%] hidden sm:-right-4 sm:block">
            {c.chips[2] && (
              <Float index={2}>
                <Chip
                  size="lg"
                  icon={isGlyph(c.chips[2].icon) ? c.chips[2].icon : undefined}
                  figure={c.chips[2].figure}
                  label={c.chips[2].label}
                  className="bg-white"
                />
              </Float>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

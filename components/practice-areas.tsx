import { homeDefaults, type HomeContent } from "@/content/home";
import type { ReactNode } from "react";
import { Flower, Logo, Mark, Photo } from "@/components/brand";
import { Glyph } from "@/components/icons";

function StatPill({
  icon,
  label,
  figure,
  className,
}: {
  icon: ReactNode;
  label: string;
  figure: string;
  className: string;
}) {
  return (
    <div className={`flex items-center gap-5 rounded-full p-5 ${className}`}>
      <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white">
        {icon}
      </span>
      <div className="flex flex-col-reverse">
        <dd className="font-serif text-3xl leading-tight">{figure}</dd>
        <dt className="text-blue-900/70">{label}</dt>
      </div>
    </div>
  );
}

/**
 * "Five practice areas": a partner quote beside the headline numbers. Pass
 * `imageSrc` (a file under /public) for the portrait.
 */
export function PracticeAreas({
  content: c = homeDefaults.practiceAreas,
  imageSrc,
  imageAlt = "",
}: {
  content?: HomeContent["practiceAreas"];
  imageSrc?: string;
  imageAlt?: string;
}) {
  imageSrc = imageSrc ?? c.image ?? undefined;
  const sectors = c.sectors;
  return (
    <section className="relative overflow-hidden bg-navy-700 text-white">
      {/* Petal outlines, cropped at the frame edge */}
      <Flower
        outline
        size={360}
        className="pointer-events-none absolute -left-28 -top-10 rotate-12 text-white/20"
      />
      <Flower
        outline
        size={320}
        className="pointer-events-none absolute -bottom-24 -right-20 hidden -rotate-12 text-white/20 md:block"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-16 lg:py-28">
        <h2 className="type-h2 text-center">
          {c.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-16 grid gap-6 lg:grid-cols-[minmax(0,1.85fr)_minmax(0,1fr)]">
          {/* Partner quote */}
          <figure className="grid gap-9 bg-white p-6 text-blue-900 sm:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="relative aspect-[4/5] bg-blue-100 sm:aspect-auto sm:min-h-[460px]">
              <Photo
                src={imageSrc}
                alt={imageAlt}
                slot="Team portrait, plain light backdrop"
                sizes="(min-width: 1024px) 25vw, 100vw"
              />
              <span className="absolute bottom-9 left-4 bg-white px-3.5 py-2 font-serif text-[1.75rem] leading-none">
                {c.badge}
              </span>
            </div>
            <div className="flex flex-col pb-3 pr-3 pt-3">
              <figcaption>{c.quoteLabel}</figcaption>
              <span className="mt-10 flex size-13 items-center justify-center rounded-full bg-blue-900 text-tan-200 sm:mt-auto">
                <Glyph name="quote" size={22} />
              </span>
              <blockquote className="mt-6 text-xl leading-[1.4] sm:text-[1.375rem]">
                “{c.quote}”
              </blockquote>
            </div>
          </figure>

          {/* Headline numbers */}
          <div className="flex flex-col items-center bg-navy-100 px-8 py-8 text-blue-900 sm:px-10">
            <Logo width={84} colorClass="bg-blue-900" />
            <dl className="my-10 w-full space-y-5 lg:my-auto lg:py-10">
              {c.stats.map((stat, i) => (
                <StatPill
                  key={stat.label}
                  icon={<Mark name={stat.icon} size={26} />}
                  label={stat.label}
                  figure={stat.figure}
                  className={i % 2 === 0 ? "bg-paper-100" : "bg-lilac-200"}
                />
              ))}
            </dl>
            <p className="text-center text-sm font-medium leading-relaxed">
              <span className="block">{sectors.slice(0, 3).join(" · ")}</span>
              <span className="block">{sectors.slice(3).join(" · ")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

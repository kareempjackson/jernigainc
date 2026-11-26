import { homeDefaults, type HomeContent } from "@/content/home";
import Image from "next/image";
import { BlockButton, BloomGrid, Mark } from "@/components/brand";

/**
 * "What working with us looks like": full-bleed photo left, the three steps on
 * a Lilac panel right. Pass `imageSrc` (a file under /public) once the
 * photograph is available; until then the frame is a labelled photo slot.
 */
export function HowWeWork({
  content: c = homeDefaults.howWeWork,
  imageSrc,
  imageAlt = "",
}: {
  content?: HomeContent["howWeWork"];
  imageSrc?: string;
  imageAlt?: string;
}) {
  imageSrc = imageSrc ?? c.image ?? undefined;
  const steps = c.steps.map((step) => ({
    ...step,
    icon: <Mark name={step.icon} size={22} />,
  }));
  return (
    <section className="grid bg-lilac-200 text-blue-900 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1fr)]">
      <div
        className="relative min-h-[320px] bg-tan-200 lg:min-h-[620px]"
        data-reveal="wipe"
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        ) : (
          <p className="absolute bottom-6 left-6 text-xs text-blue-900/60 md:left-16">
            Photo slot · Workshop, shot mid moment
          </p>
        )}
      </div>

      <div className="relative overflow-hidden">
        {/* Bloom column, cropped at the frame edge */}
        <BloomGrid
          cols={2}
          rows={5}
          budClass="text-lilac-300"
          bloomClass="text-lilac-300"
          className="pointer-events-none absolute -right-40 top-1/2 hidden h-[125%] -translate-y-1/2 opacity-50 2xl:-right-24 xl:block"
        />

        <div className="relative flex h-full max-w-[820px] flex-col px-6 py-16 md:px-16 lg:py-24">
          <h2
            className="font-serif text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.04] tracking-[-0.015em]"
            data-reveal="rise"
          >
            {c.title}
          </h2>

          <ol className="mt-12 space-y-9" data-reveal="group">
            {steps.map((step) => (
              <li key={step.title} className="flex gap-5">
                <span className="mt-0.5 shrink-0">{step.icon}</span>
                <div>
                  <h3 className="text-lg font-medium leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-[34rem] leading-[1.55] text-blue-900/75">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 lg:mt-auto lg:pt-14" data-reveal="rise">
            <BlockButton href={c.ctaHref}>{c.ctaLabel}</BlockButton>
          </div>
        </div>
      </div>
    </section>
  );
}

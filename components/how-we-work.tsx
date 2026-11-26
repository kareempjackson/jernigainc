import Image from "next/image";
import { BlockButton, BloomGrid, Flower } from "@/components/brand";
import { Glyph } from "@/components/icons";

const steps = [
  {
    icon: <Glyph name="focus" size={22} />,
    title: "Needs assessment",
    body: "Listening sessions, climate surveys and data review to see where belonging breaks down.",
  },
  {
    icon: <Flower size={22} />,
    title: "Facilitated learning",
    body: "Workshops and coaching that build skills leaders and staff can use the next day.",
  },
  {
    icon: <Glyph name="bars" size={22} />,
    title: "Measured impact",
    body: "Clear reporting that shows what changed, for whom, and what to do next.",
  },
];

/**
 * "What working with us looks like": full-bleed photo left, the three steps on
 * a Lilac panel right. Pass `imageSrc` (a file under /public) once the
 * photograph is available; until then the frame is a labelled photo slot.
 */
export function HowWeWork({
  imageSrc,
  imageAlt = "",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="grid bg-lilac-200 text-blue-900 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1fr)]">
      <div className="relative min-h-[320px] bg-tan-200 lg:min-h-[620px]">
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
          <h2 className="font-serif text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.04] tracking-[-0.015em]">
            What working with us looks like
          </h2>

          <ol className="mt-12 space-y-9">
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

          <div className="mt-14 lg:mt-auto lg:pt-14">
            <BlockButton href="/services">
              Learn more about how we work
            </BlockButton>
          </div>
        </div>
      </div>
    </section>
  );
}

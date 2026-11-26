import { BlockButton, BloomGrid, Photo } from "@/components/brand";
import { Glyph, type GlyphName } from "@/components/icons";

const points: [GlyphName, string, string][] = [
  [
    "focus",
    "Interdisciplinary expertise",
    "Deep expertise across psychology, education, and organizational development.",
  ],
  [
    "blocks",
    "Evidence-based, not improvised",
    "Backed by the Intersections Research Lab, so every strategy is grounded in science.",
  ],
  [
    "chat",
    "Partnership over prescription",
    "We co-design with the people closest to the work, so the change holds.",
  ],
];

/**
 * About page: "What sets us apart", a full-bleed photo beside a tan panel.
 * Pass `imageSrc` (a file under /public).
 */
export function AboutDifference({
  imageSrc,
  imageAlt = "",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="grid bg-tan-300 text-blue-900 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1fr)]">
      <div className="relative min-h-[320px] bg-paper-200 lg:min-h-0">
        <Photo
          src={imageSrc}
          alt={imageAlt}
          slot="Group session, people in a circle"
          sizes="(min-width: 1024px) 42vw, 100vw"
        />
      </div>

      <div className="relative overflow-hidden">
        <BloomGrid
          cols={3}
          rows={7}
          budClass="text-tan-500/30"
          bloomClass="text-tan-700/30"
          className="pointer-events-none absolute -top-6 right-4 hidden h-[115%] xl:block"
        />
        <div className="relative px-6 py-14 md:px-16 lg:py-20">
          <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em]">
            What sets us apart
          </h2>
          <p className="mt-6 max-w-[32rem] text-[15px] leading-[1.6] text-blue-900/75">
            Clients come to us when they realize that real equity takes more
            than a training session or a policy statement.
          </p>

          <ul className="mt-8 max-w-[33rem] space-y-6">
            {points.map(([icon, title, body]) => (
              <li
                key={title}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4"
              >
                <Glyph name={icon} size={20} className="mt-0.5" />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-[1.55] text-blue-900/75">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <BlockButton href="/contact">Book a consultation</BlockButton>
          </div>
        </div>
      </div>
    </section>
  );
}

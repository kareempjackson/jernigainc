import { insightsDefaults, type InsightsContent } from "@/content/insights";
import { BlockButton, Flower, Photo } from "@/components/brand";
import { Glyph } from "@/components/icons";

/**
 * Research page: the featured framework (the 4 R's) and the Intersections
 * Research Lab. `articleHref` is the published article; `imageSrc` is a file
 * under /public.
 */
export function ResearchFrameworks({
  content: c = insightsDefaults,
  articleHref = "#",
  imageSrc,
  imageAlt = "",
}: {
  content?: InsightsContent;
  articleHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  const tones = ["bg-tan-300", "bg-mist-200", "bg-paper-100", "bg-tan-300"];
  const framework = c.featured.pillars.map(
    (name, i) => [name, tones[i % tones.length]] as const,
  );
  const topics = c.lab.topics;
  articleHref = c.featured.ctaHref || articleHref;
  imageSrc = imageSrc ?? c.lab.image ?? undefined;
  return (
    <section className="bg-white text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 py-14 lg:py-20">
        <div className="grid items-end gap-x-16 gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <p className="flex items-center gap-2.5 text-[13px]">
              <span
                aria-hidden="true"
                className="size-1 rounded-full bg-current"
              />
              {c.frameworks.eyebrow}
            </p>
            <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4 text-navy-900">
              {c.frameworks.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <p className="text-[15px] leading-[1.6] text-blue-900/70">
            {c.frameworks.body}
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="bg-lilac-200 p-8 sm:p-12">
            <p className="flex items-center gap-2.5 text-[13px]">
              <Glyph name="blocks" size={15} />
              {c.featured.label}
            </p>
            <h3 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-5">
              {c.featured.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <p className="mt-5 max-w-[36rem] text-[15px] leading-[1.65] text-blue-900/80">
              {c.featured.body}
            </p>
            <div className="mt-7">
              <BlockButton href={articleHref}>
                {c.featured.ctaLabel}
              </BlockButton>
            </div>
          </div>

          <ol className="grid grid-cols-2 gap-px bg-blue-900 p-px">
            {framework.map(([name, tone], i) => (
              <li
                key={name}
                className={`relative flex min-h-[10.5rem] flex-col justify-between overflow-hidden p-6 ${tone}`}
              >
                <Flower
                  size={88}
                  className="pointer-events-none absolute -top-4 right-4 text-blue-900/[0.06]"
                />
                <span className="relative text-xs font-medium tracking-[0.04em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative font-serif text-[1.625rem] leading-[1.1] tracking-[-0.01em]">
                  {name}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 grid items-center gap-x-16 gap-y-10 lg:mt-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="relative aspect-[4/3] bg-paper-200">
            <Photo
              src={imageSrc}
              alt={imageAlt}
              slot="Dr. Jernigan-Noesi, black and white portrait"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
          </div>
          <div>
            <p className="flex items-center gap-2.5 text-[13px]">
              <span
                aria-hidden="true"
                className="size-1 rounded-full bg-current"
              />
              {c.lab.eyebrow}
            </p>
            <h3 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4 text-navy-900">
              {c.lab.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <p className="mt-6 max-w-[42rem] text-[15px] leading-[1.65] text-blue-900/75">
              {c.lab.body}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full border border-blue-900/45 px-3 py-1 text-xs"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

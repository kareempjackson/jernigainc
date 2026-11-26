import { BlockButton, Flower, Photo } from "@/components/brand";
import { Glyph } from "@/components/icons";

const framework = [
  ["Recognition", "bg-tan-300"],
  ["Restoration", "bg-mist-200"],
  ["Relationships", "bg-paper-100"],
  ["Renewal", "bg-tan-300"],
] as const;

const topics = [
  "Racial Trauma",
  "Child Development",
  "Mental Health",
  "Education",
];

/**
 * Research page: the featured framework (the 4 R's) and the Intersections
 * Research Lab. `articleHref` is the published article; `imageSrc` is a file
 * under /public.
 */
export function ResearchFrameworks({
  articleHref = "#",
  imageSrc,
  imageAlt = "",
}: {
  articleHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
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
              Insights and thought leadership
            </p>
            <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4 text-navy-900">
              <span className="block">Frameworks, research</span>
              <span className="block">and commentary</span>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.6] text-blue-900/70">
            Our research, frameworks and commentary live here in one home,
            grounded in the Intersections Research Lab.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="bg-lilac-200 p-8 sm:p-12">
            <p className="flex items-center gap-2.5 text-[13px]">
              <Glyph name="blocks" size={15} />
              Featured framework · The Counseling Psychologist
            </p>
            <h3 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-5">
              <span className="block">Connecting to</span>
              <span className="block">Ancestral Wisdom</span>
            </h3>
            <p className="mt-5 max-w-[36rem] text-[15px] leading-[1.65] text-blue-900/80">
              A four-part framework for transforming how psychology is taught,
              researched, and practiced, introduced in Dr. Jernigan-Noesi’s
              article in The Counseling Psychologist.
            </p>
            <div className="mt-7">
              <BlockButton href={articleHref}>Read the article</BlockButton>
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
              From the Intersections Research Lab
            </p>
            <h3 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4 text-navy-900">
              <span className="block">Research that starts</span>
              <span className="block">with lived experience.</span>
            </h3>
            <p className="mt-6 max-w-[42rem] text-[15px] leading-[1.65] text-blue-900/75">
              Through the Intersections Research Lab, Dr. Jernigan-Noesi
              investigates the social determinants of racial health disparities,
              culturally responsive assessment and treatment models,
              social-emotional development, and racism-related stress and trauma
              across the lifespan.
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

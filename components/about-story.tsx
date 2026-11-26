import { Photo } from "@/components/brand";

const timeline = [
  [
    "2008",
    "Founded in Atlanta",
    "A small agency partnering with schools on equity, diversity, and inclusion.",
  ],
  [
    "Growth",
    "Universities to national associations",
    "Health systems, government agencies, an academic medical center and a national psychological association.",
  ],
  [
    "Today",
    "A boutique national consultancy",
    "Virtual-first, serving clients nationally, with in-person engagements as needed.",
  ],
] as const;

/** About page: "Our story". Pass `imageSrc` (a file under /public). */
export function AboutStory({
  imageSrc,
  imageAlt = "",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="bg-white text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 py-14 lg:py-20">
        <div className="grid items-start gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div>
            <p className="flex items-center gap-2.5 text-[13px]">
              <span
                aria-hidden="true"
                className="size-1 rounded-full bg-current"
              />
              Our story
            </p>
            <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4">
              <span className="block text-navy-900">Started with schools.</span>
              <span className="block text-blue-700">
                Grown into a national practice.
              </span>
            </h2>
            <p className="mt-6 max-w-[40rem] text-[15px] leading-[1.65] text-blue-900/75">
              Jernigan &amp; Associates began in 2008 as a small agency
              partnering with schools on equity, diversity, and inclusion. As
              demand grew, from universities to health systems, government
              agencies, and national associations, we became a boutique national
              consultancy headquartered in Atlanta, working virtual-first with
              in-person engagements as needed.
            </p>
            <p className="mt-6 max-w-[38rem] font-serif text-[1.375rem] leading-[1.25] tracking-[-0.01em]">
              One belief has guided us the entire way: lasting change comes from
              translating rigorous psychological science into everyday practice.
            </p>
          </div>

          <div className="relative aspect-[5/4] bg-paper-200 lg:aspect-[16/13]">
            <Photo
              src={imageSrc}
              alt={imageAlt}
              slot="Our story, quiet landscape"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </div>

        <ol className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-3 lg:mt-14">
          {timeline.map(([when, title, body]) => (
            <li key={when} className="border-t-2 border-blue-700 pt-4">
              <p className="font-serif text-[2rem] leading-none tracking-[-0.02em]">
                {when}
              </p>
              <h3 className="mt-3 text-[15px] font-semibold">{title}</h3>
              <p className="mt-2 max-w-[26rem] text-[13px] leading-[1.55] text-blue-900/65">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

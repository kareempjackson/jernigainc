import { BlockButton, Chip, GuideFrame, Photo, Tag } from "@/components/brand";

const steps = [
  ["01", "Understand", "We listen first: your context, people and systems."],
  ["02", "Co-design", "We build solutions with you, never just for you."],
  ["03", "Create change", "We embed practices that outlast our engagement."],
] as const;

/**
 * "Meet the founder". Pass `imageSrc` (a file under /public) for the portrait.
 */
export function Founder({
  imageSrc,
  imageAlt = "Dr. Maryam M. Jernigan-Noesi",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="bg-paper-100 text-blue-900">
      <div className="mx-auto grid max-w-[1440px] items-center gap-x-24 gap-y-14 px-6 py-20 md:px-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:py-24">
        <GuideFrame className="aspect-[4/5] w-full max-w-[640px]">
          <div className="absolute inset-[12.5%] bg-blue-200">
            <Photo
              src={imageSrc}
              alt={imageAlt}
              slot="Founder portrait, plain light backdrop"
              sizes="(min-width: 1024px) 35vw, 100vw"
            />
            <div className="absolute right-0 top-[8%] lg:right-[-27%]">
              <Chip
                size="lg"
                icon="award"
                figure="2008"
                label="Founded Jernigan & Associates"
                className="bg-lilac-200"
              />
            </div>
            <div className="absolute bottom-0 left-0 max-w-[85%] bg-navy-100 px-5 py-5 sm:px-6">
              <p className="text-lg font-medium leading-snug sm:text-xl">
                Dr. Maryam M. Jernigan-Noesi
              </p>
              <p className="mt-3 flex flex-wrap gap-2">
                <Tag>PhD</Tag>
                <Tag>Licensed Psychologist</Tag>
                <Tag>Founder</Tag>
              </p>
            </div>
          </div>
        </GuideFrame>

        <div>
          <p className="mb-4 text-sm text-blue-900/70">Meet the founder</p>
          <h2 className="type-h2-lg">
            <span className="block">Dr. Maryam</span>
            <span className="block">Jernigan-Noesi</span>
          </h2>
          <p className="type-body mt-8 max-w-[35rem] text-blue-900/80">
            A licensed psychologist, clinician-scientist and award-winning
            scholar with more than two decades of experience, Dr. Jernigan-Noesi
            leads Jernigan &amp; Associates across behavioral health,
            healthcare, education, legal and criminal justice, and
            entertainment.
          </p>
          <div className="mt-12">
            <BlockButton href="/our-team#founder">Read Maryam’s story</BlockButton>
          </div>

          <ol className="mt-16 grid gap-x-4 gap-y-8 sm:grid-cols-3 lg:mt-24">
            {steps.map(([num, title, body], i) => (
              <li
                key={num}
                className={`border-t-2 pt-5 ${
                  i === 0 ? "border-blue-700" : "border-blue-900/20"
                }`}
              >
                <p className="font-medium">
                  <span className="mr-2.5 font-normal">{num}</span>
                  {title}
                </p>
                <p className="mt-2.5 max-w-[15rem] text-sm leading-relaxed text-blue-900/70">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

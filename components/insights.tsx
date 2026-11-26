import Link from "next/link";
import { Flower, Photo } from "@/components/brand";
import { Glyph } from "@/components/icons";

export type InsightTopic = {
  topic: string;
  blurb: string;
  href: string;
  /** Panel colour behind the image (bg-* and text-* classes). */
  tone: string;
  /** A file under /public. */
  imageSrc?: string;
};

export const defaultTopics: InsightTopic[] = [
  {
    topic: "Leadership",
    blurb: "Expert insights on equity, wellbeing and modern leadership.",
    href: "/insights/leadership",
    tone: "bg-navy-700 text-white",
  },
  {
    topic: "Education",
    blurb: "Professional development that changes classrooms.",
    href: "/insights/education",
    tone: "bg-tan-200",
  },
  {
    topic: "Mental health",
    blurb: "Culturally responsive care for clinicians.",
    href: "/insights/mental-health",
    tone: "bg-lilac-200",
  },
  {
    topic: "Belonging",
    blurb: "Supporting students to feel seen and heard.",
    href: "/insights/belonging",
    tone: "bg-blue-100",
  },
];

/** "Thoughts oasis": four ways into the articles. */
export function Insights({
  topics = defaultTopics,
}: {
  topics?: InsightTopic[];
}) {
  return (
    <section className="relative overflow-hidden bg-white text-blue-900">
      <div className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-72 [mask-image:linear-gradient(black,transparent)]" />
      <Flower
        outline
        size={320}
        className="pointer-events-none absolute -right-24 -top-14 hidden rotate-12 text-blue-900/10 lg:block"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-16 lg:py-28">
        <div className="grid items-end gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
          <div>
            <p className="type-eyebrow mb-5 font-normal text-blue-900/70">
              Thoughts oasis
            </p>
            <h2 className="type-h2">
              <span className="block">Your first step</span>
              <span className="block">toward belonging</span>
            </h2>
          </div>
          <p className="max-w-sm text-blue-900/75 lg:pb-2">
            Research-backed articles, practical tools and real stories, written
            to help your teams grow and lead.
          </p>
        </div>

        <ul className="mt-16 grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {topics.map((item) => (
            <li key={item.topic}>
              <Link href={item.href} className="group flex h-full flex-col">
                <span className={`relative block aspect-[4/3] ${item.tone}`}>
                  <Photo
                    src={item.imageSrc}
                    alt=""
                    slot={item.topic}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </span>
                <span className="mt-7 block min-h-12 max-w-[20rem] text-[15px] leading-snug text-blue-900/80">
                  {item.blurb}
                </span>
                <span className="mt-auto flex gap-[3px] pt-5 text-sm">
                  <span className="flex h-10 flex-1 items-center bg-paper-200 px-3.5 transition-colors group-hover:bg-blue-900 group-hover:text-white">
                    {item.topic}
                  </span>
                  <span className="flex size-10 items-center justify-center bg-paper-200 transition-colors group-hover:bg-blue-900 group-hover:text-white">
                    <Glyph name="arrow-right" size={15} />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { homeDefaults, type HomeContent } from "@/content/home";
import Link from "next/link";
import { Flower, Photo } from "@/components/brand";
import { Glyph } from "@/components/icons";

type InsightTopic = {
  topic: string;
  blurb: string;
  href: string;
  /** Panel colour behind the image (bg-* and text-* classes). */
  tone: string;
  /** A file under /public. */
  imageSrc?: string;
};

/** "Thoughts oasis": four ways into the articles. */
export function Insights({
  content: c = homeDefaults.insights,
}: {
  content?: HomeContent["insights"];
}) {
  const tones = [
    "bg-navy-700 text-white",
    "bg-tan-200",
    "bg-lilac-200",
    "bg-blue-100",
  ];
  const topics: InsightTopic[] = c.topics.map((t, i) => ({
    topic: t.topic,
    blurb: t.blurb,
    href: t.href || "#",
    imageSrc: t.image ?? undefined,
    tone: tones[i % tones.length],
  }));
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
              {c.eyebrow}
            </p>
            <h2 className="type-h2" data-reveal="group">
              {c.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <p className="max-w-sm text-blue-900/75 lg:pb-2" data-reveal="rise">
            {c.body}
          </p>
        </div>

        {/* A swipeable row on phones, a grid from there up. */}
        <ul
          className="-mx-6 mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-12 sm:overflow-visible sm:px-0 lg:mt-20 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
          data-reveal="group"
        >
          {topics.map((item) => (
            <li
              key={item.topic}
              className="w-[78vw] shrink-0 snap-start sm:w-auto"
            >
              <Link href={item.href} className="group flex h-full flex-col">
                <span
                  className={`relative block aspect-[4/3] overflow-hidden ${item.tone}`}
                >
                  <span className="absolute inset-0 transition-transform duration-200 ease-out group-hover:scale-[1.04]">
                    <Photo
                      src={item.imageSrc}
                      alt=""
                      slot={item.topic}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </span>
                </span>
                <span className="mt-7 block min-h-12 max-w-[20rem] text-[15px] leading-snug text-blue-900/80">
                  {item.blurb}
                </span>
                <span className="mt-auto flex gap-[3px] pt-5 text-sm">
                  <span className="flex h-10 flex-1 items-center bg-paper-200 px-3.5 transition-colors group-hover:bg-blue-900 group-hover:text-white">
                    {item.topic}
                  </span>
                  <span className="flex size-10 items-center justify-center bg-paper-200 transition-[translate,background-color,color] duration-200 ease-out group-hover:translate-x-1 group-hover:bg-blue-900 group-hover:text-white">
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

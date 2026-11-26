import Link from "next/link";
import { Mark, Photo } from "@/components/brand";
import { readTime, type ArticleContent } from "@/content/insights";

/** Marker and verb, by format. */
const FORMAT: Record<string, { icon: string; verb: string; unit: string }> = {
  article: { icon: "blocks", verb: "Read", unit: "min read" },
  audio: { icon: "mic", verb: "Listen", unit: "min" },
  video: { icon: "play", verb: "Watch", unit: "min" },
};

export const formatOf = (article: ArticleContent) =>
  FORMAT[article.format] ?? FORMAT.article;

/** Panel colours for pieces without a photograph, by position. */
const TONES = ["bg-lilac-200", "bg-tan-200", "bg-blue-200", "bg-mist-200"];

export function ArticleMeta({
  article,
  className = "",
}: {
  article: ArticleContent;
  className?: string;
}) {
  return (
    <span
      className={`flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs ${className}`}
    >
      <span className="rounded-full border border-current/45 px-3 py-1">
        {article.topic}
      </span>
      <span className="opacity-60">{article.date}</span>
      <span aria-hidden="true" className="opacity-40">
        ·
      </span>
      <span className="opacity-60">
        {readTime(article)} {formatOf(article).unit}
      </span>
    </span>
  );
}

/**
 * One article in a grid. `wide` lays the lead story out sideways across two
 * columns on large screens.
 */
export function InsightCard({
  article,
  index = 0,
  wide = false,
}: {
  article: ArticleContent;
  index?: number;
  wide?: boolean;
}) {
  const format = formatOf(article);
  return (
    <Link
      href={`/insights/${article.slug}`}
      className={`group flex h-full flex-col bg-white text-blue-900 ${
        wide ? "lg:flex-row" : ""
      }`}
    >
      <span
        className={`relative block aspect-[3/2] shrink-0 overflow-hidden ${
          TONES[index % TONES.length]
        } ${wide ? "lg:aspect-auto lg:w-[52%]" : ""}`}
      >
        <Photo
          src={article.image ?? undefined}
          alt=""
          slot={article.topic}
          sizes={
            wide
              ? "(min-width: 1024px) 35vw, 100vw"
              : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          }
        />
      </span>
      <span
        className={`flex flex-1 flex-col px-5 pb-5 pt-4 ${
          wide ? "lg:p-8" : ""
        }`}
      >
        <ArticleMeta article={article} />
        <span
          className={`mt-4 font-serif leading-[1.12] tracking-[-0.01em] text-navy-900 ${
            wide
              ? "text-[1.5rem] lg:text-[2rem] lg:leading-[1.06]"
              : "text-[1.3125rem]"
          }`}
        >
          {article.title}
        </span>
        <span
          className={`mt-3 leading-[1.55] text-blue-900/70 ${
            wide ? "max-w-[30rem] text-[13px] lg:text-[15px]" : "text-[13px]"
          }`}
        >
          {article.summary}
        </span>
        <span className="mt-auto flex items-center gap-2.5 pt-5 text-[13px] font-medium group-hover:underline">
          <Mark name={format.icon} size={15} />
          {format.verb}
        </span>
      </span>
    </Link>
  );
}

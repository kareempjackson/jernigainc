"use client";

import Link from "next/link";
import { useState } from "react";
import { Photo } from "@/components/brand";
import { Glyph, type GlyphName } from "@/components/icons";

export type Article = {
  title: string;
  summary: string;
  topic: string;
  date: string;
  href: string;
  /** Format marker beside "Read more": article, audio or video. */
  icon: GlyphName;
  /** A file under /public. */
  imageSrc?: string;
};

/** Placeholder entries: replace with the real articles. */
export const defaultArticles: Article[] = [
  "Racial Trauma",
  "Mental Health",
  "Education",
  "Child Development",
].map((topic, i) => ({
  title: "Article title, up to two lines",
  summary:
    "One to two sentence summary of the piece, written for busy leaders.",
  topic,
  date: "Date",
  href: "/insights",
  icon: (["blocks", "mic", "play", "blocks"] as const)[i],
}));

const TOPICS = [
  "Racial Trauma",
  "Child Development",
  "Mental Health",
  "Education",
];

const FEATURED_IN = [
  "NPR",
  "WNYC",
  "The 19th",
  "The Wall Street Journal",
  "HuffPost",
];

/** "Latest thinking": articles with a topic filter, and press mentions. */
export function LatestThinking({
  articles = defaultArticles,
}: {
  articles?: Article[];
}) {
  const [topic, setTopic] = useState("All");
  const shown =
    topic === "All" ? articles : articles.filter((a) => a.topic === topic);

  return (
    <section className="bg-paper-100 text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 py-14 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] text-navy-900">
            Latest thinking
          </h2>
          <div
            role="group"
            aria-label="Filter by topic"
            className="flex flex-wrap gap-2"
          >
            {["All", ...TOPICS].map((name) => (
              <button
                key={name}
                type="button"
                aria-pressed={topic === name}
                onClick={() => setTopic(name)}
                className={`h-9 px-4 text-[13px] font-medium transition-colors ${
                  topic === name
                    ? "bg-blue-900 text-white"
                    : "bg-white hover:bg-paper-300"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((article, i) => (
            <li key={`${article.topic}-${i}`}>
              <Link
                href={article.href}
                className="group flex h-full flex-col bg-white"
              >
                <span className="relative block aspect-[3/2] bg-paper-300">
                  <Photo
                    src={article.imageSrc}
                    alt=""
                    slot={article.topic}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </span>
                <span className="flex flex-1 flex-col px-5 pb-5 pt-4">
                  <span className="flex items-center gap-2.5 text-xs">
                    <span className="rounded-full border border-blue-900/45 px-3 py-1">
                      {article.topic}
                    </span>
                    <span className="text-blue-900/55">{article.date}</span>
                  </span>
                  <span className="mt-4 font-serif text-[1.3125rem] leading-[1.15] tracking-[-0.01em] text-navy-900">
                    {article.title}
                  </span>
                  <span className="mt-3 text-[13px] leading-[1.55] text-blue-900/70">
                    {article.summary}
                  </span>
                  <span className="mt-auto flex items-center gap-2.5 pt-5 text-[13px] font-medium group-hover:underline">
                    <Glyph name={article.icon} size={15} />
                    Read more
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {shown.length === 0 && (
          <p className="mt-9 text-sm text-blue-900/70">
            Nothing published under this topic yet.
          </p>
        )}

        <div className="mt-10 flex flex-wrap items-baseline gap-x-12 gap-y-4 border-t border-blue-900/15 pt-8">
          <h3 className="type-eyebrow text-[11px] text-blue-900/70">
            As featured in
          </h3>
          <ul className="flex flex-wrap items-baseline gap-x-12 gap-y-3 font-serif text-[1.5rem] leading-none tracking-[-0.01em]">
            {FEATURED_IN.map((outlet) => (
              <li key={outlet}>{outlet}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

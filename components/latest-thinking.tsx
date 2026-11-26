"use client";

import Link from "next/link";
import { useState } from "react";
import { Mark, Photo } from "@/components/brand";
import {
  articleDefaults,
  insightsDefaults,
  type ArticleContent,
  type InsightsContent,
} from "@/content/insights";

/** Marker beside "Read more", by format. */
const FORMAT_ICON: Record<string, string> = {
  article: "blocks",
  audio: "mic",
  video: "play",
};

/** "Latest thinking": articles with a topic filter, and press mentions. */
export function LatestThinking({
  articles = articleDefaults,
  content: c = insightsDefaults.latest,
}: {
  articles?: ArticleContent[];
  content?: InsightsContent["latest"];
}) {
  const [topic, setTopic] = useState("All");
  // The filter offers whichever topics the articles actually use.
  const topics = [...new Set(articles.map((a) => a.topic).filter(Boolean))];
  const shown =
    topic === "All" ? articles : articles.filter((a) => a.topic === topic);

  return (
    <section className="bg-paper-100 text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 py-14 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] text-navy-900">
            {c.title}
          </h2>
          <div
            role="group"
            aria-label="Filter by topic"
            className="flex flex-wrap gap-2"
          >
            {["All", ...topics].map((name) => (
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
            <li key={`${article.title}-${i}`}>
              <Link
                href={article.href || "#"}
                className="group flex h-full flex-col bg-white"
              >
                <span className="relative block aspect-[3/2] bg-paper-300">
                  <Photo
                    src={article.image ?? undefined}
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
                    <Mark
                      name={FORMAT_ICON[article.format] ?? "blocks"}
                      size={15}
                    />
                    Read more
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-baseline gap-x-12 gap-y-4 border-t border-blue-900/15 pt-8">
          <h3 className="type-eyebrow text-[11px] text-blue-900/70">
            {c.featuredInLabel}
          </h3>
          <ul className="flex flex-wrap items-baseline gap-x-12 gap-y-3 font-serif text-[1.5rem] leading-none tracking-[-0.01em]">
            {c.featuredIn.map((outlet) => (
              <li key={outlet}>{outlet}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

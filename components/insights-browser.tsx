"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { InsightCard } from "@/components/insight-card";
import { slugify, type ArticleContent } from "@/content/insights";

/**
 * The article grid with its topic filter. The chosen topic lives in the
 * address (/insights?topic=belonging) so a filtered view can be linked to.
 */
export function InsightsBrowser({
  title,
  articles,
}: {
  title: string;
  articles: ArticleContent[];
}) {
  const chosen = useSearchParams().get("topic") ?? "";
  const topics = [...new Set(articles.map((a) => a.topic).filter(Boolean))];
  const active = topics.find((name) => slugify(name) === slugify(chosen));
  const shown = active ? articles.filter((a) => a.topic === active) : articles;

  const pill = (on: boolean) =>
    `flex h-9 items-center px-4 text-[13px] font-medium transition-colors ${
      on ? "bg-blue-900 text-white" : "bg-white hover:bg-paper-300"
    }`;

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
        <div>
          <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] text-navy-900">
            {active ?? title}
          </h2>
          <p aria-live="polite" className="mt-2 text-[13px] text-blue-900/65">
            {shown.length} {shown.length === 1 ? "piece" : "pieces"}
          </p>
        </div>
        <nav aria-label="Filter by topic" className="flex flex-wrap gap-2">
          <Link
            href="/insights"
            scroll={false}
            aria-current={!active ? "true" : undefined}
            className={pill(!active)}
          >
            All
          </Link>
          {topics.map((name) => (
            <Link
              key={name}
              href={`/insights?topic=${slugify(name)}`}
              scroll={false}
              aria-current={active === name ? "true" : undefined}
              className={pill(active === name)}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>

      <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((article, i) => {
          // The lead story runs wide when the row can still be filled.
          const wide = i === 0 && shown.length !== 2;
          return (
            <li key={article.slug} className={wide ? "sm:col-span-2" : ""}>
              <InsightCard article={article} index={i} wide={wide} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { BlockButton, Flower, Photo } from "@/components/brand";
import { CtaBand } from "@/components/cta-band";
import { Glyph } from "@/components/icons";
import { ArticleMeta, formatOf } from "@/components/insight-card";
import { InsightsBrowser } from "@/components/insights-browser";
import { slugify } from "@/content/insights";
import { getArticles, getInsights } from "@/sanity/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await getInsights();
  return { title: page.seoTitle, description: page.seoDescription };
}

const TOPIC_TONES = [
  "bg-tan-300 text-blue-900",
  "bg-lilac-200 text-blue-900",
  "bg-mist-200 text-blue-900",
  "bg-white text-blue-900",
];

export default async function InsightsPage() {
  const [{ page, latest }, articles] = await Promise.all([
    getInsights(),
    getArticles(),
  ]);
  const [lead, ...rest] = articles;
  const topics = [...new Set(articles.map((a) => a.topic).filter(Boolean))];

  return (
    <>
      {/* Masthead with the lead story */}
      <section className="relative overflow-hidden bg-blue-700 text-white">
        <Flower
          outline
          size={420}
          className="pointer-events-none absolute -right-32 -top-20 hidden rotate-12 text-white/25 lg:block"
        />
        <div className="relative mx-auto max-w-[1440px] px-6 pb-14 pt-6 md:px-16 lg:pb-16 lg:pt-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-3 text-[13px] text-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Insights
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid items-end gap-x-16 gap-y-8 lg:mt-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <div>
              <p className="flex items-center gap-2.5 text-[13px] text-white/85">
                <Glyph name="check" size={14} className="text-lilac-300" />
                {page.eyebrow}
              </p>
              <h1 className="mt-4 font-serif text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.98] tracking-[-0.02em]">
                {page.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </div>
            <p className="max-w-[26rem] text-[15px] leading-[1.6] text-white/80 lg:pb-2">
              {page.body}
            </p>
          </div>

          {lead && (
            <Link
              href={`/insights/${lead.slug}`}
              className="group mt-12 grid bg-paper-100 text-blue-900 lg:mt-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]"
            >
              <span className="relative block aspect-[3/2] bg-blue-200 lg:aspect-auto lg:min-h-[400px]">
                <Photo
                  src={lead.image ?? undefined}
                  alt=""
                  slot={`Lead story · ${lead.topic}`}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <span className="absolute bottom-0 left-0 bg-lilac-200 px-4 py-2.5 text-xs font-medium">
                  Lead story
                </span>
              </span>
              <span className="flex flex-col p-6 sm:p-10 lg:p-12">
                <ArticleMeta article={lead} />
                <span className="mt-6 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.04] tracking-[-0.015em] text-navy-900">
                  {lead.title}
                </span>
                <span className="mt-5 max-w-[30rem] text-[15px] leading-[1.6] text-blue-900/75">
                  {lead.summary}
                </span>
                <span className="mt-auto flex gap-[3px] pt-9 text-[13px] font-medium">
                  <span className="flex h-11 items-center bg-blue-900 px-5 text-white">
                    {formatOf(lead).verb} the piece
                  </span>
                  <span className="flex size-11 items-center justify-center bg-blue-900 text-white transition-transform group-hover:translate-x-0.5">
                    <Glyph name="arrow-right" size={16} />
                  </span>
                </span>
              </span>
            </Link>
          )}
        </div>
      </section>

      {/* The rest, filterable */}
      <section
        id="latest"
        className="dot-grid scroll-mt-10 bg-paper-100 text-blue-900"
      >
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-16 lg:py-20">
          <Suspense fallback={<div className="min-h-[480px]" />}>
            <InsightsBrowser
              title={page.browseTitle}
              articles={rest.length ? rest : articles}
            />
          </Suspense>

          <div className="mt-12 flex flex-wrap items-baseline gap-x-12 gap-y-4 border-t border-blue-900/15 pt-8">
            <h2 className="type-eyebrow text-[11px] text-blue-900/70">
              {latest.featuredInLabel}
            </h2>
            <ul className="flex flex-wrap items-baseline gap-x-12 gap-y-3 font-serif text-[1.5rem] leading-none tracking-[-0.01em]">
              {latest.featuredIn.map((outlet) => (
                <li key={outlet}>{outlet}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="relative overflow-hidden bg-navy-700 text-white">
        <Flower
          outline
          size={340}
          className="pointer-events-none absolute -left-24 -top-16 rotate-12 text-white/15"
        />
        <div className="relative mx-auto max-w-[1440px] px-6 py-14 md:px-16 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
            <div>
              <p className="mb-3.5 text-[13px] text-white/75">
                {page.topicsEyebrow}
              </p>
              <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em]">
                {page.topicsTitle.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>
            <BlockButton href="/contact" variant="light">
              Ask us a question
            </BlockButton>
          </div>

          <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic, i) => {
              const count = articles.filter((a) => a.topic === topic).length;
              return (
                <li key={topic}>
                  <Link
                    href={`/insights?topic=${slugify(topic)}#latest`}
                    className={`group flex h-full min-h-[168px] flex-col justify-between p-6 ${
                      TOPIC_TONES[i % TOPIC_TONES.length]
                    }`}
                  >
                    <span className="flex items-center justify-between text-[11px] tracking-[0.04em] opacity-70">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span>
                        {count} {count === 1 ? "piece" : "pieces"}
                      </span>
                    </span>
                    <span className="flex items-end justify-between gap-4">
                      <span className="font-serif text-[1.625rem] leading-[1.05] tracking-[-0.01em]">
                        {topic}
                      </span>
                      <Glyph
                        name="arrow-right"
                        size={16}
                        className="mb-1 shrink-0 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import { BlockButton, Flower, Mark, Photo } from "@/components/brand";
import { CtaBand } from "@/components/cta-band";
import { Glyph } from "@/components/icons";
import { formatOf, InsightCard } from "@/components/insight-card";
import { readTime, slugify } from "@/content/insights";
import { getArticles } from "@/sanity/lib/content";

type Props = { params: Promise<{ slug: string }> };

/** One page per article. */
export async function generateStaticParams() {
  return (await getArticles()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = (await getArticles()).find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} · Jernigan & Associates`,
    description: article.summary,
  };
}

/**
 * The slug is read inside <Suspense> so the part of the route shared by every
 * article link (header, footer) does not depend on one URL. While a page
 * loads, the space its header will fill is held in the header's blue.
 */
export default function ArticlePage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <div aria-hidden="true" className="min-h-[70svh] bg-blue-700" />
      }
    >
      <ArticleContent params={params} />
    </Suspense>
  );
}

const paragraphs = (text: string) =>
  text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

async function ArticleContent({ params }: Props) {
  const { slug } = await params;
  const articles = await getArticles();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    // /insights/<topic> is a link to that topic's articles.
    const topic = articles.find((a) => slugify(a.topic) === slug)?.topic;
    if (topic) redirect(`/insights?topic=${slugify(topic)}#latest`);
    notFound();
  }

  const format = formatOf(article);
  const sections = article.body.filter((s) => s.heading || s.text);
  // The pull quote sits after the first section, or the second of three-plus.
  const quoteAfter = sections.length > 2 ? 1 : 0;
  const related = [
    ...articles.filter((a) => a.slug !== slug && a.topic === article.topic),
    ...articles.filter((a) => a.slug !== slug && a.topic !== article.topic),
  ].slice(0, 3);

  return (
    <article>
      {/* Header */}
      <header className="relative overflow-hidden bg-blue-700 text-white">
        <Flower
          outline
          size={420}
          className="pointer-events-none absolute -right-32 -top-20 hidden rotate-12 text-white/25 lg:block"
        />
        <div className="relative mx-auto max-w-[1440px] px-6 pb-28 pt-6 md:px-16 lg:pb-40 lg:pt-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-3 text-[13px] text-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/insights"
                  className="transition-colors hover:text-white"
                >
                  Insights
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                {article.topic}
              </li>
            </ol>
          </nav>

          <div className="mt-10 max-w-[56rem] lg:mt-14">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px]">
              <Link
                href={`/insights?topic=${slugify(article.topic)}#latest`}
                className="rounded-full bg-lilac-200 px-3 py-1 text-xs font-medium text-blue-900 transition-colors hover:bg-white"
              >
                {article.topic}
              </Link>
              <span className="text-white/75">{article.date}</span>
              <span aria-hidden="true" className="text-white/40">
                ·
              </span>
              <span className="flex items-center gap-2 text-white/75">
                <Mark name={format.icon} size={13} />
                {readTime(article)} {format.unit}
              </span>
            </p>
            <h1 className="mt-6 font-serif text-[clamp(2.25rem,5.2vw,4.5rem)] leading-[0.98] tracking-[-0.02em]">
              {article.title}
            </h1>
            <p className="mt-7 max-w-[40rem] font-serif text-[clamp(1.125rem,1.7vw,1.5rem)] leading-[1.3] text-white/85">
              {article.summary}
            </p>
          </div>
        </div>
      </header>

      {/* Image, pulled up over the header */}
      <div className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <div className="relative -mt-20 aspect-[16/9] bg-blue-200 text-blue-900 lg:-mt-28 lg:aspect-[21/9]">
            <Photo
              src={article.image ?? undefined}
              alt=""
              slot={article.topic}
              sizes="(min-width: 1440px) 1312px, 100vw"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white text-blue-900">
        <div className="mx-auto grid max-w-[1440px] gap-x-16 gap-y-12 px-6 py-14 md:px-16 lg:grid-cols-[220px_minmax(0,680px)] lg:py-20 xl:grid-cols-[260px_minmax(0,680px)] xl:gap-x-24">
          {/* Rail */}
          <aside className="text-[13px] lg:sticky lg:top-10 lg:self-start">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-blue-900/15 pt-5 lg:grid-cols-1">
              {[
                ["Written by", article.author],
                ["Published", article.date],
                ["Topic", article.topic],
              ]
                .filter(([, value]) => value)
                .map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[10.5px] font-medium uppercase tracking-[0.1em] text-blue-900/55">
                      {label}
                    </dt>
                    <dd className="mt-1">{value}</dd>
                  </div>
                ))}
            </dl>

            {sections.some((s) => s.heading) && (
              <nav
                aria-label="In this piece"
                className="mt-8 hidden border-t border-blue-900/15 pt-5 lg:block"
              >
                <p className="text-[10.5px] font-medium uppercase tracking-[0.1em] text-blue-900/55">
                  In this piece
                </p>
                <ol className="mt-3 space-y-2.5">
                  {sections
                    .filter((s) => s.heading)
                    .map((s, i) => (
                      <li key={s.heading} className="flex gap-3">
                        <span className="text-blue-900/45">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <a
                          href={`#${slugify(s.heading)}`}
                          className="leading-snug hover:underline"
                        >
                          {s.heading}
                        </a>
                      </li>
                    ))}
                </ol>
              </nav>
            )}
          </aside>

          {/* Text */}
          <div>
            {sections.length === 0 && (
              <p className="text-[1.0625rem] leading-[1.7] text-blue-900/85">
                {article.summary}
              </p>
            )}

            {sections.map((section, i) => (
              <section key={`${section.heading}-${i}`}>
                {section.heading && (
                  <h2
                    id={slugify(section.heading)}
                    className={`scroll-mt-10 font-serif text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.1] tracking-[-0.015em] text-navy-900 ${
                      i > 0 ? "mt-14" : ""
                    }`}
                  >
                    {section.heading}
                  </h2>
                )}
                {paragraphs(section.text).map((text, p) => (
                  <p
                    key={p}
                    className={
                      i === 0 && p === 0
                        ? "mt-5 text-[1.1875rem] leading-[1.6] text-blue-900"
                        : "mt-5 text-[1.0625rem] leading-[1.7] text-blue-900/85"
                    }
                  >
                    {text}
                  </p>
                ))}

                {article.pullQuote && i === quoteAfter && (
                  <figure className="my-14 bg-lilac-200 p-8 sm:p-10 lg:-mr-16">
                    <span className="flex size-11 items-center justify-center rounded-full bg-blue-900 text-tan-200">
                      <Glyph name="quote" size={18} />
                    </span>
                    <blockquote className="mt-6 font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.15] tracking-[-0.015em] text-navy-900">
                      {article.pullQuote}
                    </blockquote>
                  </figure>
                )}
              </section>
            ))}

            {article.takeaways.length > 0 && (
              <aside className="mt-14 bg-tan-300 p-8 sm:p-10">
                <h2 className="type-eyebrow text-[11px]">Key takeaways</h2>
                <ul className="mt-5 space-y-3.5">
                  {article.takeaways.map((item) => (
                    <li key={item} className="flex gap-3.5">
                      <Flower size={16} className="mt-1 shrink-0" />
                      <span className="text-[1.0625rem] leading-[1.5]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            <div className="mt-14 flex flex-wrap items-center justify-between gap-x-10 gap-y-6 border-t border-blue-900/15 pt-8">
              <div>
                <p className="text-[10.5px] font-medium uppercase tracking-[0.1em] text-blue-900/55">
                  Written by
                </p>
                <p className="mt-1.5 font-serif text-[1.375rem] leading-tight tracking-[-0.01em]">
                  {article.author || "Jernigan & Associates"}
                </p>
              </div>
              <BlockButton href="/contact">Talk to us about this</BlockButton>
            </div>
          </div>
        </div>
      </div>

      {/* Keep reading */}
      {related.length > 0 && (
        <section className="dot-grid bg-paper-100 text-blue-900">
          <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-16 lg:py-20">
            <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
              <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] text-navy-900">
                Keep reading
              </h2>
              <Link
                href="/insights"
                className="flex items-center gap-2.5 text-[13px] font-medium hover:underline"
              >
                All insights
                <Glyph name="arrow-right" size={14} />
              </Link>
            </div>
            <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <li key={item.slug}>
                  <InsightCard article={item} index={i} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand />
    </article>
  );
}

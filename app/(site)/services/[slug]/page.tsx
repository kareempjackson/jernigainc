import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CtaBand } from "@/components/cta-band";
import { LatestThinking } from "@/components/latest-thinking";
import { heroProps, PageHero } from "@/components/page-hero";
import { QuoteBand } from "@/components/quote-band";
import { ResearchFrameworks } from "@/components/research-frameworks";
import { ServiceAreas } from "@/components/service-areas";
import { ServiceCase } from "@/components/service-case";
import { ServiceOfferings } from "@/components/service-offerings";
import { getArticles, getInsights, getServices } from "@/sanity/lib/content";

type Props = { params: Promise<{ slug: string }> };

/** The practice area that also carries the research and articles sections. */
const RESEARCH = "research-and-evaluation";

/** One page per service document in the CMS. */
export async function generateStaticParams() {
  return (await getServices()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = (await getServices()).find((s) => s.slug === slug);
  return service?.seo ?? {};
}

/**
 * The slug is read inside <Suspense> so the part of the route that is shared
 * by every service link (header, footer) does not depend on one URL. While a
 * page loads, the space its hero will fill is held in the hero's blue.
 */
export default function ServicePage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <div
          aria-hidden="true"
          className="min-h-[calc(100svh-120px)] bg-blue-700"
        />
      }
    >
      <ServiceContent params={params} />
    </Suspense>
  );
}

async function ServiceContent({ params }: Props) {
  const { slug } = await params;
  const services = await getServices();
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const { hero, offerings, caseStudy, quote } = service;
  const research = slug === RESEARCH;
  const [insights, articles] = research
    ? await Promise.all([getInsights(), getArticles()])
    : [null, null];

  return (
    <>
      <PageHero
        crumb={service.name}
        parents={[{ label: "Services", href: "/services" }]}
        {...heroProps(hero)}
      />
      <ServiceOfferings
        eyebrow={offerings.eyebrow}
        title={[offerings.titleDark, offerings.titleBlue]}
        body={offerings.body}
        cta={{ label: offerings.ctaLabel, href: offerings.ctaHref }}
        offerings={offerings.items}
      />
      <ServiceCase
        title={caseStudy.title}
        context={caseStudy.context}
        role={caseStudy.role}
        outcomes={caseStudy.outcomes}
        imageSrc={caseStudy.image ?? undefined}
      />
      {insights && articles && (
        <>
          <ResearchFrameworks content={insights} />
          <LatestThinking articles={articles} content={insights.latest} />
        </>
      )}
      <QuoteBand
        tone={research ? "bg-white" : "bg-paper-100"}
        quote={quote.text}
        author={quote.author}
      />
      <ServiceAreas areas={services} current={slug} />
      <CtaBand />
    </>
  );
}

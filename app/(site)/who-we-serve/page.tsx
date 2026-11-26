import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { heroProps, PageHero } from "@/components/page-hero";
import { QuoteBand } from "@/components/quote-band";
import { WhoWeServeSectors } from "@/components/who-we-serve-sectors";
import { WhoWeServeStart } from "@/components/who-we-serve-start";
import { getWhoWeServe } from "@/sanity/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return (await getWhoWeServe()).seo;
}

export default async function WhoWeServePage() {
  const c = await getWhoWeServe();
  return (
    <>
      <PageHero crumb="Who we serve" {...heroProps(c.hero)} />
      <WhoWeServeSectors content={c.sectors} />
      <WhoWeServeStart content={c.start} />
      <QuoteBand
        tone="bg-paper-100"
        quote={c.quote.text}
        author={c.quote.author}
      />
      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import { AboutApproach } from "@/components/about-approach";
import { AboutDifference } from "@/components/about-difference";
import { AboutMission } from "@/components/about-mission";
import { AboutStory } from "@/components/about-story";
import { AboutValues } from "@/components/about-values";
import { CtaBand } from "@/components/cta-band";
import { heroProps, PageHero } from "@/components/page-hero";
import { QuoteBand } from "@/components/quote-band";
import { getAbout } from "@/sanity/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return (await getAbout()).seo;
}

export default async function AboutPage() {
  const c = await getAbout();
  return (
    <>
      <PageHero crumb="About" {...heroProps(c.hero)} />
      <AboutStory content={c.story} />
      <AboutDifference content={c.difference} />
      <AboutApproach content={c.approach} />
      <AboutValues content={c.values} />
      <AboutMission content={c.mission} />
      <QuoteBand quote={c.quote.text} author={c.quote.author} />
      <CtaBand />
    </>
  );
}

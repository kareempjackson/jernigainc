import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { heroProps, PageHero } from "@/components/page-hero";
import { TeamConsultants } from "@/components/team-consultants";
import { TeamFounder } from "@/components/team-founder";
import { TeamPartners } from "@/components/team-partners";
import { TeamSupport } from "@/components/team-support";
import { getTeam } from "@/sanity/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return (await getTeam()).seo;
}

export default async function OurTeamPage() {
  const c = await getTeam();
  return (
    <>
      <PageHero crumb="Our team" {...heroProps(c.hero)} />
      <TeamFounder content={c.founder} />
      <TeamConsultants content={c.consultants} />
      <TeamSupport content={c.support} />
      <TeamPartners content={c.partners} />
      <CtaBand />
    </>
  );
}

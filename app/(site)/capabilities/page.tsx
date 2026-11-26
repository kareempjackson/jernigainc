import type { Metadata } from "next";
import { CapabilitiesCompetencies } from "@/components/capabilities-competencies";
import { CapabilitiesContracting } from "@/components/capabilities-contracting";
import { CapabilitiesDifferentiators } from "@/components/capabilities-differentiators";
import { CapabilitiesHero } from "@/components/capabilities-hero";
import { CapabilitiesPastPerformance } from "@/components/capabilities-past-performance";
import { CtaBand } from "@/components/cta-band";
import { getCapabilities } from "@/sanity/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return (await getCapabilities()).seo;
}

export default async function CapabilitiesPage() {
  const c = await getCapabilities();
  return (
    <>
      <CapabilitiesHero content={c.hero} />
      <CapabilitiesCompetencies content={c.competencies} />
      <CapabilitiesDifferentiators content={c.differentiators} />
      <CapabilitiesPastPerformance content={c.pastPerformance} />
      <CapabilitiesContracting content={c.contracting} />
      <CtaBand />
    </>
  );
}

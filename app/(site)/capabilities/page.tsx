import type { Metadata } from "next";
import { CapabilitiesCompetencies } from "@/components/capabilities-competencies";
import { CapabilitiesContracting } from "@/components/capabilities-contracting";
import { CapabilitiesDifferentiators } from "@/components/capabilities-differentiators";
import { CapabilitiesHero } from "@/components/capabilities-hero";
import { CapabilitiesPastPerformance } from "@/components/capabilities-past-performance";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Capabilities · Jernigan & Associates",
  description:
    "Corporate data, registrations and capabilities statement for Jernigan and Associates, an SBA-certified WOSB applying psychological and educational science to organizational practice.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <CapabilitiesHero />
      <CapabilitiesCompetencies />
      <CapabilitiesDifferentiators />
      <CapabilitiesPastPerformance />
      <CapabilitiesContracting />
      <CtaBand />
    </>
  );
}

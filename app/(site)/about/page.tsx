import type { Metadata } from "next";
import { AboutApproach } from "@/components/about-approach";
import { AboutDifference } from "@/components/about-difference";
import { AboutMission } from "@/components/about-mission";
import { AboutStory } from "@/components/about-story";
import { AboutValues } from "@/components/about-values";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { QuoteBand } from "@/components/quote-band";

export const metadata: Metadata = {
  title: "About · Jernigan & Associates",
  description:
    "Jernigan & Associates Psychological and Educational Consulting, Inc. is a woman-owned boutique firm. Since 2008, we have helped mission-driven organizations turn good intentions into measurable, lasting change.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About Jernigan & Associates"
        title={["Psychological", "science, translated", "into lasting change."]}
        body="Jernigan & Associates Psychological and Educational Consulting, Inc. is a woman-owned boutique firm. Since 2008, we have helped mission-driven organizations turn good intentions into measurable, lasting change."
        secondary={{ label: "Meet the team", href: "/our-team" }}
        topChip={{
          icon: "pin",
          figure: "2008",
          label: "Founded in Atlanta, GA",
        }}
        bottomChip={{ figure: "35,000+", label: "Professionals trained" }}
      />
      <AboutStory />
      <AboutDifference />
      <AboutApproach />
      <AboutValues />
      <AboutMission />
      <QuoteBand />
      <CtaBand />
    </>
  );
}

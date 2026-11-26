import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { LatestThinking } from "@/components/latest-thinking";
import { PageHero } from "@/components/page-hero";
import { QuoteBand } from "@/components/quote-band";
import { ResearchFrameworks } from "@/components/research-frameworks";
import { ServiceAreas } from "@/components/service-areas";
import { ServiceCase } from "@/components/service-case";
import { ServiceOfferings } from "@/components/service-offerings";

export const metadata: Metadata = {
  title: "Research and Evaluation · Jernigan & Associates",
  description:
    "We help organizations and researchers design and conduct rigorous, equity-centered research and evaluation, from organizational assessment to program evaluation.",
};

export default function ResearchAndEvaluationPage() {
  return (
    <>
      <PageHero
        crumb="Research and Evaluation"
        parents={[{ label: "Services", href: "/services" }]}
        eyebrow="Research, Assessment, and Evaluation"
        title={[
          "Evidence that reveals",
          "both the problem",
          "and the path forward.",
        ]}
        body="We help organizations and researchers design and conduct rigorous, equity-centered research and evaluation, from organizational assessment to program evaluation, all grounded in the Intersections Research Lab and community-based participatory principles."
        secondary={{ label: "Read the case scenario", href: "#case" }}
        topChip={{
          icon: "pin",
          figure: "Mixed methods",
          label: "Surveys, focus groups and document review",
        }}
        bottomChip={{ figure: "35,000+", label: "Professionals trained" }}
      />
      <ServiceOfferings
        offerings={[
          "Organizational and climate assessments using surveys, focus groups, and document review.",
          "Program evaluation and continuous quality improvement, including pre and post and behavior-change measures.",
          "Research methodology training and anti-racism research coaching.",
          "Translation of findings into clear, board-ready recommendations.",
        ]}
      />
      <ServiceCase
        title="National Professional Association"
        context="A national mental-health professional association had adopted equity statements but had not embedded them in governance, research priorities, or member engagement, and needed both vision and concrete action planning."
        role="Partnering with multiple divisions over several years, we provided strategic planning to embed equity across functions; assessed and advised the Science Directorate on integrating race and racism into research priorities and funding; facilitated a multi-day research-to-practice summit; developed member training curricula; and coached senior leaders through change."
        outcomes={[
          "Racial equity goals integrated into strategic planning across directorates",
          "A research agenda and funding priorities centered on race and racism",
          "Training resources disseminated to thousands of members",
          "Greater organizational accountability for equity commitments",
          "Increased representation of scholars and practitioners of Color in leadership",
        ]}
      />
      <ResearchFrameworks />
      <LatestThinking />
      <QuoteBand
        quote="Your integration of context, culture, and social factors in both clinical and academic settings resonates strongly with my own interests in collective healing."
        author="Former clinical intern"
      />
      <ServiceAreas current="research-and-evaluation" />
      <CtaBand />
    </>
  );
}

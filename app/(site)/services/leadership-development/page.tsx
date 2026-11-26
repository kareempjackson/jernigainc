import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { QuoteBand } from "@/components/quote-band";
import { ServiceAreas } from "@/components/service-areas";
import { ServiceCase } from "@/components/service-case";
import { ServiceOfferings } from "@/components/service-offerings";

export const metadata: Metadata = {
  title: "Leadership Development · Jernigan & Associates",
  description:
    "We work with leaders, managers, and teams to build cultures of belonging, grow inclusive leadership and people-management capacity, and create accountability structures that sustain equity work.",
};

export default function LeadershipDevelopmentPage() {
  return (
    <>
      <PageHero
        crumb="Leadership Development"
        parents={[{ label: "Services", href: "/services" }]}
        eyebrow="Leadership, People Management, and Organizational Culture"
        title={[
          "Inclusive leadership",
          "and people",
          "management that",
          "sustain change.",
        ]}
        body="We work with leaders, managers, and teams to build cultures of belonging, grow inclusive leadership and people-management capacity, and create accountability structures that sustain equity work over time. With William James College, we also help build a more diverse leadership pipeline."
        secondary={{ label: "Read the case scenario", href: "#case" }}
        topChip={{
          icon: "pin",
          figure: "Pipeline",
          label: "Leadership Development Institute Fellowship",
        }}
        bottomChip={{ figure: "35,000+", label: "Professionals trained" }}
      />
      <ServiceOfferings
        offerings={[
          "Executive and management coaching for leaders navigating change and equity challenges.",
          "People-management practices, including inclusive hiring, supervision, performance, and retention.",
          "Organizational culture assessments examining inclusion, belonging, and psychological safety.",
          "Leadership development programs centered on inclusive, anti-oppression leadership.",
          "Facilitation of difficult conversations and conflict resolution across differences.",
          "Accountability mechanisms and metrics for equity goals.",
        ]}
      />
      <ServiceCase
        title="State Youth Services Department"
        context="A state department of youth services set out to reduce racial disparities in detention and embed trauma-informed, healing-centered practice across facilities, but staff lacked training and the culture reflected punitive rather than restorative values."
        role="Over a multi-year engagement, we led racial-equity strategy and trauma-informed systems transformation: assessing disparities across detention, programming, and discipline; delivering a statewide training program for all staff; coaching trauma resource specialists; embedding equity metrics and accountability into operations; and facilitating learning communities to sustain change."
        outcomes={[
          "Trauma-informed practices implemented across all facilities statewide",
          "Racial equity metrics and accountability structures at the departmental level",
          "Documented shifts toward healing-centered staff practices",
          "Sustainable internal training capacity",
          "Data systems to monitor and address ongoing disparities",
        ]}
      />
      <QuoteBand
        tone="bg-paper-100"
        quote="Dr. Jernigan-Noesi’s presentation was dynamic, powerful, and engaging, with data that was relevant and applicable. I came away feeling inspired, more knowledgeable, and more confident."
        author="Organizational leader"
      />
      <ServiceAreas current="leadership-development" />
      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { QuoteBand } from "@/components/quote-band";
import { ServiceAreas } from "@/components/service-areas";
import { ServiceCase } from "@/components/service-case";
import { ServiceOfferings } from "@/components/service-offerings";

export const metadata: Metadata = {
  title: "Curriculum and Training · Jernigan & Associates",
  description:
    "Curricula and trainings that change practice, not just knowledge. We have trained 35,000+ professionals and built curricula for graduate programs, agencies, and national associations.",
};

/** Where "Request the training catalog" leads. */
const CATALOG = { label: "Request the training catalog", href: "/contact" };

export default function CurriculumAndTrainingPage() {
  return (
    <>
      <PageHero
        crumb="Curriculum and Training"
        parents={[{ label: "Services", href: "/services" }]}
        eyebrow="Curriculum Development and Training"
        title={[
          "Curricula and",
          "trainings that change",
          "practice, not just",
          "knowledge.",
        ]}
        body="Designing and delivering learning is at the heart of our work. We have trained 35,000+ professionals and built curricula for graduate programs, agencies, and national associations. Content, deliverables, and timelines are co-created with every client."
        primary={CATALOG}
        secondary={{ label: "Read the case scenario", href: "#case" }}
        topChip={{
          icon: "pin",
          figure: "4 tiers",
          label: "All-staff, direct-service, supervisory, leadership",
        }}
        bottomChip={{ figure: "35,000+", label: "Professionals trained" }}
      />
      <ServiceOfferings
        eyebrow="Signature offerings"
        title={["Six signature trainings,", "built to scale."]}
        body="Delivered in person, virtually, and in asynchronous, LMS-ready formats, each with pre and post knowledge checks and follow-up to support behavior change. The full menu lives in our 2026 Training Catalog."
        cta={CATALOG}
        offerings={[
          "Foundational Training in Racism-Related Stress and Trauma Across the Lifespan.",
          "Trauma-Informed Mental Health Care.",
          "Racially Conscious and Culturally Responsive Supervision and Management.",
          "Building Inclusive Educational Experiences.",
          "Culturally Responsive Leadership Development.",
          "Inclusive Health Equity Praxis.",
        ]}
      />
      <ServiceCase
        title="National Mental Health Association"
        context="A national mental health professional association sought to strengthen the leadership and mentoring pipeline for early-career psychologists, including fellows from communities historically underrepresented in the field. Existing mentoring resources did not consistently reflect the identities, lived experiences, and developmental needs of diverse mentors and mentees."
        role="We designed a customized leadership development and advanced mentoring curriculum using an intersectional lens. The work included reviewing existing mentoring frameworks, developing culturally responsive curriculum and facilitator materials informed by a participant pre-survey, then piloting with fellows and content experts and refining the materials for association-wide implementation."
        outcomes={[
          "A complete, culturally responsive advanced mentoring curriculum aligned to the association’s leadership pipeline",
          "An intersectional lens integrated throughout mentor and mentee development",
          "Custom facilitator materials and participant worksheets informed by pre-session data",
          "Structured piloting and feedback that readied the curriculum for association-wide distribution",
        ]}
      />
      <QuoteBand
        tone="bg-paper-100"
        quote="I had not learned about Racial Identity Theory before, and it was a very useful framework for approaching my own learning and the work I do with clients."
        author="Clinical practitioner"
      />
      <ServiceAreas current="curriculum-and-training" />
      <CtaBand />
    </>
  );
}

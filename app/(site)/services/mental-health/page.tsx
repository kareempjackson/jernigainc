import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { QuoteBand } from "@/components/quote-band";
import { ServiceAreas } from "@/components/service-areas";
import { ServiceCase } from "@/components/service-case";
import { ServiceOfferings } from "@/components/service-offerings";

export const metadata: Metadata = {
  title: "Mental Health · Jernigan & Associates",
  description:
    "We help mental and behavioral health organizations strengthen the care they deliver, and train clinicians, educators, and leaders to recognize and respond to race-related stress and trauma.",
};

export default function MentalHealthPage() {
  return (
    <>
      <PageHero
        crumb="Mental Health"
        parents={[{ label: "Services", href: "/services" }]}
        eyebrow="Mental Health and Racial Trauma"
        title={[
          "Quality mental",
          "health care is",
          "culturally responsive",
          "care.",
        ]}
        body="We help mental and behavioral health organizations strengthen the care they deliver and better meet the needs of the clients and communities they serve. We also train clinicians, educators, and leaders to recognize and respond to race-related stress and trauma, treating discrimination as a social determinant of mental health."
        secondary={{ label: "Read the case scenario", href: "#case" }}
        topChip={{
          icon: "pin",
          figure: "Every role",
          label: "Frontline, clinical and management training",
        }}
        bottomChip={{ figure: "35,000+", label: "Professionals trained" }}
      />
      <ServiceOfferings
        offerings={[
          "Organizational assessment, including mixed-methods employee assessment, policy review, and operational audit.",
          "Clinical assessment and treatment of racial trauma, and culturally responsive treatment protocols.",
          "Racially conscious and culturally responsive supervision and management.",
          "Role-specific training across frontline staff, clinical staff, and managers.",
          "Consultation with quality-improvement and research teams to improve client experience and outcomes.",
        ]}
      />
      <ServiceCase
        title="Community-Based Mental Health Agency"
        context="A large community-based mental health agency wanted to strengthen its services and better meet client needs. Leadership sought an objective, organization-wide picture of how to support staff and operations in order to improve care."
        role="We conducted an organizational audit that combined a mixed-methods employee assessment (surveys and focus groups), a policy review, and an operational audit, then designed and delivered training and professional development across staff positions, including frontline staff, clinical staff, and managers. We partnered closely with the agency’s quality-improvement and research staff throughout."
        outcomes={[
          "Customized training tailored to each staff role, from frontline to clinical to management",
          "An organizational assessment that informed efforts to improve staff experiences and increase retention",
          "Ongoing consultation with quality-improvement and research staff",
          "Customized recommendations to improve the client and patient experience and outcomes",
        ]}
      />
      <QuoteBand
        tone="bg-paper-100"
        quote="This was an excellent presentation, dense with material that is both crucial and foundational to clinical practice. I had never seen this developmental model integrated with such specific assessment questions and conceptualizations."
        author="Mental health professional, training participant"
      />
      <ServiceAreas current="mental-health" />
      <CtaBand />
    </>
  );
}

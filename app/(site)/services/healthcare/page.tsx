import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { QuoteBand } from "@/components/quote-band";
import { ServiceAreas } from "@/components/service-areas";
import { ServiceCase } from "@/components/service-case";
import { ServiceOfferings } from "@/components/service-offerings";

export const metadata: Metadata = {
  title: "Healthcare · Jernigan & Associates",
  description:
    "We help healthcare organizations close racial and ethnic disparities in care delivery, patient outcomes, and workforce composition through culturally responsive care.",
};

export default function HealthcarePage() {
  return (
    <>
      <PageHero
        crumb="Healthcare"
        parents={[{ label: "Services", href: "/services" }]}
        eyebrow="Healthcare Equity and Culturally Responsive Treatment"
        title={[
          "Culturally responsive",
          "care improves",
          "outcomes and lowers",
          "risk.",
        ]}
        body="We help healthcare organizations close racial and ethnic disparities in care delivery, patient outcomes, and workforce composition, addressing barriers from individual provider-patient interactions to institutional policies and community engagement. Culturally responsive care is linked to better access, engagement, adherence, and quality, and to lower medical error, malpractice risk, and cost."
        secondary={{ label: "Read the case scenario", href: "#case" }}
        topChip={{
          icon: "pin",
          figure: "Systems",
          label: "From bedside to boardroom",
        }}
        bottomChip={{ figure: "35,000+", label: "Professionals trained" }}
      />
      <ServiceOfferings
        offerings={[
          "Health equity strategic planning and implementation roadmaps.",
          "Assessment of disparities in patient outcomes and care access.",
          "Training on bias, cultural humility, and patient-centered communication.",
          "Culturally responsive treatment protocols and care pathways.",
          "Community health program design grounded in equity-centered frameworks.",
        ]}
      />
      <ServiceCase
        title="Regional Hospital System"
        context="A regional hospital system documented significant disparities in patient outcomes across service lines and recognized health equity as both a moral imperative and a strategic priority, but lacked a systems-level framework to act on it."
        role="Across a three-year engagement, we served as strategic advisors: assessing disparities data, workforce demographics, policies, and frontline experiences; facilitating a system-wide health equity strategic plan with leadership, providers, and community partners; and supporting bias and culturally responsive care training, tailored patient materials and care pathways, and a health equity dashboard."
        outcomes={[
          "System-wide health equity strategic plan with measurable goals",
          "Equity-focused quality-improvement initiatives across departments",
          "Culturally responsive care pathways and patient communication materials",
          "Health equity metrics and a dashboard integrated into reporting",
          "Documented disparity reductions in targeted clinical areas, and state-level Health Equity Certification",
        ]}
      />
      <QuoteBand
        tone="bg-paper-100"
        quote="I will use this information when teaching and with my patients regardless of their ethnicity. I found it highly valuable, and Dr. Maryam’s knowledge and presentation were outstanding."
        author="Medical professional"
      />
      <ServiceAreas current="healthcare" />
      <CtaBand />
    </>
  );
}

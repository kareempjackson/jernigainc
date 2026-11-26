import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { QuoteBand } from "@/components/quote-band";
import { ServiceAreas } from "@/components/service-areas";
import { ServiceCase } from "@/components/service-case";
import { ServiceOfferings } from "@/components/service-offerings";

export const metadata: Metadata = {
  title: "Education · Jernigan & Associates",
  description:
    "We help educational institutions create inclusive, equitable learning environments, Pre-K through higher education, where every student can thrive academically, socially, and emotionally.",
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        crumb="Education"
        parents={[{ label: "Services", href: "/services" }]}
        eyebrow="Educational Excellence and Inclusive Pedagogy"
        title={[
          "Inclusive, equitable",
          "learning environments,",
          "Pre-K through higher",
          "education.",
        ]}
        body="We help educational institutions create learning environments where every student, and especially Students of Color and students from marginalized communities, can thrive academically, socially, and emotionally. Our consultants bring backgrounds in psychology and behavioral health, education, public health, medicine, and organizational leadership."
        secondary={{ label: "Read the case scenario", href: "#case" }}
        topChip={{
          icon: "pin",
          figure: "Pre-K to 16",
          label: "Every stage of the learning journey",
        }}
        bottomChip={{ figure: "35,000+", label: "Professionals trained" }}
      />
      <ServiceOfferings
        offerings={[
          "Faculty development on culturally responsive, racially conscious, and inclusive pedagogy.",
          "Curriculum review and redesign that centers diverse perspectives and histories.",
          "Assessment of student experiences and institutional climate related to race and identity.",
          "Support programs for Students of Color at predominantly white institutions.",
          "Leadership coaching for academic administrators on equity-centered decision-making.",
        ]}
      />
      <ServiceCase
        title="Public School District"
        context="A suburban district with growing racial and ethnic diversity faced persistent opportunity gaps and climate concerns raised by families of Color. Teachers felt unprepared to address racism or support students experiencing racial trauma, and past diversity trainings had produced little change in the classroom."
        role="Over a multi-year engagement, we delivered professional development for educators, school-based clinicians, and district leadership; built online modules on racial trauma and inclusive pedagogy; coached principals and administrators; consulted on culturally responsive curriculum; and facilitated listening sessions with students and families of Color."
        outcomes={[
          "District-wide online training accessible to all staff",
          "Greater educator knowledge and confidence in supporting Students of Color",
          "New culturally responsive curriculum selections and instructional practices",
          "Ongoing structures for student and family input into district decisions",
          "Improved school climate as reported by students and families of Color",
        ]}
      />
      <QuoteBand
        tone="bg-paper-100"
        quote="Concrete examples enhanced learning. Very refreshing to learn from a Black woman. You are doing amazing work."
        author="Training participant"
      />
      <ServiceAreas current="education" />
      <CtaBand />
    </>
  );
}

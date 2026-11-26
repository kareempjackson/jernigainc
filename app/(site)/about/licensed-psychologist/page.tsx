import type { Metadata } from "next";
import { ClinicalApproaches } from "@/components/clinical-approaches";
import { ClinicalPractice } from "@/components/clinical-practice";
import { ClinicalWelcome } from "@/components/clinical-welcome";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Licensed Psychologist · Jernigan & Associates",
  description:
    "Culturally responsive psychological care with Dr. Maryam M. Jernigan-Noesi: an affirming, trauma-informed space where the whole of who you are is welcome.",
};

export default function LicensedPsychologistPage() {
  return (
    <>
      <PageHero
        crumb="Licensed Psychologist"
        parents={[{ label: "About", href: "/about" }]}
        eyebrow="Clinical Practice"
        title={[
          "Culturally responsive",
          "psychological care with",
          "Dr. Maryam M.",
          "Jernigan-Noesi",
        ]}
        body="Our emotional health is inseparable from our histories, families, cultures, and lived experiences. Dr. Jernigan-Noesi offers an affirming, trauma-informed, and culturally responsive space where the whole of who you are is welcome."
        primary={{ label: "Inquire about availability", href: "/contact" }}
        secondary={{ label: "How therapy works", href: "#how-therapy-works" }}
        topChip={{
          icon: "pin",
          figure: "Nearly 20 yrs",
          label: "Providing mental health care",
        }}
      />
      <ClinicalPractice />
      <ClinicalApproaches />
      <ClinicalWelcome />
    </>
  );
}

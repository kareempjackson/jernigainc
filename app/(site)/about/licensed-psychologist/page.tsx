import type { Metadata } from "next";
import { ClinicalApproaches } from "@/components/clinical-approaches";
import { ClinicalPractice } from "@/components/clinical-practice";
import { ClinicalWelcome } from "@/components/clinical-welcome";
import { heroProps, PageHero } from "@/components/page-hero";
import { getPsychologist } from "@/sanity/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return (await getPsychologist()).seo;
}

export default async function LicensedPsychologistPage() {
  const c = await getPsychologist();
  return (
    <>
      <PageHero
        crumb="Licensed Psychologist"
        parents={[{ label: "About", href: "/about" }]}
        {...heroProps(c.hero)}
      />
      <ClinicalPractice content={c.practice} />
      <ClinicalApproaches content={c.approaches} />
      <ClinicalWelcome content={c.welcome} />
    </>
  );
}

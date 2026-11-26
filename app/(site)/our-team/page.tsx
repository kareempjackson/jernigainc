import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { TeamConsultants } from "@/components/team-consultants";
import { TeamFounder } from "@/components/team-founder";
import { TeamHero } from "@/components/team-hero";
import { TeamPartners } from "@/components/team-partners";
import { TeamSupport } from "@/components/team-support";

export const metadata: Metadata = {
  title: "Our team · Jernigan & Associates",
  description:
    "Jernigan & Associates is led by Dr. Maryam M. Jernigan-Noesi and powered by a multidisciplinary team of senior consultants, consultants, junior associates, and strategic partners.",
};

export default function OurTeamPage() {
  return (
    <>
      <TeamHero />
      <TeamFounder />
      <TeamConsultants />
      <TeamSupport />
      <TeamPartners />
      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import { Founder } from "@/components/founder";
import { Hero } from "@/components/hero";
import { HowWeWork } from "@/components/how-we-work";
import { Impact } from "@/components/impact";
import { InTheRoom } from "@/components/in-the-room";
import { Insights } from "@/components/insights";
import { Partnership } from "@/components/partnership";
import { PracticeAreas } from "@/components/practice-areas";
import { SciencePractice } from "@/components/science-practice";
import { Team } from "@/components/team";
import { Testimonials } from "@/components/testimonials";
import { WhoWeAre } from "@/components/who-we-are";
import { getHome } from "@/sanity/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return (await getHome()).seo;
}

export default async function Home() {
  const c = await getHome();
  return (
    <>
      {/*
        With the header above it (40px announcement + 80px nav on desktop),
        the hero fills exactly the rest of the first screen.
      */}
      <div className="lg:h-[calc(100svh-120px)] lg:min-h-[440px]">
        <Hero className="h-full" content={c.hero} />
      </div>
      <HowWeWork content={c.howWeWork} />
      <InTheRoom content={c.film} />
      <WhoWeAre content={c.whoWeAre} />
      <PracticeAreas content={c.practiceAreas} />
      <Founder content={c.founder} />
      <Impact content={c.impact} />
      <Partnership content={c.partnership} />
      <SciencePractice content={c.science} />
      <Team content={c.team} />
      <Insights content={c.insights} />
      <Testimonials content={c.testimonials} />
    </>
  );
}

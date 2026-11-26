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

export default function Home() {
  return (
    <>
      {/*
        With the header above it (40px announcement + 80px nav on desktop),
        the hero fills exactly the rest of the first screen.
      */}
      <div className="lg:h-[calc(100svh-120px)] lg:min-h-[440px]">
        <Hero className="h-full" />
      </div>
      <HowWeWork />
      <InTheRoom />
      <WhoWeAre />
      <PracticeAreas />
      <Founder />
      <Impact />
      <Partnership />
      <SciencePractice />
      <Team />
      <Insights />
      <Testimonials />
    </>
  );
}

import { BlockButton, BloomGrid } from "@/components/brand";
import { getSite } from "@/sanity/lib/content";

/**
 * Closing call to action on a tan ground, with a faint bloom pattern. The
 * text comes from Site settings in the CMS.
 */
export async function CtaBand() {
  const { cta } = await getSite();
  return (
    <section className="relative overflow-hidden bg-tan-300 text-blue-900">
      <BloomGrid
        cols={5}
        rows={5}
        budClass="text-tan-500/30"
        bloomClass="text-tan-700/30"
        className="pointer-events-none absolute -top-8 right-[4%] hidden h-[125%] lg:block"
      />
      <div className="relative mx-auto max-w-[1440px] px-6 py-14 md:px-16 lg:py-20">
        <h2 className="max-w-[40rem] font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.04] tracking-[-0.015em]">
          {cta.title}
        </h2>
        <p className="mt-5 max-w-[30rem] text-[15px] leading-[1.6] text-blue-900/75">
          {cta.body}
        </p>
        <div className="mt-7">
          <BlockButton href={cta.href}>{cta.cta}</BlockButton>
        </div>
      </div>
    </section>
  );
}

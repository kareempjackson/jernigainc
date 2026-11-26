import { BlockButton, BloomGrid } from "@/components/brand";

/** Closing call to action on a tan ground, with a faint bloom pattern. */
export function CtaBand({
  title = "Ready to build something that lasts?",
  body = "Tell us what your organization is working toward, and we will help you get there.",
  cta = "Book a consultation",
  href = "/contact",
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
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
          {title}
        </h2>
        <p className="mt-5 max-w-[30rem] text-[15px] leading-[1.6] text-blue-900/75">
          {body}
        </p>
        <div className="mt-7">
          <BlockButton href={href}>{cta}</BlockButton>
        </div>
      </div>
    </section>
  );
}

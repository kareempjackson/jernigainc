import { Flower } from "@/components/brand";
import { Glyph, type GlyphName } from "@/components/icons";

/** `icon: null` draws the brand flower. */
const values: [GlyphName | null, string, string][] = [
  [
    "focus",
    "Evidence over performance",
    "Every recommendation is grounded in psychological science.",
  ],
  [
    "chat",
    "Partnership over prescription",
    "We co-design with the people closest to the work.",
  ],
  [
    null,
    "Trauma-informed",
    "We recognize the impact of trauma and design for safety, trust, and healing.",
  ],
  [
    "bars",
    "Healing-centered",
    "We attend to identity, well-being, and culture, not just compliance.",
  ],
  [
    "award",
    "Accountability",
    "We build specific, measurable mechanisms for sustained change.",
  ],
];

/** About page: "Our values" (the page's `#purpose` target). */
export function AboutValues() {
  return (
    <section
      id="purpose"
      className="relative scroll-mt-6 overflow-hidden bg-blue-900 text-white"
    >
      {/* Petal outlines, cropped at the frame edge */}
      <Flower
        outline
        size={380}
        className="pointer-events-none absolute -right-28 -top-24 hidden rotate-12 text-white/25 lg:block"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-16 py-14 lg:py-20">
        <p className="flex items-center gap-2.5 text-[13px] text-white/85">
          <span aria-hidden="true" className="size-1 rounded-full bg-current" />
          Our values
        </p>
        <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4">
          <span className="block">What we hold</span>
          <span className="block">ourselves to</span>
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map(([icon, title, body]) => (
            <li key={title} className="bg-blue-700 px-5 pb-7 pt-6">
              <span className="text-tan-300">
                {icon ? <Glyph name={icon} size={24} /> : <Flower size={24} />}
              </span>
              <h3 className="mt-4 font-serif text-[1.3125rem] leading-[1.15] tracking-[-0.01em]">
                {title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.55] text-white/75">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { Flower } from "@/components/brand";
import { Glyph, type GlyphName } from "@/components/icons";

/** `icon: null` draws the brand flower. */
const partners: { name: string; body: string; icon: GlyphName | null }[] = [
  {
    name: "The Healing Space at UC Santa Barbara",
    body: "Culturally responsive training and program development that address racial trauma and support Black community mental health.",
    icon: null,
  },
  {
    name: "William James College",
    body: "Co-development of the Leadership Development Institute Fellowship and Certificate in Leadership in Community Behavioral Health.",
    icon: "sprout",
  },
  {
    name: "IC-RACE Lab",
    body: "With Drs. Hector Adames and Nayeli Chavez-Dueñas: joint scholarship and public toolkits on racial trauma and resilience.",
    icon: "focus",
  },
  {
    name: "Steady Consulting LLC",
    body: "Culturally responsive substance-use and mental-health program design, training, and evaluation.",
    icon: "bars",
  },
];

/** Our team page: strategic partnerships. */
export function TeamPartners() {
  return (
    <section className="relative overflow-hidden bg-blue-900 text-white">
      {/* Petal outlines, cropped at the frame edge */}
      <Flower
        outline
        size={380}
        className="pointer-events-none absolute -right-28 -top-24 hidden rotate-12 text-white/25 lg:block"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-16 py-14 lg:py-20">
        <p className="flex items-center gap-2.5 text-[13px] text-white/85">
          <span aria-hidden="true" className="size-1 rounded-full bg-current" />
          Strategic partnerships
        </p>
        <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4">
          <span className="block">Partners who extend</span>
          <span className="block">the work</span>
        </h2>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map(({ name, body, icon }) => (
            <li key={name} className="bg-blue-700 px-6 pb-8 pt-7">
              <span className="text-tan-300">
                {icon ? <Glyph name={icon} size={24} /> : <Flower size={24} />}
              </span>
              <h3 className="mt-4 font-serif text-[1.375rem] leading-[1.15] tracking-[-0.01em]">
                {name}
              </h3>
              <p className="mt-3 text-sm leading-[1.55] text-white/75">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

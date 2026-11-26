import Link from "next/link";
import { BlockButton, Flower } from "@/components/brand";
import { Glyph, type GlyphName } from "@/components/icons";

/** `icon: null` draws the brand flower. */
export const practiceAreas: {
  slug: string;
  name: string;
  body: string;
  icon: GlyphName | null;
}[] = [
  {
    slug: "education",
    name: "Education",
    body: "Inclusive, culturally responsive learning environments, Pre-K through higher education.",
    icon: "sprout",
  },
  {
    slug: "mental-health",
    name: "Mental Health",
    body: "Racial trauma, culturally responsive clinical practice, and provider training.",
    icon: null,
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    body: "Health equity, culturally responsive care, and stronger patient-provider communication.",
    icon: "cross",
  },
  {
    slug: "research-and-evaluation",
    name: "Research and Evaluation",
    body: "Assessment, mixed-methods research, and program evaluation.",
    icon: "focus",
  },
  {
    slug: "leadership-development",
    name: "Leadership Development",
    body: "Executive coaching, inclusive leadership, people management, and organizational change.",
    icon: "bars",
  },
  {
    slug: "curriculum-and-training",
    name: "Curriculum and Training",
    body: "Curriculum and content design plus workshops and certificate programs.",
    icon: "blocks",
  },
];

/**
 * Service page: links to the other practice areas. `current` is the slug of
 * the page being viewed, which is left out.
 */
export function ServiceAreas({ current }: { current: string }) {
  const others = practiceAreas.filter((area) => area.slug !== current);
  return (
    <section className="bg-blue-900 text-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 py-14 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em]">
            <span className="block">Explore other</span>
            <span className="block">practice areas</span>
          </h2>
          <BlockButton href="/services" variant="light">
            All services
          </BlockButton>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {others.map(({ slug, name, body, icon }) => (
            <li key={slug}>
              <Link
                href={`/services/${slug}`}
                className="group flex h-full min-h-[17rem] flex-col bg-blue-700 px-5 pb-5 pt-6 transition-colors hover:bg-blue-500"
              >
                <span className="text-tan-300">
                  {icon ? (
                    <Glyph name={icon} size={24} />
                  ) : (
                    <Flower size={24} />
                  )}
                </span>
                <h3 className="mt-4 font-serif text-[1.3125rem] leading-[1.15] tracking-[-0.01em]">
                  {name}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.55] text-white/75">
                  {body}
                </p>
                <span className="mt-auto pt-6">
                  <span className="flex size-9 items-center justify-center bg-paper-100 text-blue-900 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <Glyph name="arrow-up-right" size={13} />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

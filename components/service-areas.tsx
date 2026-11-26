import Link from "next/link";
import { BlockButton, Mark } from "@/components/brand";
import { Glyph } from "@/components/icons";

export type ServiceArea = {
  slug: string;
  name: string;
  cardBody: string;
  icon: string;
};

/**
 * Service page: links to the other practice areas. `current` is the slug of
 * the page being viewed, which is left out.
 */
export function ServiceAreas({
  areas,
  current,
}: {
  areas: ServiceArea[];
  current: string;
}) {
  const others = areas.filter((area) => area.slug !== current);
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
          {others.map(({ slug, name, cardBody, icon }) => (
            <li key={slug}>
              <Link
                href={`/services/${slug}`}
                className="group flex h-full min-h-[17rem] flex-col bg-blue-700 px-5 pb-5 pt-6 transition-colors hover:bg-blue-500"
              >
                <Mark name={icon} size={24} className="text-tan-300" />
                <h3 className="mt-4 font-serif text-[1.3125rem] leading-[1.15] tracking-[-0.01em]">
                  {name}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.55] text-white/75">
                  {cardBody}
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

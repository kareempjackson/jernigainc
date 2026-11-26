import Link from "next/link";
import { Mark, Photo } from "@/components/brand";
import { Glyph } from "@/components/icons";
import {
  whoWeServeDefaults,
  type WhoWeServeContent,
} from "@/content/who-we-serve";

/** Who we serve page: the sector cards (the page's `#sectors` target). */
export function WhoWeServeSectors({
  content: c = whoWeServeDefaults.sectors,
}: {
  content?: WhoWeServeContent["sectors"];
}) {
  return (
    <section id="sectors" className="scroll-mt-6 bg-white text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-16 lg:py-20">
        <div className="grid items-end gap-x-16 gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)]">
          <div>
            <p className="flex items-center gap-2.5 text-[13px]">
              <span
                aria-hidden="true"
                className="size-1 rounded-full bg-current"
              />
              {c.eyebrow}
            </p>
            <h2 className="mt-4 text-navy-900 font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em]">
              {c.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <p className="text-[15px] leading-[1.6] text-blue-900/75">{c.body}</p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {c.items.map((sector) => (
            <li key={sector.name}>
              <Link
                href={sector.href || "#"}
                className="group flex h-full flex-col border border-blue-900/10 bg-paper-100"
              >
                <span className="relative block aspect-[5/3] bg-paper-300">
                  <Photo
                    src={sector.image ?? undefined}
                    alt=""
                    slot={sector.tag}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </span>
                <span className="flex flex-1 flex-col px-6 pb-6 pt-6">
                  <span className="inline-flex items-center gap-2 self-start bg-lilac-200 px-2.5 py-1.5 text-xs">
                    <Mark name={sector.icon} size={13} />
                    {sector.tag}
                  </span>
                  <span className="mt-4 font-serif text-[1.5rem] leading-[1.12] tracking-[-0.01em] text-navy-900">
                    {sector.name}
                  </span>
                  <span className="mt-3 text-sm leading-[1.6] text-blue-900/75">
                    {sector.body}
                  </span>

                  <span className="type-eyebrow mt-5 block border-t border-blue-900/15 pt-5 text-[10.5px] font-medium text-blue-500">
                    {c.helpLabel}
                  </span>
                  <span className="mt-3 block space-y-2.5 text-sm">
                    {sector.helps.map((help) => (
                      <span key={help} className="flex items-start gap-3">
                        <Glyph
                          name="check"
                          size={13}
                          className="mt-1 shrink-0 text-blue-500"
                        />
                        {help}
                      </span>
                    ))}
                  </span>

                  <span className="mt-auto flex items-center justify-between pt-8 text-sm font-medium">
                    {c.linkLabel}
                    <span className="flex size-9 items-center justify-center bg-blue-900 text-white transition-transform group-hover:translate-x-0.5">
                      <Glyph name="arrow-right" size={15} />
                    </span>
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

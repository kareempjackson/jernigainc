import type { ReactNode } from "react";
import Link from "next/link";
import { BlockButton, BloomGrid, Flower, Photo } from "@/components/brand";
import { Glyph } from "@/components/icons";

const SCALE_MAX = 50;

const experience = [
  {
    label: "Dr. Jernigan-Noesi’s clinical and research practice",
    figure: "20+ years",
    years: 20,
    bar: "bg-navy-100",
  },
  {
    label: "Jernigan & Associates, founded 2008",
    figure: "18 years",
    years: 18,
    bar: "bg-blue-200",
  },
  {
    label: "Collective experience across our consultants",
    figure: "50+ years",
    years: 50,
    bar: "bg-lilac-200",
  },
];

const stats = [
  ["100+", "organizations served"],
  ["35,000+", "professionals trained"],
  ["WOSB", "women-owned, certified"],
] as const;

const sectors: { icon: ReactNode; name: string; detail: string }[] = [
  {
    icon: <Flower size={18} />,
    name: "Education",
    detail: "Early childhood, K–12 and higher education",
  },
  {
    icon: <Glyph name="cross" size={18} />,
    name: "Behavioral health",
    detail: "Clinics, counseling centers and care teams",
  },
  {
    icon: <Glyph name="pin" size={18} />,
    name: "Healthcare",
    detail: "Health systems, QI and research teams",
  },
  {
    icon: <Glyph name="award" size={18} />,
    name: "Legal & criminal justice",
    detail: "Courts, agencies and advocacy organizations",
  },
  {
    icon: <Glyph name="dot" size={18} />,
    name: "Entertainment",
    detail: "Studios, creative teams and talent",
  },
];

/**
 * "Who we are": story, a workshop still, the experience chart and where we
 * work. Pass `imageSrc` (a file under /public) for the still.
 */
export function WhoWeAre({
  imageSrc,
  imageAlt = "",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white text-blue-900">
      <BloomGrid
        cols={2}
        rows={3}
        budClass="text-paper-200"
        bloomClass="text-paper-200"
        className="pointer-events-none absolute -right-28 top-16 hidden w-[380px] xl:block"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-16 lg:py-28">
        {/* Story + still */}
        <div className="grid items-center gap-x-20 gap-y-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div>
            <p className="mb-5 flex items-center gap-3 text-sm">
              <span className="size-1.5 rounded-full bg-blue-900" />
              Who we are
            </p>
            <h2 className="type-h2">
              Since 2008, turning good intentions into measurable,{" "}
              <span className="text-blue-500">lasting change.</span>
            </h2>
            <p className="type-body mt-8 max-w-[36rem] text-blue-900/80">
              Founded in 2008 as a small consulting agency working in
              educational settings, Jernigan &amp; Associates grew with demand
              from secondary schools and higher education into a women-owned,
              national practice led by a licensed psychologist and
              clinician-scientist.
            </p>
            <div className="mt-9">
              <BlockButton href="/about">Our story</BlockButton>
            </div>
          </div>

          <Link
            href="#film"
            className="group relative block aspect-[1.7] bg-blue-200"
          >
            <Photo
              src={imageSrc}
              alt={imageAlt}
              slot="Workshop still"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <span className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
              <span className="flex size-12 items-center justify-center rounded-full bg-lilac-200 transition-colors group-hover:bg-white">
                <Glyph name="play" size={18} className="ml-0.5" />
              </span>
              <span className={`text-sm ${imageSrc ? "text-white" : ""}`}>
                Watch · Inside a Jernigan workshop
              </span>
            </span>
          </Link>
        </div>

        {/* Experience + where we work */}
        <div className="mt-20 grid gap-x-28 gap-y-16 lg:mt-24 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <div>
            <h3 className="type-eyebrow font-normal text-blue-900/70">
              Experience behind every engagement
            </h3>

            <dl className="mt-9 space-y-7">
              {experience.map((row) => (
                <div key={row.label}>
                  <dt className="text-sm">{row.label}</dt>
                  <dd className="mt-2 h-10 bg-paper-200/70">
                    <span
                      className={`flex h-full items-center justify-end border-r-[3px] border-blue-900 pr-4 font-serif text-2xl ${row.bar}`}
                      style={{ width: `${(row.years / SCALE_MAX) * 100}%` }}
                    >
                      <span className="whitespace-nowrap">{row.figure}</span>
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <ol
              aria-hidden="true"
              className="mt-8 flex justify-between text-[11px] text-blue-900/60"
            >
              {[0, 10, 20, 30, 40, 50].map((tick) => (
                <li
                  key={tick}
                  className="flex w-0 flex-col items-center gap-2 whitespace-nowrap first:items-start last:items-end"
                >
                  <span className="h-2 w-px bg-blue-900/40" />
                  {tick === SCALE_MAX ? `${tick} years` : tick}
                </li>
              ))}
            </ol>

            <dl className="mt-14 flex flex-wrap gap-x-16 gap-y-8">
              {stats.map(([figure, label]) => (
                <div key={label} className="flex flex-col-reverse">
                  <dt className="mt-2 text-xs text-blue-900/70">{label}</dt>
                  <dd className="font-serif text-4xl tracking-[-0.015em]">
                    {figure}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="type-eyebrow font-normal text-blue-900/70">
              Where we work
            </h3>
            <ul className="mt-4">
              {sectors.map((sector) => (
                <li
                  key={sector.name}
                  className="flex gap-4 border-b border-blue-900/15 py-6"
                >
                  <span className="mt-0.5 shrink-0">{sector.icon}</span>
                  <div>
                    <p className="font-medium">{sector.name}</p>
                    <p className="mt-1 text-xs text-blue-900/70">
                      {sector.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

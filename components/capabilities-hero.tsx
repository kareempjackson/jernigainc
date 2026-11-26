import Link from "next/link";
import { BlockButton, Flower } from "@/components/brand";
import { Glyph } from "@/components/icons";

const disciplines = ["Training", "Consultation", "Program evaluation"];

/** Contracting identifiers, in the order a contracting officer looks for them. */
const corporateData = [
  ["UEI", "RJV7R1V5MP14"],
  ["CAGE", "8T0G5"],
  ["Status", "SAM registration active"],
  ["Designation", "SBA-certified WOSB"],
  ["Primary NAICS", "541611"],
  ["Primary PSC", "U008"],
] as const;

const audiences = [
  "Federal agencies",
  "Health care systems",
  "Educational institutions",
  "Corporations",
];

/**
 * Capabilities page hero: positioning statement and calls to action on the
 * left, the corporate data card (UEI, CAGE, NAICS…) on the right.
 */
export function CapabilitiesHero({
  statementHref = "/capabilities-statement.pdf",
  contactHref = "#contact",
}: {
  /** The downloadable capabilities statement (a file under /public). */
  statementHref?: string;
  /** Where "Contact our POC" leads. Defaults to the contact card further down. */
  contactHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-blue-700 text-white lg:flex lg:min-h-[calc(100svh-120px)] lg:flex-col">
      {/* Petal outlines, cropped at the frame edge */}
      <Flower
        outline
        size={420}
        className="pointer-events-none absolute -right-32 -top-20 hidden rotate-12 text-white/30 lg:block"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 pb-10 pt-6 md:px-16 lg:px-20 lg:pb-6 lg:pt-5">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-3 text-[13px] text-white/75">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Capabilities</li>
          </ol>
        </nav>

        <div className="mt-6 grid flex-1 content-center gap-x-10 gap-y-10 lg:mt-5 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <div>
            <ul className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 bg-tan-300 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-900">
              <li aria-hidden="true" className="flex">
                <Glyph name="award" size={14} />
              </li>
              {disciplines.map((discipline, i) => (
                <li key={discipline} className="flex items-center gap-2.5">
                  {i > 0 && (
                    <span aria-hidden="true" className="h-3 w-px bg-blue-900" />
                  )}
                  {discipline}
                </li>
              ))}
            </ul>

            <h1 className="mt-[clamp(1rem,calc(4svh_-_13px),2rem)] font-serif text-[clamp(2rem,min(3.7vw,6.4svh),3.5rem)] leading-[0.98] tracking-[-0.02em]">
              <span className="block">Psychological science,</span>
              <span className="block">Applied to</span>
              <span className="block">Organizational Practice</span>
            </h1>

            <p className="mt-[clamp(1.25rem,calc(5svh_-_16px),2.5rem)] max-w-[34rem] text-[15px] leading-[1.55] text-white/90">
              Jernigan and Associates is a Georgia consultancy applying
              psychological and educational science to organizational practice
              for federal agencies, health care systems, educational
              institutions, and corporations.
            </p>
            <p className="mt-[clamp(0.75rem,calc(3svh_-_10px),1.5rem)] max-w-[34rem] text-[15px] leading-[1.55] text-white/65">
              Services span consultation, assessment, program development and
              evaluation, strategic planning, professional development,
              curriculum design, applied research, and clinical consultation and
              supervision.
            </p>

            <div className="mt-[clamp(1.5rem,calc(8svh_-_34px),3.5rem)] flex flex-wrap gap-x-8 gap-y-3">
              <BlockButton href={statementHref} variant="tan">
                Download capabilities statement
              </BlockButton>
              <BlockButton
                href={contactHref}
                variant="light"
                icon="arrow-up-right"
              >
                Contact our POC
              </BlockButton>
            </div>

            <div className="mt-[clamp(1.5rem,calc(8svh_-_34px),3.5rem)]">
              <h2 className="type-eyebrow text-xs text-white/85">Who we serve</h2>
              <ul className="mt-2.5 flex flex-wrap gap-2">
                {audiences.map((audience) => (
                  <li
                    key={audience}
                    className="border border-white/35 px-3 py-1.5 text-[13px]"
                  >
                    {audience}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside
            aria-labelledby="corporate-data"
            className="flex flex-col bg-white text-blue-900"
          >
            <div className="flex items-center justify-between gap-6 bg-tan-300 px-8 py-4">
              <div>
                <h2 id="corporate-data" className="type-eyebrow text-xs">
                  Corporate data
                </h2>
                <p className="mt-1.5 text-sm leading-tight">
                  Registered and ready to contract
                </p>
              </div>
              <Glyph name="check" size={18} className="shrink-0" />
            </div>
            <dl className="flex flex-1 flex-col px-8 py-1">
              {corporateData.map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-1 flex-col justify-center border-b border-blue-900/15 py-3 last:border-b-0"
                >
                  <dt className="text-[10.5px] font-medium uppercase leading-none tracking-[0.1em] text-blue-900/60">
                    {label}
                  </dt>
                  <dd className="mt-1.5 font-serif text-[clamp(1.125rem,min(1.5vw,2.8svh),1.375rem)] leading-[1.1] tracking-[-0.01em]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

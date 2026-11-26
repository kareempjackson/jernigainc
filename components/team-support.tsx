import { Glyph } from "@/components/icons";

const backOffice = [
  ["DiaGurl", "Chief Operating Officer"],
  ["VaVa Virtual", "Executive assistance"],
  ["Mercer Oak Law Firm", "Legal"],
  ["Hudson Accounting Solutions", "CFO, accounting, and bookkeeping"],
] as const;

/** Our team page: junior associates, and the operations partners. */
export function TeamSupport() {
  return (
    <section className="bg-paper-100 text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 grid gap-5 py-14 lg:grid-cols-2 lg:py-20">
        <div className="bg-tan-300 p-8 sm:p-10">
          <Glyph name="bars" size={26} className="text-blue-700" />
          <h2 className="mt-5 font-serif text-[1.875rem] leading-[1.1] tracking-[-0.015em]">
            Junior Associates
          </h2>
          <p className="mt-4 max-w-[34rem] text-[15px] leading-[1.6] text-blue-900/80">
            Advanced graduate students in psychology, the social sciences, and
            organizational fields who support consulting engagements, research,
            and educational programs under the guidance of senior consultants,
            gaining applied experience across the sectors we serve.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10">
          <h2 className="font-serif text-[1.875rem] leading-[1.1] tracking-[-0.015em]">
            <span className="block">Operations and</span>
            <span className="block">back office</span>
          </h2>
          <dl className="mt-6">
            {backOffice.map(([name, role]) => (
              <div
                key={name}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-blue-900/15 py-3.5 last:border-b"
              >
                <dt className="text-[15px] font-medium">{name}</dt>
                <dd className="text-[13px] text-blue-900/65">{role}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

import { BlockButton, Flower } from "@/components/brand";
import { Glyph } from "@/components/icons";

const orders = [
  {
    agency: "Federal Bureau of Prisons",
    period: "2021–2022",
    amount: "$308,000",
    summary:
      "Cultural competence training and consulting for psychology services staff.",
    order: "15BNAS21FW4H10080",
  },
  {
    agency: "Federal Bureau of Prisons",
    period: "FY2023",
    amount: "$308,000",
    summary:
      "Second delivery order for cultural competence training and consulting.",
    order: "15BNAS22F00000468",
  },
];

/** Capabilities page: federal past performance, total and the two orders. */
export function CapabilitiesPastPerformance({
  contactHref = "/contact",
}: {
  contactHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-blue-700 text-white">
      {/* Petal outlines, cropped at the frame edge */}
      <Flower
        outline
        size={420}
        className="pointer-events-none absolute -bottom-36 -left-28 hidden rotate-12 text-white/15 lg:block"
      />

      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-20 relative grid gap-x-20 gap-y-12 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:py-20">
        <div>
          <h2 className="type-eyebrow text-xs text-lilac-200">
            Past performance
          </h2>
          <p className="mt-5 font-serif text-[clamp(2.75rem,5.4vw,4.5rem)] leading-none tracking-[-0.02em]">
            $616,000
          </p>
          <p className="mt-6 max-w-[27rem] text-base leading-[1.55] text-white/85">
            in federal delivery orders from the Federal Bureau of Prisons,
            competitively awarded under a small business set-aside.
          </p>
          <div className="mt-8">
            <BlockButton
              href={contactHref}
              variant="lilac"
              icon="arrow-up-right"
            >
              Talk to us about your agency
            </BlockButton>
          </div>
        </div>

        <ul className="grid gap-2.5 sm:grid-cols-2">
          {orders.map(({ agency, period, amount, summary, order }) => (
            <li
              key={order}
              className="flex flex-col border border-white/15 bg-white/[0.06] p-7 lg:min-h-[380px]"
            >
              <Glyph name="award" size={22} className="text-lilac-300" />
              <h3 className="type-eyebrow mt-6 text-[11px] text-lilac-200">
                {agency}
              </h3>
              <p className="mt-6 text-sm text-white/70">{period}</p>
              <p className="mt-2 font-serif text-[clamp(1.75rem,2.6vw,2.25rem)] leading-none tracking-[-0.02em]">
                {amount}
              </p>
              <p className="mt-5 text-[15px] leading-[1.55] text-white/85">
                {summary}
              </p>
              <dl className="mt-auto pt-8">
                <div className="border-t border-white/20 pt-5">
                  <dt className="type-eyebrow text-[11px] font-medium text-white/60">
                    Order
                  </dt>
                  <dd className="mt-2 text-sm font-medium tracking-[0.01em]">
                    {order}
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

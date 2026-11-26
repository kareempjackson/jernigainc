import { BlockButton } from "@/components/brand";

/**
 * Service page: "How we partner" by default. A short statement on the left, the numbered
 * list of what the engagement can include on the right.
 */
export function ServiceOfferings({
  eyebrow = "How we partner",
  cta = { label: "Book a consultation", href: "/contact" },
  title = ["Built with the people", "closer to the work."],
  body = "Every engagement is customized. We start by understanding your context, then co-design solutions grounded in evidence and tailored to your goals.",
  offerings,
}: {
  eyebrow?: string;
  cta?: { label: string; href: string };
  /** Two headline lines; the second is set in blue. */
  title?: [string, string];
  body?: string;
  offerings: string[];
}) {
  return (
    <section className="bg-white text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 grid gap-x-20 gap-y-10 py-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-20">
        <div>
          <p className="flex items-center gap-2.5 text-[13px]">
            <span
              aria-hidden="true"
              className="size-1 rounded-full bg-current"
            />
            {eyebrow}
          </p>
          <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4">
            <span className="block text-navy-900">{title[0]}</span>
            <span className="block text-blue-700">{title[1]}</span>
          </h2>
          <p className="mt-6 max-w-[29rem] text-[15px] leading-[1.65] text-blue-900/75">
            {body}
          </p>
          <div className="mt-7">
            <BlockButton href={cta.href}>{cta.label}</BlockButton>
          </div>
        </div>

        <ol className="border-b border-blue-900/15">
          {offerings.map((offering, i) => (
            <li
              key={offering}
              className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-8 border-t border-blue-900/15 py-5"
            >
              <span className="text-xs font-medium tracking-[0.04em] text-blue-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-[1.25rem] leading-[1.25] tracking-[-0.01em] text-navy-900">
                {offering}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

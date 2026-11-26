import { aboutDefaults, type AboutContent } from "@/content/about";

/** About page: "Our approach" (the page's `#approach` target). */
export function AboutApproach({
  content: c = aboutDefaults.approach,
}: {
  content?: AboutContent["approach"];
}) {
  const steps = c.steps.map((s) => [s.title, s.body] as const);
  return (
    <section id="approach" className="scroll-mt-6 bg-paper-100 text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 grid gap-x-20 gap-y-10 py-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-20">
        <div>
          <p className="flex items-center gap-2.5 text-[13px]">
            <span
              aria-hidden="true"
              className="size-1 rounded-full bg-current"
            />
            {c.eyebrow}
          </p>
          <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4">
            {c.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-[31rem] text-[15px] leading-[1.65] text-blue-900/75">
            {c.body}
          </p>
        </div>

        <ol className="border-b border-blue-900/15">
          {steps.map(([title, body], i) => (
            <li
              key={title}
              className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-7 border-t border-blue-900/15 py-6"
            >
              <span className="font-serif text-[2rem] leading-none tracking-[-0.02em] text-blue-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.15] tracking-[-0.01em]">
                  {title}
                </h3>
                <p className="mt-2 max-w-[38rem] text-sm leading-[1.55] text-blue-900/70">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import {
  whoWeServeDefaults,
  type WhoWeServeContent,
} from "@/content/who-we-serve";

const tones = ["bg-lilac-200", "bg-tan-300", "bg-mist-200"];

/** Who we serve page: "How we start", three steps and the headline figures. */
export function WhoWeServeStart({
  content: c = whoWeServeDefaults.start,
}: {
  content?: WhoWeServeContent["start"];
}) {
  return (
    <section className="bg-paper-100 text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 pb-4 pt-14 md:px-16 lg:pt-20">
        <p className="flex items-center gap-2.5 text-[13px]">
          <span aria-hidden="true" className="size-1 rounded-full bg-current" />
          {c.eyebrow}
        </p>
        <h2 className="mt-4 text-navy-900 font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em]">
          {c.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {c.steps.map((step, i) => (
            <li key={step.title} className="bg-white p-7 pb-8">
              <span
                className={`inline-block px-2.5 py-1.5 font-serif text-xl leading-none ${tones[i % tones.length]}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-serif text-[1.75rem] leading-[1.1] tracking-[-0.01em] text-navy-900">
                {step.title}
              </h3>
              <p className="type-eyebrow mt-4 text-[10.5px] font-medium text-blue-500">
                {step.label}
              </p>
              <p className="mt-4 text-sm leading-[1.6] text-blue-900/75">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <dl className="mt-12 grid gap-x-8 gap-y-8 border-t border-blue-900/15 pt-9 sm:grid-cols-2 lg:grid-cols-4">
          {c.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end">
              <dt className="mt-3 max-w-[17rem] text-[13px] leading-snug text-blue-900/70">
                {stat.label}
              </dt>
              <dd className="font-serif text-[clamp(2rem,3.2vw,2.75rem)] leading-none tracking-[-0.02em]">
                {stat.figure}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

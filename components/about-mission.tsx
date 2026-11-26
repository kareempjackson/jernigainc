import { aboutDefaults, type AboutContent } from "@/content/about";

/** About page: headline figures, then mission and vision. */
export function AboutMission({
  content: c = aboutDefaults.mission,
}: {
  content?: AboutContent["mission"];
}) {
  const tones = ["bg-lilac-200", "bg-mist-200"];
  const stats = c.stats.map((s) => [s.figure, s.label] as const);
  const statements = c.statements.map(
    (s, i) => [s.label, s.text, tones[i % tones.length]] as const,
  );
  return (
    <section className="bg-blue-700 text-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 py-14 lg:py-20">
        <dl className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([figure, label]) => (
            <div
              key={label}
              className="flex flex-col-reverse justify-end border-t border-white/25 pt-5"
            >
              <dt className="mt-3 text-[13px] text-white/70">{label}</dt>
              <dd className="font-serif text-[clamp(2rem,3.2vw,2.75rem)] leading-none tracking-[-0.02em]">
                {figure}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {statements.map(([label, text, tone]) => (
            <div key={label} className={`p-8 text-blue-900 sm:p-10 ${tone}`}>
              <h2 className="type-eyebrow text-[11px]">{label}</h2>
              <p className="mt-6 font-serif text-[clamp(1.25rem,1.7vw,1.5rem)] leading-[1.25] tracking-[-0.01em]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

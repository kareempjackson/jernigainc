import {
  psychologistDefaults,
  type PsychologistContent,
} from "@/content/psychologist";

/** Licensed psychologist page: about the practice, and concerns treated. */
export function ClinicalPractice({
  content: c = psychologistDefaults.practice,
}: {
  content?: PsychologistContent["practice"];
}) {
  const { settings, concerns } = c;
  return (
    <section className="bg-white text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 grid gap-x-20 gap-y-12 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:py-20">
        <div>
          <p className="flex items-center gap-2.5 text-[13px]">
            <span
              aria-hidden="true"
              className="size-1 rounded-full bg-current"
            />
            {c.eyebrow}
          </p>
          <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4">
            <span className="block text-navy-900">{c.titleDark}</span>
            <span className="block text-blue-700">{c.titleBlue}</span>
          </h2>
          <p className="mt-6 max-w-[34rem] text-[15px] leading-[1.65] text-blue-900/75">
            {c.body}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {settings.map((setting) => (
              <li
                key={setting}
                className="rounded-full border border-blue-900/45 px-3.5 py-1.5 text-[13px]"
              >
                {setting}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="type-eyebrow text-[11px] text-blue-500">
            {c.concernsLabel}
          </h3>
          <ol className="mt-4 border-t border-blue-900/15">
            {concerns.map((concern, i) => (
              <li
                key={concern}
                className="flex items-baseline gap-8 border-b border-blue-900/15 py-4"
              >
                <span className="text-xs font-medium tracking-[0.04em] text-blue-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-[1.375rem] leading-[1.15] tracking-[-0.01em] text-navy-900">
                  {concern}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

import {
  psychologistDefaults,
  type PsychologistContent,
} from "@/content/psychologist";
import { Flower } from "@/components/brand";

/**
 * Licensed psychologist page: "How therapy works" (the page's
 * `#how-therapy-works` target).
 */
export function ClinicalApproaches({
  content: c = psychologistDefaults.approaches,
}: {
  content?: PsychologistContent["approaches"];
}) {
  const tones = ["bg-tan-300", "bg-mist-200", "bg-lilac-200", "bg-paper-100"];
  const approaches = c.items.map(
    (name, i) => [name, tones[i % tones.length]] as const,
  );
  return (
    <section
      id="how-therapy-works"
      className="relative scroll-mt-6 overflow-hidden bg-blue-900 text-white"
    >
      {/* Petal outlines, cropped at the frame edge */}
      <Flower
        outline
        size={380}
        className="pointer-events-none absolute -right-28 -top-24 hidden rotate-12 text-white/25 lg:block"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-16 py-14 lg:py-20">
        <div className="grid items-end gap-x-16 gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)]">
          <div>
            <p className="flex items-center gap-2.5 text-[13px] text-white/85">
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
          </div>
          <p className="text-[15px] leading-[1.6] text-white/75">{c.body}</p>
        </div>

        <ol className="mt-10 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {approaches.map(([name, tone], i) => (
            <li
              key={name}
              className={`relative flex min-h-[13rem] flex-col justify-between overflow-hidden p-6 text-blue-900 ${tone}`}
            >
              <Flower
                size={104}
                className="pointer-events-none absolute -top-5 right-5 text-blue-900/[0.06]"
              />
              <span className="relative text-xs font-medium tracking-[0.04em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="relative font-serif text-[1.625rem] leading-[1.1] tracking-[-0.01em]">
                {name}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

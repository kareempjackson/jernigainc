import { Flower } from "@/components/brand";
import { Glyph, type GlyphName } from "@/components/icons";

/** `icon: null` draws the brand flower. `tone` tints the three feature cards. */
const competencies: {
  title: string;
  icon: GlyphName | null;
  tone?: string;
}[] = [
  {
    title: "Professional development training",
    icon: "sprout",
    tone: "bg-tan-300",
  },
  { title: "Curriculum development", icon: "blocks" },
  { title: "Evidence-based, person-centered training", icon: null },
  { title: "Consultation & technical assistance", icon: "chat" },
  {
    title: "Program development & evaluation",
    icon: "bars",
    tone: "bg-lilac-200",
  },
  { title: "Organizational assessment", icon: "search" },
  { title: "Clinical mental & behavioral health", icon: null },
  { title: "Strategic planning", icon: "focus" },
  { title: "Applied research", icon: "mic", tone: "bg-mist-200" },
];

/** Capabilities page: the nine core competencies as a 3×3 card grid. */
export function CapabilitiesCompetencies() {
  return (
    <section className="bg-paper-100 text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-20 py-14 lg:py-20">
        <div className="grid items-end gap-x-16 gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,29rem)]">
          <div>
            <p className="type-eyebrow text-xs text-blue-500">
              Core competencies
            </p>
            <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4">
              <span className="block">Nine Ways We Support</span>
              <span className="block">Your Mission</span>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.6] text-blue-900/70 lg:pb-9">
            Evidence-based, person-centered work across health, educational,
            community and organizational settings.
          </p>
        </div>

        <ol className="mt-9 grid gap-2.5 sm:grid-cols-2 lg:mt-11 lg:grid-cols-3">
          {competencies.map(({ title, icon, tone }, i) => (
            <li
              key={title}
              className={`min-h-[8.25rem] px-6 pb-5 pt-6 ${tone ?? "bg-white"}`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`flex size-10 items-center justify-center ${
                    tone ? "bg-white" : "bg-paper-200"
                  }`}
                >
                  {icon ? (
                    <Glyph name={icon} size={20} />
                  ) : (
                    <Flower size={20} />
                  )}
                </span>
                <span className="pt-1 text-[11px] font-medium tracking-[0.04em] text-blue-900/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-3.5 max-w-[20rem] font-serif text-[1.25rem] leading-[1.15] tracking-[-0.01em]">
                {title}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

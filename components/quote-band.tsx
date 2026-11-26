import { Glyph } from "@/components/icons";

/** A single endorsement, set large. `tone` is the ground (a bg-* class). */
export function QuoteBand({
  quote = "When Dr. Jernigan speaks, people listen because she unpacks complex racial dynamics in straightforward terms and offers practical advice for addressing racial injustice across a variety of societal domains.",
  author = "Dr. Janet E. Helms",
  tone = "bg-white",
}: {
  quote?: string;
  author?: string;
  tone?: string;
}) {
  return (
    <section className={`text-navy-900 ${tone}`}>
      <figure className="mx-auto max-w-[1440px] px-6 md:px-16 grid gap-x-12 gap-y-6 py-14 sm:grid-cols-[auto_minmax(0,1fr)] lg:py-20">
        <span className="flex size-14 items-center justify-center bg-blue-900 text-tan-300">
          <Glyph name="quote" size={22} />
        </span>
        <div>
          <blockquote className="max-w-[62rem] font-serif text-[clamp(1.5rem,2.5vw,2.125rem)] leading-[1.2] tracking-[-0.015em]">
            “{quote}”
          </blockquote>
          <figcaption className="mt-7 flex items-center gap-3 text-[13px] text-blue-900/75">
            <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
            {author}
          </figcaption>
        </div>
      </figure>
    </section>
  );
}

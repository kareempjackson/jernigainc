import {
  capabilitiesDefaults,
  type CapabilitiesContent,
} from "@/content/capabilities";
import Image from "next/image";

/**
 * Capabilities page: "Why agencies choose Jernigan". Pass `imageSrc` (a
 * cut-out portrait under /public); until then the frame shows a labelled slot.
 */
export function CapabilitiesDifferentiators({
  content: c = capabilitiesDefaults.differentiators,
  imageSrc,
  imageAlt,
}: {
  content?: CapabilitiesContent["differentiators"];
  imageSrc?: string;
  imageAlt?: string;
}) {
  imageSrc = imageSrc ?? c.image ?? undefined;
  const tones = ["bg-tan-300", "bg-lilac-200", "bg-mist-200", "bg-paper-200"];
  const differentiators = c.items.map(
    (d, i) => [d.title, d.body, tones[i % tones.length]] as const,
  );
  return (
    <section className="bg-white text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-20 grid gap-x-20 gap-y-12 py-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:py-20 xl:gap-x-36">
        <div>
          <p className="type-eyebrow text-xs text-blue-500">{c.eyebrow}</p>
          <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4">
            {c.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <figure className="mt-8 max-w-[340px]">
            <div
              className={`relative aspect-[11/12] ${imageSrc ? "" : "bg-paper-100"}`}
            >
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? c.name}
                  fill
                  sizes="(min-width: 1024px) 340px, 100vw"
                  className="object-contain object-bottom"
                />
              ) : (
                <span className="absolute left-4 right-4 top-4 text-xs opacity-60">
                  Photo slot · Principal portrait, cut out
                </span>
              )}
            </div>
            <figcaption className="bg-lilac-200 px-5 py-4">
              <p className="text-[15px] font-semibold">{c.name}</p>
              <p className="mt-1 text-[13px] text-blue-900/70">{c.role}</p>
            </figcaption>
          </figure>
        </div>

        <ol className="lg:mt-5">
          {differentiators.map(([title, body, tone], i) => (
            <li
              key={title}
              className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 border-t border-blue-900/15 py-6 sm:gap-x-6"
            >
              <span
                className={`flex h-7 w-9 items-center justify-center text-xs font-semibold ${tone}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.15] tracking-[-0.01em]">
                  {title}
                </h3>
                <p className="mt-2 max-w-[36rem] text-[15px] leading-[1.55] text-blue-900/70">
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

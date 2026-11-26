import Image from "next/image";
import { BlockButton } from "@/components/brand";

const framework = [
  ["Recognition", "bg-navy-100"],
  ["Restoration", "bg-lilac-200"],
  ["Relationships", "bg-blue-200"],
  ["Renewal", "bg-paper-200"],
] as const;

/**
 * "Partnership over prescription": full-bleed photo with the 4 R's card and
 * the closing statement. Pass `imageSrc` (a file under /public).
 */
export function Partnership({
  imageSrc,
  imageAlt = "",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-700 text-white">
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/45 to-navy-900/55" />
        </>
      ) : (
        <p className="absolute right-6 top-6 text-xs text-white/50 md:right-16">
          Photo slot · Facilitation, full bleed
        </p>
      )}

      <div className="relative mx-auto flex min-h-[640px] max-w-[1440px] flex-col px-6 py-16 md:px-16 lg:min-h-[780px] lg:py-20">
        <p className="type-eyebrow mb-5 font-normal text-white/80">
          Start the conversation
        </p>
        <h2 className="type-h2">
          <span className="block">Partnership Over</span>
          <span className="block">Prescription</span>
        </h2>

        <div className="mt-20 grid items-end gap-x-16 gap-y-14 lg:mt-auto lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="max-w-[380px] bg-white p-7 text-blue-900">
            <h3 className="font-serif text-[1.75rem] leading-tight tracking-[-0.01em]">
              The 4 R’s framework
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-blue-900/70">
              Dr. Jernigan-Noesi’s model, published in The Counseling
              Psychologist.
            </p>
            <ul className="mt-8 grid max-w-[15rem] grid-cols-2 gap-x-3 gap-y-4 text-sm">
              {framework.map(([name, bg]) => (
                <li key={name}>
                  <span
                    className={`inline-block rounded-full px-3 py-1.5 ${bg}`}
                  >
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-start-3">
            <p className="font-serif text-[clamp(1.75rem,2.8vw,2.5rem)] leading-[1.08] tracking-[-0.015em]">
              We partner. We co‑design. We create change that lasts.
            </p>
            <div className="mt-10">
              <BlockButton href="/contact" variant="light">
                Get started
              </BlockButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

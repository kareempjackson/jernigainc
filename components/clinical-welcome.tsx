import {
  psychologistDefaults,
  type PsychologistContent,
} from "@/content/psychologist";
import { BlockButton, Photo } from "@/components/brand";

/**
 * Licensed psychologist page: closing invitation. Pass `imageSrc` (a file
 * under /public).
 */
export function ClinicalWelcome({
  content: c = psychologistDefaults.welcome,
  imageSrc,
  imageAlt = "",
  href,
}: {
  content?: PsychologistContent["welcome"];
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
}) {
  imageSrc = imageSrc ?? c.image ?? undefined;
  return (
    <section className="bg-paper-100 text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 grid items-center gap-x-20 gap-y-10 py-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-20">
        <div className="relative aspect-[4/3] bg-paper-200">
          <Photo
            src={imageSrc}
            alt={imageAlt}
            slot="Quiet landscape"
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
        </div>
        <div>
          <p className="flex items-center gap-2.5 text-[13px]">
            <span
              aria-hidden="true"
              className="size-1 rounded-full bg-current"
            />
            {c.eyebrow}
          </p>
          <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4 text-navy-900">
            {c.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-[36rem] text-[15px] leading-[1.65] text-blue-900/75">
            {c.body}
          </p>
          <div className="mt-7">
            <BlockButton href={href ?? c.ctaHref}>{c.ctaLabel}</BlockButton>
          </div>
        </div>
      </div>
    </section>
  );
}

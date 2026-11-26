import { teamDefaults, type TeamContent } from "@/content/team";
import Image from "next/image";
import { BlockButton, Chip, Tag } from "@/components/brand";
import { Glyph } from "@/components/icons";

/**
 * Our team page: the founder profile (the page's `#founder` target). Pass
 * `imageSrc` (a cut-out portrait under /public).
 */
export function TeamFounder({
  content: c = teamDefaults.founder,
  imageSrc,
  imageAlt = "Dr. Maryam M. Jernigan-Noesi",
}: {
  content?: TeamContent["founder"];
  imageSrc?: string;
  imageAlt?: string;
}) {
  imageSrc = imageSrc ?? c.image ?? undefined;
  const stats = c.stats.map((s) => [s.figure, s.label] as const);
  const credentials = c.credentials;
  return (
    <section id="founder" className="scroll-mt-6 bg-paper-100 text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 grid items-start gap-x-20 gap-y-12 py-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:py-20">
        <figure className="w-full max-w-[460px]">
          <div className="relative aspect-[5/6] bg-mist-200">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-contain object-bottom"
              />
            ) : (
              <span className="absolute left-4 right-4 top-4 text-xs opacity-60">
                Photo slot · Founder portrait, cut out
              </span>
            )}
            <div className="absolute bottom-7 left-4">
              <Chip
                icon="award"
                figure={c.awardFigure}
                label={c.awardLabel}
                className="bg-tan-300 [&>span:last-child]:max-w-[24ch]"
              />
            </div>
          </div>
          <figcaption className="bg-lilac-200 px-5 py-5">
            <p className="font-medium">{c.name}</p>
            <p className="mt-3 flex flex-wrap gap-1.5">
              {c.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </p>
          </figcaption>
        </figure>

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
          <p className="mt-6 max-w-[44rem] text-base leading-[1.6] text-blue-900/85">
            {c.bio}
          </p>
          <p className="mt-4 max-w-[44rem] text-[15px] leading-[1.6] text-blue-900/65">
            {c.bioSecondary}
          </p>

          <dl className="mt-9 grid gap-x-6 gap-y-6 sm:grid-cols-3">
            {stats.map(([figure, label]) => (
              <div
                key={label}
                className="flex flex-col-reverse justify-end border-t-2 border-blue-700 pt-4"
              >
                <dt className="mt-2 max-w-[13rem] text-[13px] leading-snug text-blue-900/65">
                  {label}
                </dt>
                <dd className="font-serif text-[2rem] leading-none tracking-[-0.02em]">
                  {figure}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-8 text-sm leading-snug">
            {credentials.map((credential) => (
              <li
                key={credential}
                className="flex items-start gap-3.5 border-t border-blue-900/15 py-3"
              >
                <Glyph
                  name="check"
                  size={14}
                  className="mt-0.5 shrink-0 text-blue-500"
                />
                {credential}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <BlockButton href={c.ctaHref}>{c.ctaLabel}</BlockButton>
          </div>
        </div>
      </div>
    </section>
  );
}

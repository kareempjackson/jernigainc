import Image from "next/image";
import { BlockButton, Chip, Tag } from "@/components/brand";
import { Glyph } from "@/components/icons";

const stats = [
  ["22+", "Years of leadership"],
  ["30+", "Peer-reviewed publications"],
  ["100+", "National and international presentations"],
] as const;

const credentials = [
  "PhD, Counseling Psychology, Boston College · MEd, Vanderbilt University · BA, Fisk University",
  "Clinical training, Center for Multicultural Training in Psychology (Boston Medical Center and BU School of Medicine)",
  "Fellowships at Harvard Medical School and Yale University School of Medicine",
  "Honorary Doctorate of Humane Letters, Palo Alto University",
];

/**
 * Our team page: the founder profile (the page's `#founder` target). Pass
 * `imageSrc` (a cut-out portrait under /public).
 */
export function TeamFounder({
  imageSrc,
  imageAlt = "Dr. Maryam M. Jernigan-Noesi",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
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
                figure="2024"
                label="Dr. Janet E. Helms Racial Justice Award, APA Div. 17"
                className="bg-tan-300 [&>span:last-child]:max-w-[24ch]"
              />
            </div>
          </div>
          <figcaption className="bg-lilac-200 px-5 py-5">
            <p className="font-medium">Dr. Maryam M. Jernigan-Noesi</p>
            <p className="mt-3 flex flex-wrap gap-1.5">
              <Tag>PhD</Tag>
              <Tag>Licensed Psychologist</Tag>
              <Tag>Founder and CEO</Tag>
            </p>
          </figcaption>
        </figure>

        <div>
          <p className="flex items-center gap-2.5 text-[13px]">
            <span
              aria-hidden="true"
              className="size-1 rounded-full bg-current"
            />
            Founder and CEO
          </p>
          <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4">
            <span className="block">Dr. Maryam M.</span>
            <span className="block">Jernigan-Noesi</span>
          </h2>
          <p className="mt-6 max-w-[44rem] text-base leading-[1.6] text-blue-900/85">
            Dr. Maryam M. Jernigan-Noesi is the Founder and CEO of Jernigan
            &amp; Associates. A licensed psychologist, clinician-scientist, and
            award-winning scholar with more than two decades of experience, she
            sets the firm’s strategic vision and provides content expertise
            across behavioral health, healthcare, education, legal and criminal
            justice, and entertainment.
          </p>
          <p className="mt-4 max-w-[44rem] text-[15px] leading-[1.6] text-blue-900/65">
            As Director of the Intersections Research Lab, she investigates
            racial health disparities, culturally responsive assessment and
            treatment, and racism-related stress and trauma across the lifespan,
            work recognized by the Ford and Mellon Foundations and the American
            Psychological Association. She advises Sesame Street’s racial
            justice initiative and co-founded the nonprofit Psychologists for
            Racial Justice.
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
            <BlockButton href="/contact">Book a consultation</BlockButton>
          </div>
        </div>
      </div>
    </section>
  );
}

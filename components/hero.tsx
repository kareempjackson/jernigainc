import Image from "next/image";
import Link from "next/link";
import { BlockButton, BloomGrid, Chip, Flower } from "@/components/brand";
import { Glyph } from "@/components/icons";

const timeline = [
  ["2008", "Founded in Atlanta"],
  ["2008–2026", "Expanded nationally"],
  ["Today", "Virtual-first, national"],
] as const;

/**
 * Homepage hero. Pass `imageSrc` (a file under /public) once the photograph is
 * available; until then the frame shows the bloom pattern.
 */
export function Hero({
  imageSrc,
  imageAlt = "",
  className = "",
}: {
  imageSrc?: string;
  imageAlt?: string;
  /** e.g. `h-full` when the parent sizes the hero to the viewport. */
  className?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-blue-700 text-white ${className}`}
    >
      {/* Petal outlines, cropped at the frame edge */}
      <Flower
        outline
        size={420}
        className="pointer-events-none absolute -right-32 -top-20 hidden rotate-12 text-white/30 lg:block"
      />

      <div className="relative mx-auto grid h-full max-w-[1440px] gap-x-16 gap-y-12 px-6 py-12 md:px-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:grid-rows-[minmax(0,1fr)] lg:pb-10 lg:pt-16">
        <div className="flex min-h-0 flex-col lg:h-full lg:max-h-[580px] lg:self-center">
          <p className="flex items-center gap-2.5 text-sm text-white/85">
            <Glyph name="check" size={16} className="text-lilac-300" />
            Psychological &amp; educational consulting since 2008
          </p>
          <h1 className="mt-4 font-serif text-[clamp(2.5rem,min(5.6vw,9.5svh),5.25rem)] leading-[0.98] tracking-[-0.02em]">
            <span className="block">Welcome to</span>
            <span className="block">a new era of</span>
            <span className="block">belonging</span>
          </h1>
          <p className="mt-6 max-w-[30rem] text-base leading-[1.55] text-white/80">
            Discover research-led psychological and educational consulting that
            meets people where they are. We help institutions become places
            where everyone can grow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5 lg:mt-auto lg:pt-6">
            <BlockButton href="/work" variant="light">
              Explore our work
            </BlockButton>
            <Link
              href="#film"
              className="group type-button flex items-center gap-3"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-lilac-300 text-blue-900 transition-colors group-hover:bg-white">
                <svg
                  viewBox="0 0 12 14"
                  width={12}
                  height={14}
                  aria-hidden="true"
                >
                  <path d="M0 0l12 7-12 7z" fill="currentColor" />
                </svg>
              </span>
              Watch the film
            </Link>
          </div>
        </div>

        <div className="relative min-h-0 lg:ml-10 lg:max-h-[580px] lg:self-center lg:h-full">
          <div className="relative aspect-[4/3] overflow-hidden bg-blue-900 lg:aspect-auto lg:h-full">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <BloomGrid
                cols={9}
                rows={9}
                budClass="text-blue-700"
                bloomClass="text-mist-300"
                animated
                className="absolute inset-0 size-full p-8"
              />
            )}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-900/80 to-transparent" />
            <dl className="absolute inset-x-0 bottom-0 grid grid-cols-3 gap-4 p-5 sm:p-7">
              {timeline.map(([when, what]) => (
                <div key={when}>
                  <dt className="text-sm">{when}</dt>
                  <dd className="mt-0.5 text-xs text-white/75">{what}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Data chips overlap the frame edge */}
          <div className="absolute left-3 top-4 flex flex-col items-start gap-2.5 sm:-left-10 sm:top-6">
            <Chip
              size="lg"
              icon="pin"
              figure="2008"
              label="Founded in Atlanta as a small consulting agency"
              className="bg-navy-100"
            />
            <Chip
              size="lg"
              icon="bars"
              figure="100+"
              label="Organizations served"
              className="bg-lilac-200"
            />
          </div>
          <div className="absolute right-3 top-[46%] hidden sm:-right-4 sm:block">
            <Chip
              size="lg"
              figure="35,000+"
              label="Professionals trained"
              className="bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

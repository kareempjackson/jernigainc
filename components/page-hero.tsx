import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { BlockButton, BloomGrid, Chip, Flower } from "@/components/brand";
import { Glyph, type GlyphName } from "@/components/icons";

type HeroChip = { figure: string; label: string; icon?: GlyphName };

/**
 * Inner-page hero: breadcrumb, eyebrow, headline, intro and two actions on the
 * left; a square photograph with two data chips on the right. Fills the first
 * screen under the header on desktop. Until `imageSrc` (a file under /public)
 * is passed, the frame shows the bloom pattern.
 */
export function PageHero({
  crumb,
  parents = [],
  eyebrow,
  title,
  body,
  primary = { label: "Book a consultation", href: "/contact" },
  secondary,
  topChip,
  bottomChip,
  imageSrc,
  imageAlt = "",
}: {
  /** Current page name, the last breadcrumb. */
  crumb: string;
  /** Breadcrumbs between "Home" and the current page. */
  parents?: { label: string; href: string }[];
  eyebrow: string;
  /** One entry per headline line. */
  title: string[];
  body: string;
  /** The main action. Defaults to "Book a consultation". */
  primary?: { label: string; href: string };
  /** The quieter second action beside it. */
  secondary: { label: string; href: string };
  topChip: HeroChip;
  bottomChip?: HeroChip;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-blue-700 text-white lg:flex lg:min-h-[calc(100svh-120px)] lg:flex-col">
      {/* Petal outlines, cropped at the frame edge */}
      <Flower
        outline
        size={420}
        className="pointer-events-none absolute -right-32 -top-20 hidden rotate-12 text-white/30 lg:block"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-16 flex w-full flex-1 flex-col pb-12 pt-6 lg:pb-8 lg:pt-5">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-3 text-[13px] text-white/60">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            {parents.map((parent) => (
              <Fragment key={parent.href}>
                <li>
                  <Link
                    href={parent.href}
                    className="transition-colors hover:text-white"
                  >
                    {parent.label}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
              </Fragment>
            ))}
            <li aria-current="page" className="text-white">
              {crumb}
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid flex-1 items-center gap-x-16 gap-y-12 lg:mt-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="flex items-center gap-2.5 text-[13px] text-white/85">
              <Glyph name="check" size={14} className="text-lilac-300" />
              {eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-[clamp(2rem,min(3.7vw,6.4svh),3.5rem)] leading-[0.98] tracking-[-0.02em]">
              {title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-[34rem] text-[15px] leading-[1.6] text-white/80">
              {body}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
              <BlockButton href={primary.href} variant="light">
                {primary.label}
              </BlockButton>
              <Link
                href={secondary.href}
                className="group type-button flex items-center gap-3"
              >
                <span className="flex size-12 items-center justify-center bg-tan-300 text-blue-900 transition-colors group-hover:bg-white">
                  <Glyph name="sprout" size={18} />
                </span>
                {secondary.label}
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-[640px] justify-self-center lg:max-w-[min(100%,calc(100svh-230px))] lg:justify-self-end">
            <div className="relative aspect-square overflow-hidden bg-blue-900">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
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
            </div>

            {/* Data chips overlap the frame edge */}
            <div className="absolute left-3 top-4 sm:-left-10 sm:top-8">
              <Chip size="lg" {...topChip} className="bg-lilac-200" />
            </div>
            {bottomChip && (
              <div className="absolute bottom-[16%] right-3 sm:-right-5">
                <Chip size="lg" {...bottomChip} className="bg-tan-300" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

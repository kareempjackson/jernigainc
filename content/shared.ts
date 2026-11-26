/**
 * Building blocks for the default content. Everything under /content is plain
 * data: it is what the site shows when Sanity has nothing for a field, it is
 * the shape the Studio's fields are generated from, and it is what
 * `sanity/seed.ts` writes into an empty dataset.
 */

/** An image slot. `null` until an image is uploaded in the Studio. */
export const IMAGE = null as string | null;

export type Seo = { title: string; description: string };

/** The inner-page hero (see components/page-hero.tsx). */
export type HeroContent = {
  eyebrow: string;
  /** One entry per headline line. */
  title: string[];
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  chipFigure: string;
  chipLabel: string;
  /** Leave the figure empty to hide the second chip. */
  bottomChipFigure: string;
  bottomChipLabel: string;
  image: string | null;
};

export function hero(
  h: Partial<HeroContent> & { title: string[] },
): HeroContent {
  return {
    eyebrow: "",
    body: "",
    primaryLabel: "Book a consultation",
    primaryHref: "/contact",
    secondaryLabel: "",
    secondaryHref: "",
    chipFigure: "",
    chipLabel: "",
    bottomChipFigure: "35,000+",
    bottomChipLabel: "Professionals trained",
    image: IMAGE,
    ...h,
  };
}

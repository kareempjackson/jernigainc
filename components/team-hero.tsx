import { PageHero } from "@/components/page-hero";

/**
 * Our team page hero. Pass `imageSrc` (a file under /public) once the group
 * photograph is available; until then the frame shows the bloom pattern.
 */
export function TeamHero({
  imageSrc,
  imageAlt,
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <PageHero
      crumb="Our team"
      eyebrow="Our Team"
      title={["The people behind", "the work."]}
      body="Jernigan & Associates is led by Dr. Maryam M. Jernigan-Noesi and powered by a multidisciplinary team of senior consultants, consultants, junior associates, and strategic partners, matched by scope to each engagement."
      secondary={{ label: "Meet the founder", href: "#founder" }}
      topChip={{
        icon: "pin",
        figure: "50+ years",
        label: "Collective experience across our consultants",
      }}
      bottomChip={{ figure: "35,000+", label: "Professionals trained" }}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
    />
  );
}

import { BlockButton, Photo } from "@/components/brand";

/**
 * Licensed psychologist page: closing invitation. Pass `imageSrc` (a file
 * under /public).
 */
export function ClinicalWelcome({
  imageSrc,
  imageAlt = "",
  href = "/contact",
}: {
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
}) {
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
            Begin the conversation
          </p>
          <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4 text-navy-900">
            <span className="block">A space where the</span>
            <span className="block">whole of you is welcome.</span>
          </h2>
          <p className="mt-6 max-w-[36rem] text-[15px] leading-[1.65] text-blue-900/75">
            Reach out to ask about current availability, fit, and next steps.
            Every inquiry is handled with care and confidentiality.
          </p>
          <div className="mt-7">
            <BlockButton href={href}>Inquire about availability</BlockButton>
          </div>
        </div>
      </div>
    </section>
  );
}

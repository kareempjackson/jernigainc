import Image from "next/image";
import type { ReactNode } from "react";
import { BlockButton, Flower, GuideFrame } from "@/components/brand";
import { Glyph } from "@/components/icons";

const reasons: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <Flower size={16} />,
    title: "Access to experienced facilitators",
    body: "Workshops and coaching that build skills leaders and staff can use the next day.",
  },
  {
    icon: <Glyph name="cross" size={16} />,
    title: "Focused on your people",
    body: "We listen first, then build solutions with you, never just for you.",
  },
  {
    icon: <Glyph name="award" size={16} />,
    title: "Ongoing support after the work",
    body: "We embed practices that outlast our engagement, with clear reporting on what changed and what to do next.",
  },
];

/**
 * "Psychological science, put into practice". Pass `avatarSrc` (a file under
 * /public) for the founder's portrait in the middle pill.
 */
export function SciencePractice({ avatarSrc }: { avatarSrc?: string }) {
  return (
    <section className="relative overflow-hidden bg-mist-100 text-blue-900">
      <Flower
        outline
        size={340}
        className="pointer-events-none absolute -right-24 -top-16 hidden rotate-12 text-blue-900/10 lg:block"
      />

      <div className="relative mx-auto grid max-w-[1440px] gap-x-24 gap-y-14 px-6 py-20 md:px-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:py-24">
        <GuideFrame
          lineClass="border-blue-900/12"
          className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-5 px-[12%] sm:aspect-[16/15]"
        >
          <div className="relative w-full max-w-[400px] rounded-full bg-blue-900 p-4">
            <div className="flex items-center gap-4 rounded-full bg-white px-6 py-4">
              <Flower size={20} className="shrink-0" />
              <span className="font-serif text-4xl leading-none">100+</span>
              <span className="ml-2 max-w-[9ch] text-xs leading-tight">
                Organizations served
              </span>
            </div>
          </div>

          <div className="relative flex w-full max-w-[400px] items-center gap-6 rounded-full bg-lilac-200 p-4">
            <span className="relative flex size-[4.5rem] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
              {avatarSrc ? (
                <Image
                  src={avatarSrc}
                  alt=""
                  fill
                  sizes="72px"
                  className="object-cover"
                />
              ) : (
                <Flower size={26} />
              )}
            </span>
            <div>
              <p className="text-xl font-medium leading-tight">
                Dr. Maryam J-N.
              </p>
              <p className="mt-1 text-xs text-blue-900/75">
                PhD · Licensed Psychologist
              </p>
            </div>
          </div>

          <p className="relative flex w-full max-w-[400px] items-center justify-center gap-3 rounded-full bg-blue-900/8 px-6 py-3 text-sm">
            <Glyph name="focus" size={15} className="shrink-0" />
            The 4 R’s framework, in practice
          </p>
        </GuideFrame>

        <div className="flex flex-col lg:py-6">
          <h2 className="type-h2">
            <span className="block">Psychological science,</span>
            <span className="block">put into practice</span>
          </h2>
          <p className="mt-6 text-blue-900/75">
            Science-backed, culturally responsive, and built with your people.
          </p>
          <div className="mt-8">
            <BlockButton href="/contact">Book a consultation</BlockButton>
          </div>

          <div className="mt-14 space-y-3 lg:mt-auto lg:pt-14">
            {reasons.map((reason) => (
              <details key={reason.title} className="group bg-white">
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="shrink-0">{reason.icon}</span>
                  <span className="text-[15px]">{reason.title}</span>
                  <svg
                    viewBox="0 0 10 6"
                    width={11}
                    height={7}
                    aria-hidden="true"
                    className="ml-auto shrink-0 transition-transform group-open:rotate-180"
                  >
                    <path
                      d="M1 1l4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    />
                  </svg>
                </summary>
                <p className="px-5 pb-6 pl-[3.25rem] text-sm leading-relaxed text-blue-900/75">
                  {reason.body}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

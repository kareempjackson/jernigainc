import { Photo } from "@/components/brand";
import { Glyph } from "@/components/icons";

/**
 * Service page: a representative case scenario (the page's `#case` target).
 * Pass `imageSrc` (a file under /public).
 */
export function ServiceCase({
  title,
  context,
  role,
  outcomes,
  imageSrc,
  imageAlt = "",
}: {
  title: string;
  context: string;
  role: string;
  outcomes: string[];
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section id="case" className="scroll-mt-6 bg-blue-700 text-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 py-14 lg:py-20">
        <p className="flex items-center gap-2.5 text-[13px] text-white/85">
          <Glyph name="focus" size={15} />
          Representative case scenario
        </p>
        <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4">
          {title}
        </h2>

        <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="relative min-h-[280px] bg-blue-900 md:row-span-2 lg:row-span-1">
            <Photo
              src={imageSrc}
              alt={imageAlt}
              slot="Case scenario, people at work"
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>

          <dl className="space-y-8 text-[15px] leading-[1.65] text-white/85">
            <div>
              <dt className="type-eyebrow mb-3 text-[11px] text-white">
                Context
              </dt>
              <dd>{context}</dd>
            </div>
            <div>
              <dt className="type-eyebrow mb-3 text-[11px] text-white">
                Our role
              </dt>
              <dd>{role}</dd>
            </div>
          </dl>

          <div className="bg-tan-300 p-7 text-blue-900 sm:p-8">
            <h3 className="type-eyebrow text-[11px]">Outcomes</h3>
            <ul className="mt-5 space-y-4 text-[15px] leading-[1.45]">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3.5">
                  <Glyph
                    name="check"
                    size={14}
                    className="mt-1 shrink-0 text-blue-700"
                  />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

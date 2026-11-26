import type { Metadata } from "next";
import Link from "next/link";
import { Mark } from "@/components/brand";
import { Glyph } from "@/components/icons";
import { getContact, getServices } from "@/sanity/lib/content";
import { InquiryForm } from "@/components/inquiry-form";

export async function generateMetadata(): Promise<Metadata> {
  return (await getContact()).seo;
}

export default async function ContactPage() {
  const [c, services] = await Promise.all([getContact(), getServices()]);
  const details = c.details;
  const tones = ["bg-tan-300", "bg-mist-200", "bg-lilac-200"];
  const next = c.next.steps.map(
    (step, i) =>
      [
        String(i + 1).padStart(2, "0"),
        step.title,
        step.body,
        tones[i % tones.length],
      ] as const,
  );

  return (
    <>
      <section className="relative overflow-hidden bg-blue-700 text-white">
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-x-24 gap-y-12 px-6 py-12 md:px-16 lg:min-h-[min(calc(100svh-120px),820px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:justify-between lg:py-6">
          <div>
            <nav aria-label="Breadcrumb" className="text-xs tracking-[0.01em]">
              <ol className="flex gap-2.5">
                <li>
                  <Link href="/" className="text-white/70 hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/50">
                  /
                </li>
                <li aria-current="page">Contact</li>
              </ol>
            </nav>

            <p className="mt-6 flex items-center gap-2.5 text-[13px] text-white/85">
              <Glyph name="chat" size={14} className="text-lilac-300" />
              {c.eyebrow}
            </p>
            <h1 className="mt-4 max-w-[27rem] font-serif text-[clamp(2rem,min(3.3vw,5.6svh),3rem)] leading-[1.02] tracking-[-0.02em]">
              {c.title}
            </h1>

            <dl className="mt-8 max-w-[30rem] border-b border-white/20">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 border-t border-white/20 py-3.5"
                >
                  <Mark
                    name={item.icon}
                    size={15}
                    className="mt-0.5 shrink-0 text-tan-200"
                  />
                  <div>
                    <dt className="text-[10.5px] font-medium uppercase tracking-[0.1em] text-white/65">
                      {item.label}
                    </dt>
                    <dd className="mt-1 break-words text-[15px]">
                      {item.href ? (
                        <a href={item.href} className="hover:text-mist-300">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:pt-0">
            <InquiryForm
              inbox={c.form.inbox}
              sectors={c.form.sectors}
              services={services.map((s) => s.name)}
            />
          </div>
        </div>
      </section>

      <section className="bg-white text-blue-900">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-16 lg:py-20">
          <p className="mb-3.5 flex items-center gap-2.5 text-[13px] text-blue-900/85">
            <span className="size-1 rounded-full bg-blue-900" />
            {c.next.eyebrow}
          </p>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.015em]">
            {c.next.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <ol className="mt-9 grid gap-3 md:grid-cols-3">
            {next.map(([num, title, body, bg]) => (
              <li key={num} className={`p-6 pb-7 ${bg}`}>
                <p className="text-[11px] tracking-[0.04em] text-blue-900/70">
                  {num}
                </p>
                <h3 className="mt-2 font-serif text-[1.375rem] leading-tight tracking-[-0.01em]">
                  {title}
                </h3>
                <p className="mt-2 max-w-[22rem] text-[13px] leading-relaxed text-blue-900/75">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

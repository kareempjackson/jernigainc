import type { Metadata } from "next";
import Link from "next/link";
import { Glyph, type GlyphName } from "@/components/icons";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: "Contact · Jernigan & Associates",
  description:
    "Book a consultation. Tell us what your organization is working toward.",
};

const details: {
  icon: GlyphName;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: "pin",
    label: "Location",
    value: "Atlanta, GA. Virtual-first, serving clients nationally.",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "404-410-6674",
    href: "tel:+14044106674",
  },
  {
    icon: "mail",
    label: "Email",
    value: "admin@mmjerniganassociates.com",
    href: "mailto:admin@mmjerniganassociates.com",
  },
  {
    icon: "globe",
    label: "Website",
    value: "mmjerniganassociates.com",
    href: "https://mmjerniganassociates.com",
  },
];

const next = [
  [
    "01",
    "We listen",
    "A conversation about your context, your people and what you are working toward.",
    "bg-tan-300",
  ],
  [
    "02",
    "We co-design",
    "A proposal shaped with you, grounded in evidence and scoped to your goals.",
    "bg-mist-200",
  ],
  [
    "03",
    "We measure",
    "Clear reporting that shows what changed, for whom, and what to do next.",
    "bg-lilac-200",
  ],
] as const;

export default function ContactPage() {
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
              Book a consultation
            </p>
            <h1 className="mt-4 max-w-[27rem] font-serif text-[clamp(2rem,min(3.3vw,5.6svh),3rem)] leading-[1.02] tracking-[-0.02em]">
              Let’s talk about what your organization is working toward.
            </h1>

            <dl className="mt-8 max-w-[30rem] border-b border-white/20">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 border-t border-white/20 py-3.5"
                >
                  <Glyph
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
            <InquiryForm />
          </div>
        </div>
      </section>

      <section className="bg-white text-blue-900">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-16 lg:py-20">
          <p className="mb-3.5 flex items-center gap-2.5 text-[13px] text-blue-900/85">
            <span className="size-1 rounded-full bg-blue-900" />
            What happens next
          </p>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.015em]">
            <span className="block">From first call</span>
            <span className="block">to a plan that fits</span>
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

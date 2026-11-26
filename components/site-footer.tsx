import Link from "next/link";
import { TreeMark } from "@/components/tree-mark";
import { Glyph, type GlyphName } from "@/components/icons";

export type FooterLink = { label: string; href: string };

export const defaultExplore: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "What we do", href: "/services" },
  { label: "Our team", href: "/our-team" },
  { label: "Insights", href: "/insights" },
];

export const defaultServices: FooterLink[] = [
  { label: "Education", href: "/services/education" },
  { label: "Mental health", href: "/services/mental-health" },
  { label: "Healthcare", href: "/services/healthcare" },
  { label: "Research & evaluation", href: "/services/research-and-evaluation" },
  { label: "Leadership & people", href: "/services/leadership-development" },
  { label: "Curriculum & training", href: "/services/curriculum-and-training" },
];

/** Replace each `#` with the real profile URL. */
export const defaultSocial: FooterLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
];

const contact: { icon: GlyphName; label: string; href?: string }[] = [
  { icon: "phone", label: "404-410-6674", href: "tel:+14044106674" },
  {
    icon: "mail",
    label: "admin@mmjerniganassociates.com",
    href: "mailto:admin@mmjerniganassociates.com",
  },
  { icon: "pin", label: "Atlanta, GA · Virtual-first" },
];

const legal: FooterLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

/** Eight-petal bloom with a centre dot, for the footer circles. */
function Bloom({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      {[0, 45, 90, 135, 180, 225, 270, 315].map((turn) => (
        <path
          key={turn}
          d="M24 17C19.5 13 19.5 8 24 4C28.5 8 28.5 13 24 17Z"
          transform={`rotate(${turn} 24 24)`}
        />
      ))}
      <circle cx={24} cy={24} r={3.5} />
    </svg>
  );
}

function Column({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h2 className="type-eyebrow text-xs">{title}</h2>
      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-white/85 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Site-wide footer: link columns, bloom marks, wordmark lockup and legal line. */
export function SiteFooter({
  explore = defaultExplore,
  services = defaultServices,
  social = defaultSocial,
}: {
  explore?: FooterLink[];
  services?: FooterLink[];
  social?: FooterLink[];
}) {
  return (
    <footer className="bg-navy-900 text-[15px] text-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-20 md:px-16 lg:pt-28">
        <div className="grid gap-x-12 gap-y-14 lg:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)]">
          <div className="grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-[auto_auto_auto_auto] md:justify-between">
            <Column title="Explore" links={explore} />
            <Column title="Services" links={services} />

            <div className="col-span-2 md:col-span-1">
              <h2 className="type-eyebrow text-xs">Contact</h2>
              <ul className="mt-5 space-y-3.5">
                {contact.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <Glyph
                      name={item.icon}
                      size={14}
                      className="shrink-0 text-tan-200"
                    />
                    {item.href ? (
                      <a
                        href={item.href}
                        className="break-all text-white/85 hover:text-white"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-white/85">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="type-eyebrow text-xs">Follow</h2>
              <ul className="mt-5 space-y-3.5">
                {social.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                    >
                      {link.label}
                      <Glyph name="arrow-up-right" size={11} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bloom marks */}
          <div
            aria-hidden="true"
            className="grid w-full max-w-[370px] grid-cols-2 gap-3.5 lg:-mt-6 lg:justify-self-end"
          >
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="flex aspect-square items-center justify-center rounded-full bg-blue-500"
              >
                {i === 3 ? (
                  <TreeMark className="h-[46%] text-tan-200" />
                ) : (
                  <Bloom className="w-[50%] text-blue-300" />
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 [container-type:inline-size] lg:mt-24">
          {/* Sized in container units so the lockup spans the content width. */}
          <Link
            href="/"
            aria-label="Jernigan & Associates, home"
            className="flex items-center justify-between whitespace-nowrap text-[14.8cqw]"
          >
            <TreeMark className="h-[1.78em] shrink-0" />
            <span className="font-serif leading-[0.84] tracking-[-0.025em]">
              <span className="block">Jernigan &amp;</span>
              <span className="block">Associates</span>
            </span>
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-x-10 gap-y-4 text-sm text-white/70">
          <p>
            © 2026 Jernigan &amp; Associates Psychological and Educational
            Consulting, Inc.
          </p>
          <ul className="flex items-center gap-4">
            {legal.map((link, i) => (
              <li key={link.label} className="flex items-center gap-4">
                {i > 0 && <span aria-hidden="true">·</span>}
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

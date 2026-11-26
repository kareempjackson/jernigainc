import Link from "next/link";
import { Logo } from "@/components/brand";
import { Glyph } from "@/components/icons";

export type NavItem = {
  label: string;
  href: string;
  /** Sub-links. When present the item opens a dropdown. */
  children?: { label: string; href: string }[];
};

export type Announcement = {
  text: string;
  cta: string;
  href: string;
};

export const defaultNav: NavItem[] = [
  {
    label: "Who we serve",
    href: "/who-we-serve",
    children: [
      { label: "Education", href: "/who-we-serve/education" },
      { label: "Behavioral health", href: "/who-we-serve/behavioral-health" },
      { label: "Healthcare", href: "/who-we-serve/healthcare" },
      {
        label: "Legal & criminal justice",
        href: "/who-we-serve/legal-criminal-justice",
      },
      { label: "Entertainment", href: "/who-we-serve/entertainment" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Education", href: "/services/education" },
      { label: "Mental health", href: "/services/mental-health" },
      { label: "Healthcare", href: "/services/healthcare" },
      {
        label: "Research and evaluation",
        href: "/services/research-and-evaluation",
      },
      {
        label: "Leadership development",
        href: "/services/leadership-development",
      },
      {
        label: "Curriculum and training",
        href: "/services/curriculum-and-training",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Purpose & values", href: "/about#purpose" },
      { label: "How we work", href: "/about#approach" },
      {
        label: "Licensed psychologist",
        href: "/about/licensed-psychologist",
      },
    ],
  },
  { label: "Our team", href: "/our-team" },
  { label: "Capabilities", href: "/capabilities" },
];

export const defaultAnnouncement: Announcement = {
  text: "The Jernigan Digest, Issue 14: psychological & educational research, in your inbox.",
  cta: "Subscribe",
  href: "/digest",
};

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 10 6"
      width={8}
      height={6}
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1 1l4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
    </svg>
  );
}

function SearchField({ className = "" }: { className?: string }) {
  return (
    <form
      role="search"
      action="/search"
      className={`flex h-10 items-center border border-white/20 bg-white/[0.04] transition-colors focus-within:border-white/70 hover:border-white/40 ${className}`}
    >
      <label htmlFor="site-search" className="sr-only">
        Search
      </label>
      <input
        id="site-search"
        name="q"
        type="search"
        placeholder="What are you looking for?"
        className="h-full min-w-0 flex-1 bg-transparent px-4 text-[13px] tracking-[0.01em] text-white placeholder:text-white/50 focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Search"
        className="flex h-full w-10 items-center justify-center text-white/80 hover:text-white"
      >
        <Glyph name="search" size={15} />
      </button>
    </form>
  );
}

/**
 * Site-wide top navigation: optional announcement bar, then the 80px nav
 * (logo + menu left, search right). Server-rendered; dropdowns open on hover
 * and keyboard focus, and the small-screen menu uses <details>, so no client
 * JavaScript is needed.
 */
export function SiteHeader({
  nav = defaultNav,
  announcement = defaultAnnouncement,
}: {
  nav?: NavItem[];
  /** Pass `null` to hide the bar. */
  announcement?: Announcement | null;
}) {
  return (
    <header className="relative z-30 text-white">
      {announcement && (
        <div className="bg-navy-900">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-4 gap-y-1.5 px-6 py-2 text-center text-xs tracking-[0.01em] text-white/85 md:px-16 lg:h-10 lg:flex-nowrap lg:py-0">
            <p>{announcement.text}</p>
            <Link
              href={announcement.href}
              className="inline-flex h-6 items-center gap-2 bg-blue-200 px-2.5 text-xs font-medium text-blue-900 transition-colors hover:bg-white"
            >
              {announcement.cta}
              <Glyph name="arrow-up-right" size={11} />
            </Link>
          </div>
        </div>
      )}

      <div className="border-b border-white/10 bg-blue-900">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center gap-10 px-6 md:px-16">
          <Link href="/" aria-label="Jernigan & Associates, home">
            <Logo width={104} />
          </Link>

          {/* Desktop menu */}
          <nav
            aria-label="Main"
            className="ml-auto hidden h-full items-center gap-9 text-[13px] font-medium tracking-[0.02em] text-white/85 xl:flex"
          >
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative h-full">
                  <Link
                    href={item.href}
                    aria-haspopup="true"
                    className="flex h-full items-center gap-2 transition-colors hover:text-white group-focus-within:text-white group-hover:text-white"
                  >
                    {item.label}
                    <Chevron className="transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
                  </Link>
                  <ul className="invisible absolute -left-5 top-full min-w-56 bg-white py-2 font-normal tracking-normal text-blue-900 opacity-0 shadow-[0_12px_32px_rgb(11_33_64/0.18)] transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block px-5 py-2 text-[13px] hover:bg-lilac-100"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex h-full items-center transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <SearchField className="ml-auto hidden w-full max-w-[280px] xl:flex" />

          {/* Small-screen menu */}
          <details className="group ml-auto xl:hidden">
            <summary className="flex h-10 cursor-pointer list-none items-center gap-2.5 border border-white/20 px-3.5 text-[13px] font-medium tracking-[0.02em] [&::-webkit-details-marker]:hidden">
              Menu
              <Chevron className="transition-transform group-open:rotate-180" />
            </summary>
            <div className="absolute inset-x-0 top-full max-h-[75vh] overflow-y-auto bg-blue-900 px-6 pb-8 md:px-16">
              <SearchField className="mb-4" />
              <nav aria-label="Main">
                <ul>
                  {nav.map((item) => (
                    <li
                      key={item.label}
                      className="border-t border-white/15 py-4"
                    >
                      <Link href={item.href} className="font-serif text-2xl">
                        {item.label}
                      </Link>
                      {item.children && (
                        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className="hover:text-white"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

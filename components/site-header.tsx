import Link from "next/link";
import { Logo } from "@/components/brand";
import { Glyph } from "@/components/icons";
import { SiteMenu } from "@/components/site-menu";
import { StickyBar } from "@/components/sticky-bar";
import type { SiteContent } from "@/content/site";

export type NavItem = {
  label: string;
  href: string;
  /** Short label above the sub-links, e.g. "Six practice areas". */
  eyebrow?: string;
  /** Sub-links, shown beside the item in the open menu. */
  children: { label: string; href: string; description?: string }[];
};

export type Announcement = {
  text: string;
  cta: string;
  href: string;
};

/**
 * Site-wide top navigation: an optional announcement bar that scrolls away
 * with the page, then the 80px bar (logo left; consultation button and Menu
 * right), which sticks to the top and hides while scrolling down (see
 * sticky-bar.tsx). The Menu button opens the full navigation (site-menu.tsx).
 */
export function SiteHeader({
  nav,
  menu,
  social,
  announcement,
}: {
  nav: NavItem[];
  menu: SiteContent["menu"];
  social: { label: string; href: string }[];
  /** Pass `null` to hide the bar. */
  announcement?: Announcement | null;
}) {
  return (
    <>
      {announcement && (
        <div className="relative z-30 bg-navy-900 text-white">
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

      <StickyBar>
        <div className="border-b border-white/10 bg-blue-900">
          <div className="mx-auto flex h-20 max-w-[1440px] items-center gap-2 px-6 md:px-16">
            <Link
              href="/"
              aria-label="Jernigan & Associates, home"
              className="mr-auto"
            >
              <Logo width={104} />
            </Link>
            <Link
              href={menu.ctaHref}
              className="type-button hidden h-12 items-center bg-tan-300 px-5 text-blue-900 transition-colors hover:bg-white sm:flex"
            >
              {menu.ctaLabel}
            </Link>
            <SiteMenu nav={nav} menu={menu} social={social} />
          </div>
        </div>
      </StickyBar>
    </>
  );
}

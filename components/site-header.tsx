import Link from "next/link";
import { Glyph } from "@/components/icons";
import type { MegaMenuData } from "@/components/mega-menus";
import { NavBar } from "@/components/nav-bar";
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
 * Site-wide top navigation: an optional announcement strip that scrolls away
 * with the page, then the navigation bar, which stays fixed and folds its
 * links into the "Book a consultation" and Menu buttons on scroll (see
 * nav-bar.tsx). Menu opens the full navigation (site-menu.tsx).
 */
export function SiteHeader({
  nav,
  menu,
  social,
  mega,
  announcement,
}: {
  nav: NavItem[];
  menu: SiteContent["menu"];
  social: { label: string; href: string }[];
  mega: MegaMenuData;
  /** Pass `null` to hide the strip. */
  announcement?: Announcement | null;
}) {
  return (
    <>
      {announcement && (
        <div className="bg-navy-900 text-white">
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
      <NavBar barNav={nav} nav={nav} menu={menu} social={social} mega={mega} />
    </>
  );
}

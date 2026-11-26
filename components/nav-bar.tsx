"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/brand";
import { Glyph } from "@/components/icons";
import {
  AboutMenu,
  type MegaMenuData,
  ServicesMenu,
  WhoMenu,
} from "@/components/mega-menus";
import type { NavItem } from "@/components/site-header";
import { SiteMenu } from "@/components/site-menu";
import type { SiteContent } from "@/content/site";

/**
 * How long a dropdown takes to drift up and fade out before the page changes.
 * Keep a touch under the `duration-[600ms]` on the panel.
 */
const CLOSE_MS = 540;

/** Scroll range (px) over which the links hand over to the buttons. */
const START = 30;
const END = 170;
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

/**
 * The one navigation bar. It sticks to the top of the page and never leaves;
 * only what sits on its right changes.
 *
 * At the top of the page that is the full menu and search. As the visitor
 * scrolls, the links drift to the right and fade while "Book a consultation"
 * and Menu settle into the same corner, so the menu appears to fold into the
 * two buttons. The hand-over is tied to the scroll position (smoothed by a
 * light spring), so it runs forwards and backwards with the scroll rather
 * than switching.
 *
 * Below the `xl` width there is no room for the links, so the buttons simply
 * show all the time (a second, static copy, so this needs no script).
 */
export function NavBar({
  barNav,
  nav,
  menu,
  social,
  mega,
}: {
  /** The links shown in the bar itself. */
  barNav: NavItem[];
  /** Everything listed in the full-screen menu. */
  nav: NavItem[];
  menu: SiteContent["menu"];
  social: { label: string; href: string }[];
  /** Content of the three large dropdowns. */
  mega: MegaMenuData;
}) {
  const { scrollY } = useScroll();
  const progress = useSpring(
    useTransform(scrollY, [START, END], [0, 1], { clamp: true }),
    { stiffness: 220, damping: 32, mass: 0.7 },
  );

  // Links: drift right and fade over the first two thirds.
  const linksX = useTransform(progress, [0, 1], [0, 72]);
  const linksOpacity = useTransform(progress, [0, 0.65], [1, 0]);
  const linksTransform = useMotionTemplate`translateX(${linksX}px)`;
  // Buttons: arrive from the left, travelling the same way, over the rest.
  const buttonsX = useTransform(progress, [0.3, 1], [-56, 0]);
  const buttonsOpacity = useTransform(progress, [0.35, 1], [0, 1]);
  const buttonsTransform = useMotionTemplate`translateX(${buttonsX}px)`;

  // Which set can be clicked and tabbed to follows the halfway point.
  const [folded, setFolded] = useState(false);
  useMotionValueEvent(progress, "change", (value) => {
    const next = value > 0.5;
    if (next !== folded) setFolded(next);
  });

  const router = useRouter();
  /** True from a click on a dropdown link until the pointer leaves the item. */
  const [closing, setClosing] = useState(false);

  /**
   * A link inside a dropdown was clicked: the dropdown rolls up and the page
   * beneath eases out together, then the new page opens and eases in. Without this the panel would stay open under the pointer
   * while the page changed behind it.
   */
  const followLink = (event: React.MouseEvent<HTMLElement>) => {
    const link = (event.target as HTMLElement).closest("a");
    const href = link?.getAttribute("href") ?? "";
    const newTab =
      event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0;
    if (!link || newTab || !href.startsWith("/")) return;

    event.preventDefault();
    // Focus would otherwise keep the dropdown open.
    link.blur();
    setClosing(true);
    // Have the next page ready by the time the dropdown has closed.
    router.prefetch(href);
    // The page underneath eases out at the same time (see globals.css); the
    // next page clears this as it arrives (app/(site)/template.tsx).
    document.documentElement.dataset.leaving = "true";
    window.setTimeout(() => router.push(href), CLOSE_MS);
    // Same-page links do not remount the page, so clear the state ourselves.
    window.setTimeout(() => {
      delete document.documentElement.dataset.leaving;
    }, CLOSE_MS + 1500);
  };

  /** The large dropdown for a top-level link, if it has one. */
  const panelFor = (href: string) => {
    if (href === "/who-we-serve")
      return { wide: true, node: <WhoMenu data={mega.who} /> };
    if (href === "/services")
      return { wide: true, node: <ServicesMenu data={mega.services} /> };
    if (href === "/about")
      return { wide: false, node: <AboutMenu data={mega.about} /> };
    return null;
  };

  const buttons = (
    <>
      <Link
        href={menu.ctaHref}
        className="type-button hidden h-12 items-center bg-tan-300 px-5 text-blue-900 transition-colors hover:bg-white sm:flex"
      >
        {menu.ctaLabel}
      </Link>
      <SiteMenu nav={nav} menu={menu} social={social} />
    </>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-blue-900 text-white">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center px-6 md:px-16">
        <Link href="/" aria-label="Jernigan & Associates, home">
          <Logo width={104} />
        </Link>

        {/* Both sets share one grid cell, so neither needs positioning and
            the wide dropdowns can span the whole bar. */}
        <div className="ml-auto grid h-full flex-1 items-center justify-items-end">
          {/* Full menu and search (wide screens, top of the page) */}
          <motion.div
            style={{ opacity: linksOpacity }}
            inert={folded}
            className="col-start-1 row-start-1 hidden h-full w-full items-center justify-end gap-10 pl-10 xl:flex"
          >
            <nav
              aria-label="Main"
              data-closing={closing}
              className="group/nav mx-auto flex h-full items-center text-[13px] font-medium tracking-[0.02em] text-white/85"
            >
              {barNav.map((item) => {
                const panel = panelFor(item.href);
                const label = (
                  <motion.span
                    style={{ transform: linksTransform }}
                    className="flex items-center gap-2"
                  >
                    {item.label}
                    {panel && (
                      <Chevron className="transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
                    )}
                  </motion.span>
                );
                return panel ? (
                  <div
                    key={item.label}
                    className={`group h-full ${panel.wide ? "" : "relative"}`}
                    onMouseLeave={() => setClosing(false)}
                  >
                    {/* Opens the dropdown only; the pages are reached from inside it. */}
                    <button
                      type="button"
                      aria-haspopup="true"
                      className="flex h-full cursor-default items-center px-[18px] font-[inherit] tracking-[inherit] transition-colors hover:text-white group-focus-within:text-white group-hover:text-white"
                    >
                      {label}
                    </button>
                    <div
                      onClickCapture={followLink}
                      className={`invisible absolute top-full z-10 group-data-[closing=true]/nav:!invisible group-data-[closing=true]/nav:![clip-path:inset(0_-80px_100%_-80px)] group-data-[closing=true]/nav:duration-[600ms] group-data-[closing=true]/nav:ease-[cubic-bezier(0.65,0,0.35,1)] group-data-[closing=true]/nav:!opacity-0 font-normal tracking-normal opacity-0 transition-[opacity,visibility,clip-path] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] [clip-path:inset(0_-80px_100%_-80px)] group-hover:[clip-path:inset(0_-80px_-80px_-80px)] group-focus-within:[clip-path:inset(0_-80px_-80px_-80px)] group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 ${
                        panel.wide
                          ? "inset-x-0 border-t border-blue-900/10 shadow-[0_24px_40px_rgb(11_33_64/0.14)]"
                          : "left-1/2 -ml-[300px]"
                      }`}
                    >
                      {panel.node}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex h-full items-center px-[18px] transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <motion.div
              style={{ transform: linksTransform }}
              className="w-full max-w-[280px]"
            >
              <form
                role="search"
                action="/search"
                className="flex h-10 w-full items-center border border-white/20 bg-white/[0.04] transition-colors focus-within:border-white/70 hover:border-white/40"
              >
                <label htmlFor="header-search" className="sr-only">
                  Search
                </label>
                <input
                  id="header-search"
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
            </motion.div>
          </motion.div>

          {/* Wide screens: the buttons the links fold into on scroll */}
          <motion.div
            style={{ opacity: buttonsOpacity, transform: buttonsTransform }}
            inert={!folded}
            className="col-start-1 row-start-1 hidden items-center gap-2 xl:flex"
          >
            {buttons}
          </motion.div>

          {/* Narrower screens: no room for the links, so always the buttons */}
          <div className="flex items-center gap-2 xl:hidden">{buttons}</div>
        </div>
      </div>
    </header>
  );
}

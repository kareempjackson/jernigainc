"use client";

import Link from "next/link";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  BlockButton,
  BloomGrid,
  Flower,
  Logo,
  Photo,
} from "@/components/brand";
import { Glyph } from "@/components/icons";
import type { NavItem } from "@/components/site-header";
import type { SiteContent } from "@/content/site";

const EASE = [0.76, 0, 0.24, 1] as const;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** The overlay wipes down from the top edge, then its contents rise in. */
const overlay = {
  closed: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.5, ease: EASE },
  },
  open: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.7, ease: EASE },
  },
};
const list = {
  closed: {},
  open: { transition: { staggerChildren: 0.055, delayChildren: 0.25 } },
};
const rise = {
  closed: { y: "55%", opacity: 0 },
  open: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE_OUT } },
};
const fade = (delay: number) => ({
  closed: { y: 16, opacity: 0 },
  open: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT, delay },
  },
});

const MotionLink = motion.create(Link);

/**
 * A main item in the overlay. Items with sub-links are not pages to visit
 * from here: they only bring up their sub-links. The rest are ordinary links.
 */
function MenuItem({
  href,
  expandable,
  children,
  ...rest
}: {
  href: string;
  expandable: boolean;
  children: ReactNode;
  className: string;
  onMouseEnter: () => void;
  onFocus: () => void;
  onClick: () => void;
}) {
  return expandable ? (
    <button type="button" aria-haspopup="true" {...rest}>
      {children}
    </button>
  ) : (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

/** The item for the page being viewed, else the first one with sub-links. */
function startingItem(nav: NavItem[]) {
  const path = window.location.pathname;
  const current = nav.findIndex(
    (item) => path === item.href || path.startsWith(`${item.href}/`),
  );
  if (current >= 0) return current;
  const withLinks = nav.findIndex((item) => item.children.length > 0);
  return Math.max(withLinks, 0);
}

/**
 * The "Menu" button and the full-screen overlay it opens: the numbered main
 * items on the left, the highlighted item's sub-links in the middle, and a
 * promo card on the right, with search and social links along the bottom.
 * Hovering or focusing an item highlights it. Closes on Escape and on Close;
 * following a link plays the closing transition first, then opens the page.
 */
export function SiteMenu({
  nav,
  menu,
  social,
}: {
  nav: NavItem[];
  menu: SiteContent["menu"];
  social: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  // The overlay is attached to <body> from the first time the menu is opened.
  const [mounted, setMounted] = useState(false);
  const item = nav[active] ?? nav[0];

  const router = useRouter();
  /** Where to go once the overlay has finished closing. */
  const pending = useRef<string | null>(null);

  /**
   * A link inside the overlay was clicked: close the overlay first and only
   * then move to the page, so the new page is revealed rather than swapped in
   * underneath. Runs in the capture phase, ahead of <Link>'s own handling.
   */
  const followLink = (event: React.MouseEvent<HTMLElement>) => {
    const link = (event.target as HTMLElement).closest("a");
    if (!link) return;

    const href = link.getAttribute("href") ?? "";
    const newTab =
      event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0;
    // Leave new-tab clicks and links off the site to the browser.
    if (newTab || !href.startsWith("/")) {
      setOpen(false);
      return;
    }
    event.preventDefault();
    pending.current = href;
    setOpen(false);
  };

  const goToPending = () => {
    const href = pending.current;
    pending.current = null;
    if (href) router.push(href);
  };

  // The page behind must not scroll while the overlay is up.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <MotionConfig reducedMotion="user">
      <div
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
      >
        <motion.button
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => {
            setActive(startingItem(nav));
            setMounted(true);
            setOpen(true);
          }}
          initial="rest"
          animate="rest"
          whileHover="hover"
          whileFocus="hover"
          whileTap={{ scale: 0.97 }}
          variants={{
            rest: { color: "var(--color-white)" },
            hover: { color: "var(--color-blue-900)" },
          }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          className="relative flex h-12 items-center gap-3.5 overflow-hidden bg-navy-900 px-5 text-[13px] font-medium tracking-[0.02em]"
        >
          {/* Tan fill that rises from the bottom edge on hover */}
          <motion.span
            aria-hidden="true"
            variants={{ rest: { y: "101%" }, hover: { y: "0%" } }}
            transition={{ duration: 0.45, ease: EASE }}
            className="absolute inset-0 bg-tan-300"
          />
          <span aria-hidden="true" className="relative block h-2 w-5">
            <motion.span
              variants={{ rest: { x: 0 }, hover: { x: 0 } }}
              className="absolute left-0 top-0 h-0.5 w-5 bg-current"
            />
            {/* The short bar grows to full width */}
            <motion.span
              variants={{ rest: { width: 14 }, hover: { width: 20 } }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              className="absolute left-0 top-1.5 h-0.5 bg-current"
            />
          </span>
          <span className="relative">Menu</span>
        </motion.button>
        {/* Rendered on <body>: inside the sliding bar it would move with it. */}
        {mounted &&
          createPortal(
            <AnimatePresence onExitComplete={goToPending}>
              {open && (
                <motion.div
                  id="site-menu"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Menu"
                  variants={overlay}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onClickCapture={followLink}
                  // Never scrolls sideways. On desktop it does not scroll at all; on
                  // small screens it may scroll down if the stacked content is taller
                  // than the screen.
                  className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden overscroll-contain bg-navy-900 text-white lg:overflow-hidden"
                >
                  {/* Petal outlines. They hang past the corner, so they sit in a
                      clipped layer: otherwise they would make the menu scroll. */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 overflow-hidden"
                  >
                    <Flower
                      size={520}
                      className="absolute -bottom-40 right-[-4%] hidden text-white/[0.04] lg:block"
                    />
                  </div>

                  <div className="relative mx-auto flex min-h-full max-w-[1440px] flex-col px-6 md:px-16 lg:h-full lg:min-h-0">
                    <motion.div
                      variants={fade(0.2)}
                      className="flex h-20 shrink-0 items-center gap-3"
                    >
                      <Link
                        href="/"
                        aria-label="Jernigan & Associates, home"
                        className="mr-auto"
                      >
                        <Logo width={104} />
                      </Link>
                      <span className="hidden sm:block">
                        <BlockButton href={menu.ctaHref} variant="tan">
                          {menu.ctaLabel}
                        </BlockButton>
                      </span>
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="flex h-12 items-center gap-3 border border-white/40 px-5 text-[13px] font-medium tracking-[0.02em] transition-colors hover:border-white hover:bg-white hover:text-blue-900"
                      >
                        Close
                        <Glyph name="cross" size={12} className="rotate-45" />
                      </button>
                    </motion.div>

                    <div className="grid min-h-0 flex-1 gap-x-14 gap-y-8 pb-6 pt-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)_minmax(0,0.7fr)] lg:pt-[clamp(3.25rem,10svh,6.5rem)]">
                      <nav aria-label="Main">
                        <motion.ol
                          variants={list}
                          className="space-y-[clamp(0.75rem,2.4svh,1.5rem)]"
                        >
                          {nav.map((entry, i) => (
                            <li key={entry.label} className="overflow-hidden">
                              <motion.div variants={rise}>
                                <MenuItem
                                  href={entry.href}
                                  expandable={entry.children.length > 0}
                                  onMouseEnter={() => setActive(i)}
                                  onFocus={() => setActive(i)}
                                  onClick={() => setActive(i)}
                                  className={`group flex items-baseline gap-5 text-left font-serif text-[clamp(2.25rem,min(4.2vw,6.6svh),3.75rem)] leading-[1.16] tracking-[-0.02em] transition-colors ${
                                    active === i
                                      ? "text-white"
                                      : "text-white/35"
                                  }`}
                                >
                                  <span className="w-5 shrink-0 -translate-y-[0.5em] font-sans text-xs tracking-normal text-white/60">
                                    {String(i + 1).padStart(2, "0")}
                                  </span>
                                  {entry.label}
                                  {/* Only items with sub-links point to them */}
                                  {entry.children.length > 0 && (
                                    <Glyph
                                      name="arrow-right"
                                      size={24}
                                      className={`shrink-0 self-center text-tan-300 transition-opacity ${
                                        active === i
                                          ? "opacity-100"
                                          : "opacity-0"
                                      }`}
                                    />
                                  )}
                                </MenuItem>
                              </motion.div>
                            </li>
                          ))}
                        </motion.ol>
                      </nav>
                      <motion.div variants={fade(0.45)} className="lg:pt-2">
                        <AnimatePresence mode="wait" initial={false}>
                          {item.children.length > 0 && (
                            <motion.div
                              key={active}
                              initial={{ opacity: 0, x: 14 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -8 }}
                              transition={{ duration: 0.22, ease: EASE_OUT }}
                            >
                              {item.eyebrow && (
                                <p className="flex items-center gap-2.5 text-[13px] text-white/85">
                                  <span
                                    aria-hidden="true"
                                    className="size-1 rounded-full bg-tan-300"
                                  />
                                  {item.eyebrow}
                                </p>
                              )}
                              <ul className="mt-3">
                                {item.children.map((child) => (
                                  <li key={child.label}>
                                    <Link
                                      href={child.href}
                                      className="group flex items-center justify-between gap-6 border-b border-white/15 py-[clamp(0.25rem,1.1svh,0.625rem)]"
                                    >
                                      <span>
                                        <span className="block text-[15px] font-medium group-hover:text-tan-300">
                                          {child.label}
                                        </span>
                                        {child.description && (
                                          <span className="mt-0.5 block text-xs text-white/55">
                                            {child.description}
                                          </span>
                                        )}
                                      </span>
                                      <Glyph
                                        name="arrow-up-right"
                                        size={12}
                                        className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                      />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                      <MotionLink
                        variants={fade(0.55)}
                        href={menu.promoHref || "#"}
                        className="group hidden self-start lg:block"
                      >
                        <span className="relative flex aspect-[13/18] max-h-[min(380px,42svh)] w-full flex-col justify-end overflow-hidden bg-blue-700 p-5">
                          {menu.promoImage ? (
                            <>
                              <Photo
                                src={menu.promoImage}
                                alt=""
                                slot=""
                                sizes="(min-width: 1024px) 25vw, 100vw"
                              />
                              <span className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />
                            </>
                          ) : (
                            <BloomGrid
                              cols={6}
                              rows={9}
                              budClass="text-blue-500/40"
                              bloomClass="text-mist-300/60"
                              className="absolute inset-0 size-full p-6"
                            />
                          )}
                          <span className="relative self-start bg-lilac-200 px-2.5 py-1.5 text-xs text-blue-900">
                            {menu.promoTag}
                          </span>
                          <span className="relative mt-2.5 font-serif text-[1.3125rem] leading-[1.1] tracking-[-0.01em]">
                            {menu.promoTitle}
                          </span>
                        </span>
                        <span className="flex h-11 items-center justify-between bg-mist-200 px-5 text-[13px] font-medium text-blue-900 transition-colors group-hover:bg-white">
                          {menu.promoCta}
                          <Glyph name="arrow-up-right" size={12} />
                        </span>
                      </MotionLink>
                    </div>
                    <motion.div
                      variants={fade(0.65)}
                      className="flex shrink-0 flex-wrap items-end justify-between gap-x-10 gap-y-5 pb-7"
                    >
                      <form
                        role="search"
                        action="/search"
                        className="flex h-11 w-full max-w-[380px] items-center border border-white/40 transition-colors focus-within:border-white hover:border-white/70"
                      >
                        <label htmlFor="site-search" className="sr-only">
                          Search
                        </label>
                        <button
                          type="submit"
                          aria-label="Search"
                          className="flex h-full w-12 items-center justify-center"
                        >
                          <Glyph name="search" size={16} />
                        </button>
                        <input
                          id="site-search"
                          name="q"
                          type="search"
                          placeholder="What are you looking for?"
                          className="h-full min-w-0 flex-1 bg-transparent pr-4 text-sm text-white placeholder:text-white/65 focus:outline-none"
                        />
                      </form>
                      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-white/85">
                        {social.map((link) => (
                          <li key={link.label}>
                            <a href={link.href} className="hover:text-white">
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body,
          )}
      </div>
    </MotionConfig>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Mark, Photo } from "@/components/brand";
import { Glyph } from "@/components/icons";
import type { SiteContent } from "@/content/site";

/** Everything the three large dropdowns show. Assembled in the site layout. */
export type MegaMenuData = {
  who: SiteContent["megaMenus"]["who"] & {
    href: string;
    sectors: { icon: string; name: string; menuBody: string; href: string }[];
  };
  services: SiteContent["megaMenus"]["services"] & {
    items: {
      name: string;
      href: string;
      title: string;
      body: string;
      tags: string[];
      image: string | null;
    }[];
  };
  about: SiteContent["megaMenus"]["about"];
};

const TILES = ["bg-lilac-200", "bg-tan-300", "bg-mist-200"];
const EYEBROW = "flex items-center gap-2.5 text-xs text-blue-500";
const DOT = "size-1 rounded-full bg-current";

/** "Who we serve": intro, the sectors, and a case-scenario card. */
export function WhoMenu({ data }: { data: MegaMenuData["who"] }) {
  return (
    <div className="bg-paper-100 text-blue-900">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1.05fr)] gap-x-10 px-16 py-8">
        <div>
          <p className={EYEBROW}>
            <span aria-hidden="true" className={DOT} />
            {data.eyebrow}
          </p>
          <p className="mt-4 font-serif text-[1.5rem] leading-[1.1] tracking-[-0.015em] text-navy-900">
            {data.title}
          </p>
          <p className="mt-3.5 max-w-[16rem] text-[13px] leading-[1.55] text-blue-900/75">
            {data.body}
          </p>
          <Link
            href={data.href}
            className="group/link mt-4 inline-flex items-center gap-2 text-[13px] font-medium"
          >
            {data.linkLabel}
            <Glyph
              name="arrow-right"
              size={13}
              className="transition-transform group-hover/link:translate-x-0.5"
            />
          </Link>
        </div>

        <ul className="grid grid-cols-2 content-start gap-x-3 gap-y-0.5">
          {data.sectors.map((sector, i) => (
            <li key={sector.name}>
              <Link
                href={sector.href || "#"}
                className="group/card flex h-full items-center gap-3.5 px-3 py-2.5 transition-colors hover:bg-white"
              >
                <span
                  className={`flex size-10 shrink-0 items-center justify-center ${TILES[i % TILES.length]}`}
                >
                  <Mark name={sector.icon} size={16} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-[1.0625rem] leading-[1.15] tracking-[-0.01em] text-navy-900">
                    {sector.name}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-blue-900/70">
                    {sector.menuBody}
                  </span>
                </span>
                <Glyph
                  name="arrow-up-right"
                  size={11}
                  className="shrink-0 opacity-0 transition-opacity group-hover/card:opacity-100"
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={data.caseHref || "#"}
          className="group/case block self-start"
        >
          <span className="relative flex aspect-[16/11] flex-col justify-end overflow-hidden bg-blue-700 p-5 text-white">
            {data.caseImage && (
              <>
                <Photo
                  src={data.caseImage}
                  alt=""
                  slot=""
                  sizes="(min-width: 1280px) 25vw, 100vw"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/25 to-transparent" />
              </>
            )}
            <span className="relative self-start bg-tan-300 px-2 py-1 text-[11px] text-blue-900">
              {data.caseTag}
            </span>
            <span className="relative mt-2.5 font-serif text-[1.1875rem] leading-[1.12] tracking-[-0.01em]">
              {data.caseTitle}
            </span>
          </span>
          <span className="flex h-10 items-center justify-between bg-blue-900 px-5 text-[13px] font-medium text-white transition-colors group-hover/case:bg-navy-900">
            {data.caseCta}
            <Glyph name="arrow-up-right" size={12} />
          </span>
        </Link>
      </div>
    </div>
  );
}

/** "Services": the practice areas, with a preview of the highlighted one. */
export function ServicesMenu({ data }: { data: MegaMenuData["services"] }) {
  const [active, setActive] = useState(0);
  const item = data.items[active] ?? data.items[0];
  if (!item) return null;

  return (
    <div className="bg-white text-blue-900">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-x-12 px-16 py-8">
        <div>
          <p className={EYEBROW}>
            <span aria-hidden="true" className={DOT} />
            {data.eyebrow}
          </p>
          <ol className="mt-3">
            {data.items.map((service, i) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`flex h-[44px] items-center gap-5 border-b px-4 transition-colors ${
                    active === i
                      ? "border-blue-900 bg-blue-900 text-white"
                      : "border-blue-900/12 text-navy-900"
                  }`}
                >
                  <span
                    className={`text-[11px] font-medium ${active === i ? "text-white/70" : "text-blue-500"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-[1.125rem] leading-none tracking-[-0.01em]">
                    {service.name}
                  </span>
                  <Glyph
                    name="arrow-right"
                    size={active === i ? 14 : 11}
                    className={`ml-auto ${active === i ? "text-tan-300" : ""}`}
                  />
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-x-6 self-start bg-paper-100 p-4">
          <div className="relative min-h-[246px] bg-paper-300">
            <Photo
              key={item.href}
              src={item.image ?? undefined}
              alt=""
              slot={item.name}
              sizes="(min-width: 1280px) 28vw, 100vw"
            />
          </div>
          <div className="flex flex-col py-0.5">
            <p className="type-eyebrow text-[10px] font-medium text-blue-500">
              {data.previewLabel} · {item.name}
            </p>
            <p className="mt-3 text-balance font-serif text-[1.3125rem] leading-[1.1] tracking-[-0.015em] text-navy-900">
              {item.title}
            </p>
            <p className="mt-2.5 text-[13px] leading-[1.55] text-blue-900/75">
              {item.body}
            </p>
            <ul className="mt-3.5 flex flex-wrap gap-1.5 text-[11px]">
              {item.tags.map((tag, i) => (
                <li
                  key={tag}
                  className={`px-2 py-1 ${TILES[i % TILES.length]}`}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <Link
                href={item.href}
                className="group/explore inline-flex gap-[3px] text-[13px] font-medium text-white"
              >
                <span className="flex h-10 items-center bg-blue-900 px-4">
                  Explore {item.name}
                </span>
                <span className="flex size-10 items-center justify-center bg-blue-900 transition-transform group-hover/explore:translate-x-0.5">
                  <Glyph name="arrow-right" size={15} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** "About": a short list of links beside the founder card. */
export function AboutMenu({ data }: { data: MegaMenuData["about"] }) {
  return (
    <div className="grid w-[600px] grid-cols-[minmax(0,1fr)_248px] gap-3 bg-white p-3 text-blue-900 shadow-[0_18px_48px_rgb(11_33_64/0.2)]">
      <ul className="py-1">
        {data.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href || "#"}
              className="group/row flex items-center gap-3 px-2.5 py-2 transition-colors hover:bg-paper-100"
            >
              <span className="flex size-8 shrink-0 items-center justify-center bg-paper-100 transition-colors group-hover/row:bg-blue-900 group-hover/row:text-white">
                <Mark name={link.icon} size={13} />
              </span>
              <span>
                <span className="block text-sm font-medium leading-tight text-navy-900">
                  {link.label}
                </span>
                <span className="mt-0.5 block text-xs leading-tight text-blue-900/65">
                  {link.description}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Link href={data.cardHref || "#"} className="group/card flex flex-col">
        <span className="relative block min-h-[150px] flex-1 bg-mist-200">
          <Photo
            src={data.cardImage ?? undefined}
            alt=""
            slot="Founder portrait"
            sizes="248px"
          />
        </span>
        <span className="block bg-blue-900 px-4 pb-4 pt-3.5 text-white">
          <span className="block font-serif text-[1.0625rem] leading-[1.18] tracking-[-0.01em]">
            {data.cardTitle}
          </span>
          <span className="mt-3 inline-flex items-center gap-2 text-[13px] font-medium text-tan-200">
            {data.cardCta}
            <Glyph
              name="arrow-right"
              size={13}
              className="transition-transform group-hover/card:translate-x-0.5"
            />
          </span>
        </span>
      </Link>
    </div>
  );
}

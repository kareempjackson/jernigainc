import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getServices, getSite, getWhoWeServe } from "@/sanity/lib/content";

/**
 * Shell for every public page: top navigation, page content, footer.
 * (/brand and /studio sit outside this group and keep their own chrome.)
 */
export default async function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [site, services, whoWeServe] = await Promise.all([
    getSite(),
    getServices(),
    getWhoWeServe(),
  ]);
  const serviceLinks = services.map((s) => ({
    label: s.name,
    description: s.menuBody,
    href: `/services/${s.slug}`,
  }));

  // The Services item always lists the practice areas that exist.
  const nav = site.nav.map((item) => ({
    ...item,
    children: item.href === "/services" ? serviceLinks : item.children,
  }));

  // The three large dropdowns draw on the sector and service content.
  const mega = {
    who: {
      ...site.megaMenus.who,
      href: "/who-we-serve",
      sectors: whoWeServe.sectors.items,
    },
    services: {
      ...site.megaMenus.services,
      items: services.map((s) => ({
        name: s.name,
        href: `/services/${s.slug}`,
        ...s.preview,
        image: s.hero.image,
      })),
    },
    about: site.megaMenus.about,
  };

  return (
    <>
      <SiteHeader
        nav={nav}
        menu={site.menu}
        social={site.footer.social}
        mega={mega}
        announcement={site.announcement.show ? site.announcement : null}
      />
      {/* Hero blue behind every page, so page fades never flash the paper
          colour (see "Moving between pages" in globals.css). */}
      <main className="flex-1 bg-blue-700">{children}</main>
      <SiteFooter content={site.footer} services={serviceLinks} />
    </>
  );
}

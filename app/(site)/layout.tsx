import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getServices, getSite } from "@/sanity/lib/content";

/**
 * Shell for every public page: top navigation, page content, footer.
 * (/brand and /studio sit outside this group and keep their own chrome.)
 */
export default async function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [site, services] = await Promise.all([getSite(), getServices()]);
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

  return (
    <>
      <SiteHeader
        nav={nav}
        menu={site.menu}
        social={site.footer.social}
        announcement={site.announcement.show ? site.announcement : null}
      />
      <main className="flex-1">{children}</main>
      <SiteFooter content={site.footer} services={serviceLinks} />
    </>
  );
}

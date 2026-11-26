import { cacheLife, cacheTag } from "next/cache";
import { aboutDefaults } from "@/content/about";
import { capabilitiesDefaults } from "@/content/capabilities";
import { contactDefaults } from "@/content/contact";
import { homeDefaults } from "@/content/home";
import { articleDefaults, insightsDefaults } from "@/content/insights";
import { psychologistDefaults } from "@/content/psychologist";
import { serviceDefaults } from "@/content/services";
import { siteDefaults } from "@/content/site";
import { teamDefaults } from "@/content/team";
import { whoWeServeDefaults } from "@/content/who-we-serve";
import { client } from "./client";
import { resolve } from "./resolve";

/**
 * Every read from Sanity goes through here. Results are cached and refreshed
 * in the background about once a minute, so an edit published in the Studio
 * shows up on the site shortly after without a rebuild. If Sanity cannot be
 * reached, or a field is empty, the default content in /content is shown.
 */
async function query<T>(groq: string): Promise<T | null> {
  "use cache";
  cacheTag("sanity");
  cacheLife("minutes");
  try {
    return await client.fetch<T>(groq);
  } catch (error) {
    console.error("Sanity query failed; showing default content.", error);
    return null;
  }
}

const single = <T>(id: string, defaults: T) =>
  async function get(): Promise<T> {
    return resolve(defaults, await query(`*[_id == "${id}"][0]`));
  };

export const getSite = single("siteSettings", siteDefaults);
export const getHome = single("homePage", homeDefaults);
export const getAbout = single("aboutPage", aboutDefaults);
export const getPsychologist = single("psychologistPage", psychologistDefaults);
export const getTeam = single("teamPage", teamDefaults);
export const getCapabilities = single("capabilitiesPage", capabilitiesDefaults);
export const getWhoWeServe = single("whoWeServePage", whoWeServeDefaults);
export const getContact = single("contactPage", contactDefaults);
export const getInsights = single("insights", insightsDefaults);

/** All practice areas, in menu order. */
export async function getServices() {
  const docs = await query<unknown[]>(
    `*[_type == "servicePage" && defined(slug)] | order(order asc)`,
  );
  if (!docs?.length) return serviceDefaults;
  // Each page falls back to the default of the same slug, if there is one.
  return docs.map((doc) => {
    const slug = (doc as { slug?: string }).slug;
    const base = serviceDefaults.find((s) => s.slug === slug);
    return resolve(base ?? serviceDefaults[0], doc, Boolean(base));
  });
}

/**
 * Articles, newest first. Only articles with a slug have a page, so those are
 * the ones returned; until the Studio has at least one, the sample pieces in
 * /content are shown.
 */
export async function getArticles() {
  const docs = await query<unknown[]>(
    `*[_type == "article"] | order(_createdAt desc)`,
  );
  if (!docs?.length) return articleDefaults;
  const published = resolve(articleDefaults, docs).filter((a) => a.slug);
  return published.length ? published : articleDefaults;
}

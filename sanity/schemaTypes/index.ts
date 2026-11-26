import type { SchemaTypeDefinition } from "sanity";
import { aboutDefaults } from "../../content/about";
import { capabilitiesDefaults } from "../../content/capabilities";
import { contactDefaults } from "../../content/contact";
import { homeDefaults } from "../../content/home";
import { articleDefaults, insightsDefaults } from "../../content/insights";
import { psychologistDefaults } from "../../content/psychologist";
import { serviceDefaults } from "../../content/services";
import { siteDefaults } from "../../content/site";
import { teamDefaults } from "../../content/team";
import { whoWeServeDefaults } from "../../content/who-we-serve";
import { fieldsOf } from "./derive";

/**
 * One-off documents: a single page or settings sheet each. The document's id
 * is the same as its type name. `defaults` is the content in /content that
 * the fields are generated from.
 */
export const singletons = [
  { name: "siteSettings", title: "Site settings", defaults: siteDefaults },
  { name: "homePage", title: "Home page", defaults: homeDefaults },
  { name: "aboutPage", title: "About page", defaults: aboutDefaults },
  {
    name: "psychologistPage",
    title: "Licensed psychologist page",
    defaults: psychologistDefaults,
  },
  {
    name: "whoWeServePage",
    title: "Who we serve page",
    defaults: whoWeServeDefaults,
  },
  { name: "teamPage", title: "Our team page", defaults: teamDefaults },
  {
    name: "capabilitiesPage",
    title: "Capabilities page",
    defaults: capabilitiesDefaults,
  },
  { name: "contactPage", title: "Contact page", defaults: contactDefaults },
  {
    name: "insights",
    title: "Research & insights sections",
    defaults: insightsDefaults,
  },
] as const;

const doc = (
  name: string,
  title: string,
  defaults: Record<string, unknown>,
  preview?: Record<string, string>,
) =>
  ({
    name,
    title,
    type: "document",
    fields: fieldsOf(defaults),
    preview: preview ? { select: preview } : { prepare: () => ({ title }) },
  }) as SchemaTypeDefinition;

/** Document types shown in the Studio. */
export const schemaTypes: SchemaTypeDefinition[] = [
  ...singletons.map((s) => doc(s.name, s.title, s.defaults)),
  doc("servicePage", "Service page", serviceDefaults[0], {
    title: "name",
    subtitle: "slug",
  }),
  doc("article", "Article", articleDefaults[0], {
    title: "title",
    subtitle: "topic",
    media: "image",
  }),
];

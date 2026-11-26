import { IMAGE } from "./shared";

/** Research and thought-leadership sections (shown on the research page). */
export const insightsDefaults = {
  frameworks: {
    eyebrow: "Insights and thought leadership",
    title: ["Frameworks, research", "and commentary"],
    body: "Our research, frameworks and commentary live here in one home, grounded in the Intersections Research Lab.",
  },
  featured: {
    label: "Featured framework · The Counseling Psychologist",
    title: ["Connecting to", "Ancestral Wisdom"],
    body: "A four-part framework for transforming how psychology is taught, researched, and practiced, introduced in Dr. Jernigan-Noesi’s article in The Counseling Psychologist.",
    ctaLabel: "Read the article",
    ctaHref: "#",
    pillars: ["Recognition", "Restoration", "Relationships", "Renewal"],
  },
  lab: {
    eyebrow: "From the Intersections Research Lab",
    title: ["Research that starts", "with lived experience."],
    body: "Through the Intersections Research Lab, Dr. Jernigan-Noesi investigates the social determinants of racial health disparities, culturally responsive assessment and treatment models, social-emotional development, and racism-related stress and trauma across the lifespan.",
    topics: [
      "Racial Trauma",
      "Child Development",
      "Mental Health",
      "Education",
    ],
    image: IMAGE,
  },
  latest: {
    title: "Latest thinking",
    featuredInLabel: "As featured in",
    featuredIn: [
      "NPR",
      "WNYC",
      "The 19th",
      "The Wall Street Journal",
      "HuffPost",
    ],
  },
};

export type InsightsContent = typeof insightsDefaults;

/** One piece in "Latest thinking". `format` is article, audio or video. */
export type ArticleContent = {
  title: string;
  summary: string;
  topic: string;
  date: string;
  href: string;
  format: string;
  image: string | null;
};

/** Placeholders until real pieces are added in the Studio. */
export const articleDefaults: ArticleContent[] = (
  [
    ["Racial Trauma", "article"],
    ["Mental Health", "audio"],
    ["Education", "video"],
    ["Child Development", "article"],
  ] as const
).map(([topic, format]) => ({
  title: "Article title, up to two lines",
  summary:
    "One to two sentence summary of the piece, written for busy leaders.",
  topic,
  date: "Date",
  href: "/insights",
  format,
  image: IMAGE,
}));

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
  /** The /insights page: masthead and search-engine text. */
  page: {
    eyebrow: "Insights",
    title: ["Research, translated", "for the people", "doing the work."],
    body: "Articles, conversations and practical tools from our consultants, written for the leaders, clinicians and educators who put them to use.",
    browseTitle: "Latest thinking",
    topicsEyebrow: "Browse by topic",
    topicsTitle: ["Four ways in"],
    seoTitle: "Insights · Jernigan & Associates",
    seoDescription:
      "Research-backed articles, practical tools and real stories, written to help your teams grow and lead.",
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

/** A titled part of an article. Paragraphs in `text` are split by a blank line. */
export type ArticleSection = { heading: string; text: string };

/** One piece of writing. `format` is article, audio or video. */
export type ArticleContent = {
  title: string;
  /** The last part of the address: /insights/<slug>. */
  slug: string;
  summary: string;
  topic: string;
  date: string;
  author: string;
  href: string;
  format: string;
  image: string | null;
  body: ArticleSection[];
  /** One line lifted out of the piece. Leave empty for none. */
  pullQuote: string;
  takeaways: string[];
};

/** "Mental Health" → "mental-health" */
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Minutes to read, at about 220 words a minute. */
export function readTime(article: ArticleContent) {
  const words = [article.summary, ...article.body.map((s) => s.text)]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

const sample = (
  a: Omit<ArticleContent, "href" | "image" | "author" | "slug">,
): ArticleContent => {
  const slug = slugify(a.title);
  return {
    ...a,
    slug,
    author: "Jernigan & Associates",
    href: `/insights/${slug}`,
    image: IMAGE,
  };
};

/**
 * SAMPLE COPY. These six pieces exist so the insights pages can be designed
 * and reviewed; the titles, dates and text are placeholders, not published
 * work. Replace them with real articles in the Studio (each needs a slug).
 */
export const articleDefaults: ArticleContent[] = [
  sample({
    title: "Belonging is built in the ordinary moments",
    summary:
      "Climate surveys tell you where belonging breaks down. The repair happens in meetings, hallways and feedback conversations.",
    topic: "Belonging",
    date: "November 2026",
    format: "article",
    body: [
      {
        heading: "Start with what people already notice",
        text: "Most organizations can describe their values. Fewer can describe what those values look like at nine on a Tuesday morning. Belonging lives in that gap: in who gets asked for an opinion, whose name is pronounced correctly, and who is left to explain themselves again.\n\nWe begin every engagement by listening for those ordinary moments. Listening sessions and climate data are not a formality before the real work. They are how we find out where the work is.",
      },
      {
        heading: "Small practices, repeated",
        text: "A single workshop rarely changes a culture. What changes it is a small number of practices that leaders and staff can use the next day, and keep using. Opening a meeting with a real check-in. Naming a decision and who made it. Following up after a hard conversation instead of hoping it resolved itself.\n\nNone of these is dramatic. Together, and repeated, they tell people what kind of place this is.",
      },
      {
        heading: "Measure what changes",
        text: "Feelings matter, and so does evidence. We agree up front on what we expect to shift, for whom, and how we will know. Then we report back plainly: what changed, what did not, and what to do next.",
      },
    ],
    pullQuote:
      "Belonging is a place where people stop having to explain themselves.",
    takeaways: [
      "Listen for the everyday moments before designing anything.",
      "Choose a few practices people can use the next day.",
      "Decide in advance how you will know it worked.",
    ],
  }),
  sample({
    title: "What leaders can do in the first ninety days",
    summary:
      "New leaders inherit a culture before they shape one. A short guide to listening first and earning the right to change things.",
    topic: "Leadership",
    date: "October 2026",
    format: "article",
    body: [
      {
        heading: "Inherit before you edit",
        text: "The first weeks in a role are the only time people will tell you how things really work without assuming you already know. Use them. Ask what should never change, what everyone works around, and what people have stopped raising because nothing came of it.",
      },
      {
        heading: "Say the hard thing kindly",
        text: "Courage in leadership is rarely a grand gesture. More often it is a clear sentence, said with care, and a willingness to stay in the room afterwards. Teams can tell the difference between a leader who avoids discomfort and one who can hold it.",
      },
      {
        heading: "Build with, not for",
        text: "Plans made for people tend to be complied with. Plans made with people tend to last. Co-design takes longer at the start and saves time everywhere after.",
      },
    ],
    pullQuote: "Plans made with people tend to last.",
    takeaways: [
      "Spend the first weeks asking, not announcing.",
      "Name what is hard, and stay for the conversation.",
      "Co-design the plan with the people who will carry it.",
    ],
  }),
  sample({
    title: "Professional development that reaches the classroom",
    summary:
      "Why so much training stays in the training room, and how to design learning that teachers can use on Monday morning.",
    topic: "Education",
    date: "September 2026",
    format: "video",
    body: [
      {
        heading: "The transfer problem",
        text: "Educators are asked to attend a great deal of professional learning. Much of it is sound, and much of it never reaches a student. The usual reason is not resistance. It is that the session ended before anyone practiced the thing.",
      },
      {
        heading: "Design for Monday",
        text: "We plan facilitated learning backwards from a real moment in a real classroom. What will a teacher say differently? What will a student experience differently? If we cannot answer that, the session is not ready.",
      },
      {
        heading: "Support after the session",
        text: "Coaching, follow-up and a way to share what is working turn a single event into a practice. Ongoing support is where the change is made.",
      },
    ],
    pullQuote: "",
    takeaways: [
      "Plan backwards from a real classroom moment.",
      "Leave time to practice, not only to listen.",
      "Follow up with coaching and shared reflection.",
    ],
  }),
  sample({
    title: "Culturally responsive care, in practice",
    summary:
      "For clinicians and care teams: what it means to treat each person as a whole person, and how teams can make that routine.",
    topic: "Mental Health",
    date: "August 2026",
    format: "audio",
    body: [
      {
        heading: "The whole person in the room",
        text: "People arrive with histories, families, communities and experiences of being treated well or badly by institutions like ours. Care that ignores this is incomplete care. Culturally responsive practice is not an add-on to clinical skill. It is part of it.",
      },
      {
        heading: "From intention to routine",
        text: "Good intentions are common. Routines are rarer. Teams that do this well build it into intake, supervision and case review, so that it does not depend on any one clinician remembering.",
      },
    ],
    pullQuote: "Care that ignores a person’s context is incomplete care.",
    takeaways: [
      "Treat context as clinical information.",
      "Build responsiveness into intake, supervision and review.",
    ],
  }),
  sample({
    title: "Reading a climate survey without flinching",
    summary:
      "Survey results can feel like a verdict. They are better read as a map: here is where to look, and here is who to ask.",
    topic: "Belonging",
    date: "July 2026",
    format: "article",
    body: [
      {
        heading: "A map, not a grade",
        text: "It is tempting to look for the overall score and stop there. The useful information is in the differences: which groups answer differently, on which questions, and what they are telling you that the average hides.",
      },
      {
        heading: "Go back and ask",
        text: "Numbers tell you where. People tell you why. Bring the results back to the people who gave them, and ask what you have misunderstood.",
      },
    ],
    pullQuote: "",
    takeaways: [
      "Look at the differences, not only the average.",
      "Take the results back to the people who gave them.",
    ],
  }),
  sample({
    title: "Rigor and care are not opposites",
    summary:
      "Evidence and humanity belong in the same room. On measuring what matters without losing sight of who it is for.",
    topic: "Leadership",
    date: "June 2026",
    format: "article",
    body: [
      {
        heading: "Two kinds of seriousness",
        text: "Some teams take data seriously and people lightly. Others do the reverse. The work asks for both: the discipline to measure honestly, and the care to remember that every data point is someone’s experience.",
      },
      {
        heading: "Report plainly",
        text: "Clear reporting says what changed, for whom, and what to do next. It does not hide a disappointing result, and it does not oversell a good one.",
      },
    ],
    pullQuote: "Every data point is someone’s experience.",
    takeaways: [
      "Measure honestly and report plainly.",
      "Keep the people behind the numbers in view.",
    ],
  }),
];

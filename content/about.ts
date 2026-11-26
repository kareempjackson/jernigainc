import { hero, IMAGE } from "./shared";

export const aboutDefaults = {
  seo: {
    title: "About · Jernigan & Associates",
    description:
      "Jernigan & Associates Psychological and Educational Consulting, Inc. is a woman-owned boutique firm. Since 2008, we have helped mission-driven organizations turn good intentions into measurable, lasting change.",
  },
  hero: hero({
    eyebrow: "About Jernigan & Associates",
    title: ["Psychological", "science, translated", "into lasting change."],
    body: "Jernigan & Associates Psychological and Educational Consulting, Inc. is a woman-owned boutique firm. Since 2008, we have helped mission-driven organizations turn good intentions into measurable, lasting change.",
    secondaryLabel: "Meet the team",
    secondaryHref: "/our-team",
    chipFigure: "2008",
    chipLabel: "Founded in Atlanta, GA",
  }),
  story: {
    eyebrow: "Our story",
    titleDark: "Started with schools.",
    titleBlue: "Grown into a national practice.",
    body: "Jernigan & Associates began in 2008 as a small agency partnering with schools on equity, diversity, and inclusion. As demand grew, from universities to health systems, government agencies, and national associations, we became a boutique national consultancy headquartered in Atlanta, working virtual-first with in-person engagements as needed.",
    belief:
      "One belief has guided us the entire way: lasting change comes from translating rigorous psychological science into everyday practice.",
    image: IMAGE,
    timeline: [
      {
        when: "2008",
        title: "Founded in Atlanta",
        body: "A small agency partnering with schools on equity, diversity, and inclusion.",
      },
      {
        when: "Growth",
        title: "Universities to national associations",
        body: "Health systems, government agencies, an academic medical center and a national psychological association.",
      },
      {
        when: "Today",
        title: "A boutique national consultancy",
        body: "Virtual-first, serving clients nationally, with in-person engagements as needed.",
      },
    ],
  },
  difference: {
    title: "What sets us apart",
    body: "Clients come to us when they realize that real equity takes more than a training session or a policy statement.",
    points: [
      {
        icon: "focus",
        title: "Interdisciplinary expertise",
        body: "Deep expertise across psychology, education, and organizational development.",
      },
      {
        icon: "blocks",
        title: "Evidence-based, not improvised",
        body: "Backed by the Intersections Research Lab, so every strategy is grounded in science.",
      },
      {
        icon: "chat",
        title: "Partnership over prescription",
        body: "We co-design with the people closest to the work, so the change holds.",
      },
    ],
    ctaLabel: "Book a consultation",
    ctaHref: "/contact",
    image: IMAGE,
  },
  approach: {
    eyebrow: "Our approach",
    title: ["Measure what matters.", "See the change."],
    body: "We start by understanding your context, then co-design solutions that are grounded in evidence and tailored to your goals. Every engagement is customized, and we measure what matters.",
    steps: [
      {
        title: "Understand",
        body: "We listen first: your context, your people and your systems.",
      },
      {
        title: "Co-design",
        body: "We build solutions with you, never just for you, grounded in evidence.",
      },
      {
        title: "Measure impact",
        body: "We distinguish individual, organizational and systems-level impact, so you can see the change, not just feel it.",
      },
    ],
  },
  values: {
    eyebrow: "Our values",
    title: ["What we hold", "ourselves to"],
    items: [
      {
        icon: "focus",
        title: "Evidence over performance",
        body: "Every recommendation is grounded in psychological science.",
      },
      {
        icon: "chat",
        title: "Partnership over prescription",
        body: "We co-design with the people closest to the work.",
      },
      {
        icon: "flower",
        title: "Trauma-informed",
        body: "We recognize the impact of trauma and design for safety, trust, and healing.",
      },
      {
        icon: "bars",
        title: "Healing-centered",
        body: "We attend to identity, well-being, and culture, not just compliance.",
      },
      {
        icon: "award",
        title: "Accountability",
        body: "We build specific, measurable mechanisms for sustained change.",
      },
    ],
  },
  mission: {
    stats: [
      {
        figure: "Since 2008",
        label: "Woman-owned (WOSB-certified) boutique firm",
      },
      { figure: "100+", label: "Organizations served" },
      { figure: "35,000+", label: "Professionals trained" },
      { figure: "22+ years", label: "Of founder leadership" },
    ],
    statements: [
      {
        label: "Mission",
        text: "Jernigan & Associates partners with organizations across healthcare, education, justice, and the public and private sectors to translate psychological science into lasting, equity-centered change that dismantles structural barriers and builds cultures where every person is seen, valued, and able to thrive.",
      },
      {
        label: "Vision",
        text: "A world where equity is non-negotiable, belonging is practiced, and organizational ecosystems cultivate the full humanity, creativity, and well-being of every individual.",
      },
    ],
  },
  quote: {
    text: "When Dr. Jernigan speaks, people listen because she unpacks complex racial dynamics in straightforward terms and offers practical advice for addressing racial injustice across a variety of societal domains.",
    author: "Dr. Janet E. Helms",
  },
};

export type AboutContent = typeof aboutDefaults;

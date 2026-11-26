import { hero, IMAGE } from "./shared";

export const whoWeServeDefaults = {
  seo: {
    title: "Who we serve · Jernigan & Associates",
    description:
      "Jernigan & Associates works alongside schools, universities, health systems, courts and companies to build places where every person can thrive.",
  },
  hero: hero({
    eyebrow: "Who we serve",
    title: [
      "Partners in belonging,",
      "wherever people",
      "learn, heal and work.",
    ],
    body: "For more than 25 years, Jernigan & Associates has worked alongside schools, universities, health systems, courts and companies. Different systems, one shared goal: places where every person, especially those who have been pushed to the margins, can thrive.",
    secondaryLabel: "See the people we support",
    secondaryHref: "#sectors",
    chipFigure: "100+",
    chipLabel: "Organizations served since 2008",
  }),
  sectors: {
    eyebrow: "Sectors we serve",
    title: ["Six sectors.", "One commitment to", "belonging."],
    body: "Every system has its own pressures, language and history. We bring psychologists, educators and researchers who have worked inside these spaces, so the work starts from understanding, not a template.",
    helpLabel: "We help with",
    linkLabel: "Explore this sector",
    items: [
      {
        icon: "sprout",
        tag: "Pre-K to 12",
        name: "K-12 schools & districts",
        body: "Culturally responsive teaching, climate assessments and support for Students of Color and their families.",
        helps: [
          "Educator professional development",
          "School climate and equity audits",
          "Family and community engagement",
        ],
        href: "/who-we-serve/k-12",
        image: IMAGE,
      },
      {
        icon: "award",
        tag: "Higher education",
        name: "Colleges & universities",
        body: "Inclusive pedagogy, faculty development and support for students at predominantly white institutions.",
        helps: [
          "Faculty and staff training",
          "Curriculum review and redesign",
          "Campus climate research",
        ],
        href: "/who-we-serve/higher-education",
        image: IMAGE,
      },
      {
        icon: "cross",
        tag: "Healthcare",
        name: "Hospitals & health systems",
        body: "Health equity and culturally responsive care for clinical teams, residents and patient-facing staff.",
        helps: [
          "Implicit bias and health equity training",
          "Patient experience assessment",
          "Leadership coaching for clinical leads",
        ],
        href: "/who-we-serve/healthcare",
        image: IMAGE,
      },
      {
        icon: "flower",
        tag: "Mental health",
        name: "Behavioral & mental health providers",
        body: "Racial trauma–informed practice and clinical consultation for counselors, therapists and agencies.",
        helps: [
          "Racial trauma-informed care",
          "Clinical supervision and consultation",
          "Wellbeing programs for care teams",
        ],
        href: "/who-we-serve/behavioral-health",
        image: IMAGE,
      },
      {
        icon: "focus",
        tag: "Legal & criminal justice",
        name: "Courts & legal systems",
        body: "Expert consultation, evaluations and training for courts, attorneys and justice-involved programs.",
        helps: [
          "Forensic and psychological evaluation",
          "Training for legal professionals",
          "Program and policy evaluation",
        ],
        href: "/who-we-serve/legal-criminal-justice",
        image: IMAGE,
      },
      {
        icon: "bars",
        tag: "Organizations",
        name: "Workplaces, nonprofits & media",
        body: "Inclusive leadership, team belonging and advisory work for companies, foundations and studios.",
        helps: [
          "Inclusive leadership development",
          "Belonging and culture assessment",
          "Content and narrative consultation",
        ],
        href: "/who-we-serve/organizations",
        image: IMAGE,
      },
    ],
  },
  start: {
    eyebrow: "How we start",
    title: ["Every partnership begins", "with listening."],
    steps: [
      {
        title: "Listen",
        label: "Needs assessment",
        body: "We study your context first: listening sessions, climate surveys and data reviews that show where belonging breaks down.",
      },
      {
        title: "Co-design",
        label: "Facilitated learning",
        body: "Training, coaching and programs built with your people, not delivered at them, for your sector and your goals.",
      },
      {
        title: "Measure",
        label: "Measured impact",
        body: "Clear reporting that shows what changed, for whom, and what to do next, so progress lasts beyond the engagement.",
      },
    ],
    stats: [
      { figure: "2008", label: "Founded in Atlanta, working nationally" },
      { figure: "100+", label: "Organizations served across six sectors" },
      { figure: "35,000+", label: "Professionals trained" },
      { figure: "WOSB", label: "Woman-owned small business certified" },
    ],
  },
  quote: {
    text: "Concrete examples enhanced learning. Very refreshing to learn from a Black woman. You are doing amazing work.",
    author: "Training participant",
  },
};

export type WhoWeServeContent = typeof whoWeServeDefaults;

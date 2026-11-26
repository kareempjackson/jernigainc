import { IMAGE } from "./shared";

export const homeDefaults = {
  seo: {
    title: "Jernigan & Associates",
    description:
      "Psychological and educational consulting since 2008. Research led, culturally embedded work, built with your people.",
  },
  hero: {
    eyebrow: "Psychological & educational consulting since 2008",
    title: ["Welcome to", "a new era of", "belonging"],
    body: "Discover research-led psychological and educational consulting that meets people where they are. We help institutions become places where everyone can grow.",
    primaryLabel: "Explore our work",
    primaryHref: "/work",
    secondaryLabel: "Watch the film",
    secondaryHref: "#film",
    image: IMAGE,
    timeline: [
      { when: "2008", what: "Founded in Atlanta" },
      { when: "2008–2026", what: "Expanded nationally" },
      { when: "Today", what: "Virtual-first, national" },
    ],
    /** Three data chips over the photo: two top left, one on the right. */
    chips: [
      {
        icon: "pin",
        figure: "2008",
        label: "Founded in Atlanta as a small consulting agency",
      },
      { icon: "bars", figure: "100+", label: "Organizations served" },
      { icon: "flower", figure: "35,000+", label: "Professionals trained" },
    ],
  },
  howWeWork: {
    title: "What working with us looks like",
    steps: [
      {
        icon: "focus",
        title: "Needs assessment",
        body: "Listening sessions, climate surveys and data review to see where belonging breaks down.",
      },
      {
        icon: "flower",
        title: "Facilitated learning",
        body: "Workshops and coaching that build skills leaders and staff can use the next day.",
      },
      {
        icon: "bars",
        title: "Measured impact",
        body: "Clear reporting that shows what changed, for whom, and what to do next.",
      },
    ],
    ctaLabel: "Learn more about how we work",
    ctaHref: "/services",
    image: IMAGE,
  },
  film: {
    eyebrow: "In the room",
    title: ["Science, translated", "into everyday practice."],
    body: "Workshops, keynotes and long-term partnerships with schools, health systems, agencies and associations. Press play to see how we show up.",
    filmTitle: "Inside a Jernigan workshop",
    meta: "2:14 · Captions on",
    /** Address of the video file (e.g. an .mp4). Empty until the film exists. */
    videoUrl: "",
    poster: IMAGE,
  },
  whoWeAre: {
    eyebrow: "Who we are",
    title: "Since 2008, turning good intentions into measurable,",
    titleAccent: "lasting change.",
    body: "Founded in 2008 as a small consulting agency working in educational settings, Jernigan & Associates grew with demand from secondary schools and higher education into a women-owned, national practice led by a licensed psychologist and clinician-scientist.",
    ctaLabel: "Our story",
    ctaHref: "/about",
    watchLabel: "Watch · Inside a Jernigan workshop",
    image: IMAGE,
    experienceLabel: "Experience behind every engagement",
    /** `years` sets the bar length, on a scale of 0 to 50. */
    experience: [
      {
        label: "Dr. Jernigan-Noesi’s clinical and research practice",
        figure: "20+ years",
        years: 20,
      },
      {
        label: "Jernigan & Associates, founded 2008",
        figure: "18 years",
        years: 18,
      },
      {
        label: "Collective experience across our consultants",
        figure: "50+ years",
        years: 50,
      },
    ],
    stats: [
      { figure: "100+", label: "organizations served" },
      { figure: "35,000+", label: "professionals trained" },
      { figure: "WOSB", label: "women-owned, certified" },
    ],
    sectorsLabel: "Where we work",
    sectors: [
      {
        icon: "flower",
        name: "Education",
        detail: "Early childhood, K–12 and higher education",
      },
      {
        icon: "cross",
        name: "Behavioral health",
        detail: "Clinics, counseling centers and care teams",
      },
      {
        icon: "pin",
        name: "Healthcare",
        detail: "Health systems, QI and research teams",
      },
      {
        icon: "award",
        name: "Legal & criminal justice",
        detail: "Courts, agencies and advocacy organizations",
      },
      {
        icon: "dot",
        name: "Entertainment",
        detail: "Studios, creative teams and talent",
      },
    ],
  },
  practiceAreas: {
    title: ["Five practice areas,", "Built around your people"],
    quoteLabel: "Partner’s talk",
    quote:
      "Belonging work is personal and systemic. Jernigan helped our staff see both, and change what we do on Monday morning.",
    badge: "35,000+ trained",
    image: IMAGE,
    stats: [
      { icon: "focus", label: "Organizations served", figure: "100+" },
      { icon: "bars", label: "Sectors we serve", figure: "5 sectors" },
    ],
    sectors: [
      "Education",
      "Behavioral Health",
      "Healthcare",
      "Legal & Criminal Justice",
      "Entertainment",
    ],
  },
  founder: {
    eyebrow: "Meet the founder",
    title: ["Dr. Maryam", "Jernigan-Noesi"],
    body: "A licensed psychologist, clinician-scientist and award-winning scholar with more than two decades of experience, Dr. Jernigan-Noesi leads Jernigan & Associates across behavioral health, healthcare, education, legal and criminal justice, and entertainment.",
    ctaLabel: "Read Maryam’s story",
    ctaHref: "/our-team#founder",
    name: "Dr. Maryam M. Jernigan-Noesi",
    tags: ["PhD", "Licensed Psychologist", "Founder"],
    chipFigure: "2008",
    chipLabel: "Founded Jernigan & Associates",
    image: IMAGE,
    steps: [
      {
        title: "Understand",
        body: "We listen first: your context, people and systems.",
      },
      {
        title: "Co-design",
        body: "We build solutions with you, never just for you.",
      },
      {
        title: "Create change",
        body: "We embed practices that outlast our engagement.",
      },
    ],
  },
  impact: {
    eyebrow: "Since 2008",
    slides: [
      {
        figure: "35,000+",
        caption:
          "Professionals trained since 2008, across education, healthcare, behavioral health, legal and entertainment.",
        partner: "Education partners",
        tags: ["K–12", "Higher ed"],
        image: IMAGE,
      },
      {
        figure: "100+",
        caption:
          "Organizations served since 2008, from single schools to national health systems.",
        partner: "Healthcare partners",
        tags: ["Health systems", "Research teams"],
        image: IMAGE,
      },
      {
        figure: "50+ years",
        caption: "Collective experience across our consultants.",
        partner: "Behavioral health partners",
        tags: ["Clinics", "Care teams"],
        image: IMAGE,
      },
    ],
  },
  partnership: {
    eyebrow: "Start the conversation",
    title: ["Partnership Over", "Prescription"],
    cardTitle: "The 4 R’s framework",
    cardBody:
      "Dr. Jernigan-Noesi’s model, published in The Counseling Psychologist.",
    framework: ["Recognition", "Restoration", "Relationships", "Renewal"],
    statement: "We partner. We co‑design. We create change that lasts.",
    ctaLabel: "Get started",
    ctaHref: "/contact",
    image: IMAGE,
  },
  science: {
    title: ["Psychological science,", "put into practice"],
    body: "Science-backed, culturally responsive, and built with your people.",
    ctaLabel: "Book a consultation",
    ctaHref: "/contact",
    statFigure: "100+",
    statLabel: "Organizations served",
    personName: "Dr. Maryam J-N.",
    personRole: "PhD · Licensed Psychologist",
    frameworkLabel: "The 4 R’s framework, in practice",
    avatar: IMAGE,
    reasons: [
      {
        icon: "flower",
        title: "Access to experienced facilitators",
        body: "Workshops and coaching that build skills leaders and staff can use the next day.",
      },
      {
        icon: "cross",
        title: "Focused on your people",
        body: "We listen first, then build solutions with you, never just for you.",
      },
      {
        icon: "award",
        title: "Ongoing support after the work",
        body: "We embed practices that outlast our engagement, with clear reporting on what changed and what to do next.",
      },
    ],
  },
  team: {
    eyebrow: "Practice pioneers",
    title: ["The people", "behind the work"],
    body: "Led by Dr. Jernigan-Noesi and powered by senior consultants, consultants, junior associates and strategic partners, with 50+ years of collective experience.",
    ctaLabel: "Meet the team",
    ctaHref: "/our-team",
    members: [
      {
        name: "Dr. Maryam M. Jernigan-Noesi",
        role: "Founder · Psychologist",
        /** Shown on hover. Leave blank to show nothing. */
        bio: "Licensed psychologist, clinician-scientist and award-winning scholar.",
        linkedin: "",
        href: "/our-team",
        image: IMAGE,
      },
      {
        name: "Team member",
        role: "Senior consultant",
        bio: "",
        linkedin: "",
        href: "/our-team",
        image: IMAGE,
      },
      {
        name: "Team member",
        role: "Research lead",
        bio: "",
        linkedin: "",
        href: "/our-team",
        image: IMAGE,
      },
      {
        name: "Team member",
        role: "Facilitator",
        bio: "",
        linkedin: "",
        href: "/our-team",
        image: IMAGE,
      },
    ],
  },
  insights: {
    eyebrow: "Thoughts oasis",
    title: ["Your first step", "toward belonging"],
    body: "Research-backed articles, practical tools and real stories, written to help your teams grow and lead.",
    topics: [
      {
        topic: "Leadership",
        blurb: "Expert insights on equity, wellbeing and modern leadership.",
        href: "/insights/leadership",
        image: IMAGE,
      },
      {
        topic: "Education",
        blurb: "Professional development that changes classrooms.",
        href: "/insights/education",
        image: IMAGE,
      },
      {
        topic: "Mental health",
        blurb: "Culturally responsive care for clinicians.",
        href: "/insights/mental-health",
        image: IMAGE,
      },
      {
        topic: "Belonging",
        blurb: "Supporting students to feel seen and heard.",
        href: "/insights/belonging",
        image: IMAGE,
      },
    ],
  },
  testimonials: {
    eyebrow: "Trusted by 100+ organizations since 2008",
    title: "Client testimonials",
    items: [
      {
        quote:
          "The most practical equity work our staff has done. People still quote it.",
        source: "Principal, K–12 partner district",
        avatar: IMAGE,
      },
      {
        quote: "They brought data and humanity into the same room.",
        source: "Nursing leader, health system partner",
        avatar: IMAGE,
      },
      {
        quote: "Our students noticed the change before we told them.",
        source: "Dean of Students, university partner",
        avatar: IMAGE,
      },
      {
        quote: "Clear, kind and rigorous. We extended to year two.",
        source: "Program director, agency partner",
        avatar: IMAGE,
      },
    ],
  },
};

export type HomeContent = typeof homeDefaults;

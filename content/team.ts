import { hero, IMAGE } from "./shared";

export const teamDefaults = {
  seo: {
    title: "Our team · Jernigan & Associates",
    description:
      "Jernigan & Associates is led by Dr. Maryam M. Jernigan-Noesi and powered by a multidisciplinary team of senior consultants, consultants, junior associates, and strategic partners.",
  },
  hero: hero({
    eyebrow: "Our Team",
    title: ["The people behind", "the work."],
    body: "Jernigan & Associates is led by Dr. Maryam M. Jernigan-Noesi and powered by a multidisciplinary team of senior consultants, consultants, junior associates, and strategic partners, matched by scope to each engagement.",
    secondaryLabel: "Meet the founder",
    secondaryHref: "#founder",
    chipFigure: "50+ years",
    chipLabel: "Collective experience across our consultants",
  }),
  founder: {
    eyebrow: "Founder and CEO",
    title: ["Dr. Maryam M.", "Jernigan-Noesi"],
    name: "Dr. Maryam M. Jernigan-Noesi",
    tags: ["PhD", "Licensed Psychologist", "Founder and CEO"],
    awardFigure: "2024",
    awardLabel: "Dr. Janet E. Helms Racial Justice Award, APA Div. 17",
    bio: "Dr. Maryam M. Jernigan-Noesi is the Founder and CEO of Jernigan & Associates. A licensed psychologist, clinician-scientist, and award-winning scholar with more than two decades of experience, she sets the firm’s strategic vision and provides content expertise across behavioral health, healthcare, education, legal and criminal justice, and entertainment.",
    bioSecondary:
      "As Director of the Intersections Research Lab, she investigates racial health disparities, culturally responsive assessment and treatment, and racism-related stress and trauma across the lifespan, work recognized by the Ford and Mellon Foundations and the American Psychological Association. She advises Sesame Street’s racial justice initiative and co-founded the nonprofit Psychologists for Racial Justice.",
    stats: [
      { figure: "22+", label: "Years of leadership" },
      { figure: "30+", label: "Peer-reviewed publications" },
      { figure: "100+", label: "National and international presentations" },
    ],
    credentials: [
      "PhD, Counseling Psychology, Boston College · MEd, Vanderbilt University · BA, Fisk University",
      "Clinical training, Center for Multicultural Training in Psychology (Boston Medical Center and BU School of Medicine)",
      "Fellowships at Harvard Medical School and Yale University School of Medicine",
      "Honorary Doctorate of Humane Letters, Palo Alto University",
    ],
    ctaLabel: "Book a consultation",
    ctaHref: "/contact",
    image: IMAGE,
  },
  consultants: {
    eyebrow: "Consulting team",
    title: ["Senior consultants", "and consultants"],
    body: "Multidisciplinary experts matched by scope to each engagement, across psychology, education and organizational development.",
    people: [
      {
        name: "Dr. Carlton E. Green",
        role: "Senior Consultant",
        bio: "Focuses on diversity, social justice, and psychological health, and consults on racial trauma and equity strategy for educational and corporate clients.",
        image: IMAGE,
      },
      {
        name: "Dr. Shelby Ortega",
        role: "Senior Consultant",
        bio: "Specializes in multicultural mental health, identity development, and emotional skillfulness, leading training and workshops across projects.",
        image: IMAGE,
      },
      {
        name: "Dr. Kevin Henze",
        role: "Consultant",
        bio: "Specializes in psychiatric rehabilitation and culturally responsive clinical practice, supporting healthcare-system and clinical-intervention projects.",
        image: IMAGE,
      },
      {
        name: "Dr. Leyla Perez-Gualdron",
        role: "Consultant",
        bio: "Expertise in clinical psychology and research with a focus on community engagement and anti-racism, leading research consultation and program development.",
        image: IMAGE,
      },
    ],
  },
  support: {
    juniorTitle: "Junior Associates",
    juniorBody:
      "Advanced graduate students in psychology, the social sciences, and organizational fields who support consulting engagements, research, and educational programs under the guidance of senior consultants, gaining applied experience across the sectors we serve.",
    opsTitle: ["Operations and", "back office"],
    backOffice: [
      { name: "DiaGurl", role: "Chief Operating Officer" },
      { name: "VaVa Virtual", role: "Executive assistance" },
      { name: "Mercer Oak Law Firm", role: "Legal" },
      {
        name: "Hudson Accounting Solutions",
        role: "CFO, accounting, and bookkeeping",
      },
    ],
  },
  partners: {
    eyebrow: "Strategic partnerships",
    title: ["Partners who extend", "the work"],
    items: [
      {
        icon: "flower",
        name: "The Healing Space at UC Santa Barbara",
        body: "Culturally responsive training and program development that address racial trauma and support Black community mental health.",
      },
      {
        icon: "sprout",
        name: "William James College",
        body: "Co-development of the Leadership Development Institute Fellowship and Certificate in Leadership in Community Behavioral Health.",
      },
      {
        icon: "focus",
        name: "IC-RACE Lab",
        body: "With Drs. Hector Adames and Nayeli Chavez-Dueñas: joint scholarship and public toolkits on racial trauma and resilience.",
      },
      {
        icon: "bars",
        name: "Steady Consulting LLC",
        body: "Culturally responsive substance-use and mental-health program design, training, and evaluation.",
      },
    ],
  },
};

export type TeamContent = typeof teamDefaults;

import { hero, IMAGE } from "./shared";

export const psychologistDefaults = {
  seo: {
    title: "Licensed Psychologist · Jernigan & Associates",
    description:
      "Culturally responsive psychological care with Dr. Maryam M. Jernigan-Noesi: an affirming, trauma-informed space where the whole of who you are is welcome.",
  },
  hero: hero({
    eyebrow: "Clinical Practice",
    title: [
      "Culturally responsive",
      "psychological care with",
      "Dr. Maryam M.",
      "Jernigan-Noesi",
    ],
    body: "Our emotional health is inseparable from our histories, families, cultures, and lived experiences. Dr. Jernigan-Noesi offers an affirming, trauma-informed, and culturally responsive space where the whole of who you are is welcome.",
    primaryLabel: "Inquire about availability",
    secondaryLabel: "How therapy works",
    secondaryHref: "#how-therapy-works",
    chipFigure: "Nearly 20 yrs",
    chipLabel: "Providing mental health care",
    bottomChipFigure: "",
    bottomChipLabel: "",
  }),
  practice: {
    eyebrow: "About the practice",
    titleDark: "Care that fits",
    titleBlue: "your whole life.",
    body: "Dr. Maryam M. Jernigan-Noesi is a licensed psychologist with nearly two decades of experience providing mental health care across private practice, hospital, outpatient, community, and academic settings. As a clinician-scientist, she has provided individual, couple, and family psychotherapy to adolescents, adults, and couples.",
    settings: [
      "Private practice",
      "Hospital",
      "Outpatient",
      "Community",
      "Academic",
    ],
    concernsLabel: "Concerns she works with",
    concerns: [
      "Mood and anxiety",
      "Trauma and racism-related stress",
      "Grief and loss",
      "Eating and weight",
      "Relationships and family dynamics",
      "Career and life transitions",
      "Women’s health",
    ],
  },
  approaches: {
    eyebrow: "How therapy works",
    title: ["Goals set together,", "at your pace"],
    body: "Dr. Jernigan-Noesi works collaboratively with each client to set goals that fit their life, drawing on four complementary approaches.",
    items: [
      "Relational-cultural",
      "Family-systems",
      "Psychodynamic",
      "Cognitive-behavioral",
    ],
  },
  welcome: {
    eyebrow: "Begin the conversation",
    title: ["A space where the", "whole of you is welcome."],
    body: "Reach out to ask about current availability, fit, and next steps. Every inquiry is handled with care and confidentiality.",
    ctaLabel: "Inquire about availability",
    ctaHref: "/contact",
    image: IMAGE,
  },
};

export type PsychologistContent = typeof psychologistDefaults;

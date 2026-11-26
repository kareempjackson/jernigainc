import { IMAGE } from "./shared";

/** Site-wide content: announcement bar, navigation, footer, closing band. */
export const siteDefaults = {
  announcement: {
    show: true,
    text: "The Jernigan Digest, Issue 14: psychological & educational research, in your inbox.",
    cta: "Subscribe",
    href: "/digest",
  },
  /**
   * The menu. Each item can carry a short label and a list of sub-links that
   * show beside it. The item that links to /services lists the practice areas
   * automatically, so its own sub-links are ignored.
   */
  nav: [
    { label: "Who we serve", href: "/who-we-serve", eyebrow: "", children: [] },
    {
      label: "Services",
      href: "/services",
      eyebrow: "Six practice areas",
      children: [],
    },
    {
      label: "About",
      href: "/about",
      eyebrow: "About the firm",
      children: [
        {
          label: "About us",
          description: "Our story, approach and values",
          href: "/about",
        },
        {
          label: "Licensed psychologist",
          description: "Clinical practice with Dr. Jernigan-Noesi",
          href: "/about/licensed-psychologist",
        },
      ],
    },
    { label: "Our team", href: "/our-team", eyebrow: "", children: [] },
    { label: "Capabilities", href: "/capabilities", eyebrow: "", children: [] },
    { label: "Insights", href: "/insights", eyebrow: "", children: [] },
    { label: "Contact", href: "/contact", eyebrow: "", children: [] },
  ],
  /** The card on the right of the open menu. */
  menu: {
    ctaLabel: "Book a consultation",
    ctaHref: "/contact",
    promoTag: "The Jernigan Digest · Issue 14",
    promoTitle: "Psychological and educational research, in your inbox.",
    promoCta: "Subscribe",
    promoHref: "/digest",
    promoImage: IMAGE,
  },
  footer: {
    explore: [
      { label: "About", href: "/about" },
      { label: "What we do", href: "/services" },
      { label: "Our team", href: "/our-team" },
      { label: "Insights", href: "/insights" },
    ],
    contact: [
      { icon: "phone", label: "404-410-6674", href: "tel:+14044106674" },
      {
        icon: "mail",
        label: "admin@mmjerniganassociates.com",
        href: "mailto:admin@mmjerniganassociates.com",
      },
      { icon: "pin", label: "Atlanta, GA · Virtual-first", href: "" },
    ],
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "X", href: "#" },
    ],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
    ],
    copyright:
      "© 2026 Jernigan & Associates Psychological and Educational Consulting, Inc.",
  },
  /** The tan band that closes most pages. */
  cta: {
    title: "Ready to build something that lasts?",
    body: "Tell us what your organization is working toward, and we will help you get there.",
    cta: "Book a consultation",
    href: "/contact",
  },
};

export type SiteContent = typeof siteDefaults;

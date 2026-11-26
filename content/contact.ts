export const contactDefaults = {
  seo: {
    title: "Contact · Jernigan & Associates",
    description:
      "Book a consultation. Tell us what your organization is working toward.",
  },
  eyebrow: "Book a consultation",
  title: "Let’s talk about what your organization is working toward.",
  details: [
    {
      icon: "pin",
      label: "Location",
      value: "Atlanta, GA. Virtual-first, serving clients nationally.",
      href: "",
    },
    {
      icon: "phone",
      label: "Phone",
      value: "404-410-6674",
      href: "tel:+14044106674",
    },
    {
      icon: "mail",
      label: "Email",
      value: "admin@mmjerniganassociates.com",
      href: "mailto:admin@mmjerniganassociates.com",
    },
    {
      icon: "globe",
      label: "Website",
      value: "mmjerniganassociates.com",
      href: "https://mmjerniganassociates.com",
    },
  ],
  form: {
    /** Where inquiries are addressed. */
    inbox: "admin@mmjerniganassociates.com",
    sectors: [
      "Education",
      "Behavioral health",
      "Healthcare",
      "Legal & criminal justice",
      "Entertainment",
      "Other",
    ],
  },
  next: {
    eyebrow: "What happens next",
    title: ["From first call", "to a plan that fits"],
    steps: [
      {
        title: "We listen",
        body: "A conversation about your context, your people and what you are working toward.",
      },
      {
        title: "We co-design",
        body: "A proposal shaped with you, grounded in evidence and scoped to your goals.",
      },
      {
        title: "We measure",
        body: "Clear reporting that shows what changed, for whom, and what to do next.",
      },
    ],
  },
};

export type ContactContent = typeof contactDefaults;

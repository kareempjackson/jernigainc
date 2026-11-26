import { IMAGE } from "./shared";

export const capabilitiesDefaults = {
  seo: {
    title: "Capabilities · Jernigan & Associates",
    description:
      "Corporate data, registrations and capabilities statement for Jernigan and Associates, an SBA-certified WOSB applying psychological and educational science to organizational practice.",
  },
  hero: {
    disciplines: ["Training", "Consultation", "Program evaluation"],
    title: ["Psychological science,", "Applied to", "Organizational Practice"],
    body: "Jernigan and Associates is a Georgia consultancy applying psychological and educational science to organizational practice for federal agencies, health care systems, educational institutions, and corporations.",
    bodySecondary:
      "Services span consultation, assessment, program development and evaluation, strategic planning, professional development, curriculum design, applied research, and clinical consultation and supervision.",
    downloadLabel: "Download capabilities statement",
    downloadHref: "/capabilities-statement.pdf",
    contactLabel: "Contact our POC",
    contactHref: "#contact",
    audiencesLabel: "Who we serve",
    audiences: [
      "Federal agencies",
      "Health care systems",
      "Educational institutions",
      "Corporations",
    ],
    dataTitle: "Corporate data",
    dataSubtitle: "Registered and ready to contract",
    corporateData: [
      { label: "UEI", value: "RJV7R1V5MP14" },
      { label: "CAGE", value: "8T0G5" },
      { label: "Status", value: "SAM registration active" },
      { label: "Designation", value: "SBA-certified WOSB" },
      { label: "Primary NAICS", value: "541611" },
      { label: "Primary PSC", value: "U008" },
    ],
  },
  competencies: {
    eyebrow: "Core competencies",
    title: ["Nine Ways We Support", "Your Mission"],
    body: "Evidence-based, person-centered work across health, educational, community and organizational settings.",
    items: [
      { icon: "sprout", title: "Professional development training" },
      { icon: "blocks", title: "Curriculum development" },
      { icon: "flower", title: "Evidence-based, person-centered training" },
      { icon: "chat", title: "Consultation & technical assistance" },
      { icon: "bars", title: "Program development & evaluation" },
      { icon: "search", title: "Organizational assessment" },
      { icon: "flower", title: "Clinical mental & behavioral health" },
      { icon: "focus", title: "Strategic planning" },
      { icon: "mic", title: "Applied research" },
    ],
  },
  differentiators: {
    eyebrow: "Differentiators",
    title: ["Why Agencies", "Choose Jernigan"],
    name: "Dr. Maryam M. Jernigan-Noesi",
    role: "Principal · Point of contact",
    image: IMAGE,
    items: [
      {
        title: "Federal past performance",
        body: "Two Bureau of Prisons delivery orders totaling $616,000 under a competitively awarded small business set-aside.",
      },
      {
        title: "Doctoral-level team",
        body: "Licensed psychologist and former tenure-track faculty member supported by doctoral-level associates and subject matter experts.",
      },
      {
        title: "Research-based expertise",
        body: "Peer-reviewed scholarship addressing trauma, identity development, population health, and organizational culture.",
      },
      {
        title: "Integrated practice",
        body: "Health service provider and clinical research scientist combined with organizational consulting.",
      },
      {
        title: "Graduate program development",
        body: "Principal assisted in developing three inaugural Clinical Mental Health programs.",
      },
    ],
  },
  pastPerformance: {
    eyebrow: "Past performance",
    total: "$616,000",
    body: "in federal delivery orders from the Federal Bureau of Prisons, competitively awarded under a small business set-aside.",
    ctaLabel: "Talk to us about your agency",
    ctaHref: "/contact",
    orders: [
      {
        agency: "Federal Bureau of Prisons",
        period: "2021–2022",
        amount: "$308,000",
        summary:
          "Cultural competence training and consulting for psychology services staff.",
        order: "15BNAS21FW4H10080",
      },
      {
        agency: "Federal Bureau of Prisons",
        period: "FY2023",
        amount: "$308,000",
        summary:
          "Second delivery order for cultural competence training and consulting.",
        order: "15BNAS22F00000468",
      },
    ],
  },
  contracting: {
    eyebrow: "Contracting details",
    title: ["Codes, Data", "And Contact"],
    codes: [
      {
        name: "NAICS",
        primary: "541611",
        secondary: ["611710", "621330", "541618", "541690", "611430"],
      },
      {
        name: "PSC",
        primary: "U008",
        secondary: ["B542", "AF32", "R410", "R406", "R405", "AF22"],
      },
    ],
    contactTitle: "Contact",
    legalName:
      "Jernigan and Associates Psychological and Educational Consulting, Inc.",
    pointOfContact: "Dr. Maryam M. Jernigan-Noesi, Principal",
    email: "drmaryam@mmjerniganassociates.com",
    addressLines: ["1655 Mount McKinley Drive", "Grayson, GA 30017-2980"],
    website: "www.mmjerniganassociates.com",
    ctaLabel: "Email the POC",
  },
};

export type CapabilitiesContent = typeof capabilitiesDefaults;

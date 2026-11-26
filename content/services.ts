import type { HeroContent, Seo } from "./shared";

/** One practice area: its card, and its page at /services/<slug>. */
export type ServiceContent = {
  slug: string;
  name: string;
  /** Position in menus and card rows. */
  order: number;
  /** Short description on the "Explore other practice areas" cards. */
  cardBody: string;
  /** One line under the name in the menu. */
  menuBody: string;
  /** Shown beside the list in the Services dropdown. */
  preview: { title: string; body: string; tags: string[] };
  icon: string;
  seo: Seo;
  hero: HeroContent;
  offerings: {
    eyebrow: string;
    titleDark: string;
    titleBlue: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
    items: string[];
  };
  caseStudy: {
    title: string;
    context: string;
    role: string;
    outcomes: string[];
    image: string | null;
  };
  quote: { text: string; author: string };
};

export const serviceDefaults: ServiceContent[] = [
  {
    slug: "education",
    menuBody: "Pre-K through higher education",
    preview: {
      title: "Inclusive, equitable learning, Pre-K through higher education.",
      body: "Faculty development, curriculum redesign and support for Students of Color, grounded in psychology and pedagogy.",
      tags: ["Educator PD", "Curriculum review", "Climate research"],
    },
    name: "Education",
    order: 1,
    cardBody:
      "Inclusive, culturally responsive learning environments, Pre-K through higher education.",
    icon: "sprout",
    seo: {
      title: "Education · Jernigan & Associates",
      description:
        "We help educational institutions create inclusive, equitable learning environments, Pre-K through higher education, where every student can thrive academically, socially, and emotionally.",
    },
    hero: {
      eyebrow: "Educational Excellence and Inclusive Pedagogy",
      title: [
        "Inclusive, equitable",
        "learning environments,",
        "Pre-K through higher",
        "education.",
      ],
      body: "We help educational institutions create learning environments where every student, and especially Students of Color and students from marginalized communities, can thrive academically, socially, and emotionally. Our consultants bring backgrounds in psychology and behavioral health, education, public health, medicine, and organizational leadership.",
      primaryLabel: "Book a consultation",
      primaryHref: "/contact",
      secondaryLabel: "Read the case scenario",
      secondaryHref: "#case",
      chipFigure: "Pre-K to 16",
      chipLabel: "Every stage of the learning journey",
      bottomChipFigure: "35,000+",
      bottomChipLabel: "Professionals trained",
      image: null,
    },
    offerings: {
      eyebrow: "How we partner",
      titleDark: "Built with the people",
      titleBlue: "closer to the work.",
      body: "Every engagement is customized. We start by understanding your context, then co-design solutions grounded in evidence and tailored to your goals.",
      ctaLabel: "Book a consultation",
      ctaHref: "/contact",
      items: [
        "Faculty development on culturally responsive, racially conscious, and inclusive pedagogy.",
        "Curriculum review and redesign that centers diverse perspectives and histories.",
        "Assessment of student experiences and institutional climate related to race and identity.",
        "Support programs for Students of Color at predominantly white institutions.",
        "Leadership coaching for academic administrators on equity-centered decision-making.",
      ],
    },
    caseStudy: {
      title: "Public School District",
      context:
        "A suburban district with growing racial and ethnic diversity faced persistent opportunity gaps and climate concerns raised by families of Color. Teachers felt unprepared to address racism or support students experiencing racial trauma, and past diversity trainings had produced little change in the classroom.",
      role: "Over a multi-year engagement, we delivered professional development for educators, school-based clinicians, and district leadership; built online modules on racial trauma and inclusive pedagogy; coached principals and administrators; consulted on culturally responsive curriculum; and facilitated listening sessions with students and families of Color.",
      outcomes: [
        "District-wide online training accessible to all staff",
        "Greater educator knowledge and confidence in supporting Students of Color",
        "New culturally responsive curriculum selections and instructional practices",
        "Ongoing structures for student and family input into district decisions",
        "Improved school climate as reported by students and families of Color",
      ],
      image: null,
    },
    quote: {
      text: "Concrete examples enhanced learning. Very refreshing to learn from a Black woman. You are doing amazing work.",
      author: "Training participant",
    },
  },
  {
    slug: "mental-health",
    menuBody: "Racial trauma and clinical consultation",
    preview: {
      title: "Quality mental health care is culturally responsive care.",
      body: "Organizational assessment, racial trauma treatment protocols and role-specific training for clinical teams.",
      tags: ["Racial trauma", "Clinical supervision", "Staff training"],
    },
    name: "Mental Health",
    order: 2,
    cardBody:
      "Racial trauma, culturally responsive clinical practice, and provider training.",
    icon: "flower",
    seo: {
      title: "Mental Health · Jernigan & Associates",
      description:
        "We help mental and behavioral health organizations strengthen the care they deliver, and train clinicians, educators, and leaders to recognize and respond to race-related stress and trauma.",
    },
    hero: {
      eyebrow: "Mental Health and Racial Trauma",
      title: [
        "Quality mental",
        "health care is",
        "culturally responsive",
        "care.",
      ],
      body: "We help mental and behavioral health organizations strengthen the care they deliver and better meet the needs of the clients and communities they serve. We also train clinicians, educators, and leaders to recognize and respond to race-related stress and trauma, treating discrimination as a social determinant of mental health.",
      primaryLabel: "Book a consultation",
      primaryHref: "/contact",
      secondaryLabel: "Read the case scenario",
      secondaryHref: "#case",
      chipFigure: "Every role",
      chipLabel: "Frontline, clinical and management training",
      bottomChipFigure: "35,000+",
      bottomChipLabel: "Professionals trained",
      image: null,
    },
    offerings: {
      eyebrow: "How we partner",
      titleDark: "Built with the people",
      titleBlue: "closer to the work.",
      body: "Every engagement is customized. We start by understanding your context, then co-design solutions grounded in evidence and tailored to your goals.",
      ctaLabel: "Book a consultation",
      ctaHref: "/contact",
      items: [
        "Organizational assessment, including mixed-methods employee assessment, policy review, and operational audit.",
        "Clinical assessment and treatment of racial trauma, and culturally responsive treatment protocols.",
        "Racially conscious and culturally responsive supervision and management.",
        "Role-specific training across frontline staff, clinical staff, and managers.",
        "Consultation with quality-improvement and research teams to improve client experience and outcomes.",
      ],
    },
    caseStudy: {
      title: "Community-Based Mental Health Agency",
      context:
        "A large community-based mental health agency wanted to strengthen its services and better meet client needs. Leadership sought an objective, organization-wide picture of how to support staff and operations in order to improve care.",
      role: "We conducted an organizational audit that combined a mixed-methods employee assessment (surveys and focus groups), a policy review, and an operational audit, then designed and delivered training and professional development across staff positions, including frontline staff, clinical staff, and managers. We partnered closely with the agency’s quality-improvement and research staff throughout.",
      outcomes: [
        "Customized training tailored to each staff role, from frontline to clinical to management",
        "An organizational assessment that informed efforts to improve staff experiences and increase retention",
        "Ongoing consultation with quality-improvement and research staff",
        "Customized recommendations to improve the client and patient experience and outcomes",
      ],
      image: null,
    },
    quote: {
      text: "This was an excellent presentation, dense with material that is both crucial and foundational to clinical practice. I had never seen this developmental model integrated with such specific assessment questions and conceptualizations.",
      author: "Mental health professional, training participant",
    },
  },
  {
    slug: "healthcare",
    menuBody: "Health equity for clinical teams",
    preview: {
      title: "Culturally responsive care improves outcomes and lowers risk.",
      body: "Health equity planning, disparities assessment and training for providers, from bedside to boardroom.",
      tags: ["Health equity", "Bias training", "Care pathways"],
    },
    name: "Healthcare",
    order: 3,
    cardBody:
      "Health equity, culturally responsive care, and stronger patient-provider communication.",
    icon: "cross",
    seo: {
      title: "Healthcare · Jernigan & Associates",
      description:
        "We help healthcare organizations close racial and ethnic disparities in care delivery, patient outcomes, and workforce composition through culturally responsive care.",
    },
    hero: {
      eyebrow: "Healthcare Equity and Culturally Responsive Treatment",
      title: [
        "Culturally responsive",
        "care improves",
        "outcomes and lowers",
        "risk.",
      ],
      body: "We help healthcare organizations close racial and ethnic disparities in care delivery, patient outcomes, and workforce composition, addressing barriers from individual provider-patient interactions to institutional policies and community engagement. Culturally responsive care is linked to better access, engagement, adherence, and quality, and to lower medical error, malpractice risk, and cost.",
      primaryLabel: "Book a consultation",
      primaryHref: "/contact",
      secondaryLabel: "Read the case scenario",
      secondaryHref: "#case",
      chipFigure: "Systems",
      chipLabel: "From bedside to boardroom",
      bottomChipFigure: "35,000+",
      bottomChipLabel: "Professionals trained",
      image: null,
    },
    offerings: {
      eyebrow: "How we partner",
      titleDark: "Built with the people",
      titleBlue: "closer to the work.",
      body: "Every engagement is customized. We start by understanding your context, then co-design solutions grounded in evidence and tailored to your goals.",
      ctaLabel: "Book a consultation",
      ctaHref: "/contact",
      items: [
        "Health equity strategic planning and implementation roadmaps.",
        "Assessment of disparities in patient outcomes and care access.",
        "Training on bias, cultural humility, and patient-centered communication.",
        "Culturally responsive treatment protocols and care pathways.",
        "Community health program design grounded in equity-centered frameworks.",
      ],
    },
    caseStudy: {
      title: "Regional Hospital System",
      context:
        "A regional hospital system documented significant disparities in patient outcomes across service lines and recognized health equity as both a moral imperative and a strategic priority, but lacked a systems-level framework to act on it.",
      role: "Across a three-year engagement, we served as strategic advisors: assessing disparities data, workforce demographics, policies, and frontline experiences; facilitating a system-wide health equity strategic plan with leadership, providers, and community partners; and supporting bias and culturally responsive care training, tailored patient materials and care pathways, and a health equity dashboard.",
      outcomes: [
        "System-wide health equity strategic plan with measurable goals",
        "Equity-focused quality-improvement initiatives across departments",
        "Culturally responsive care pathways and patient communication materials",
        "Health equity metrics and a dashboard integrated into reporting",
        "Documented disparity reductions in targeted clinical areas, and state-level Health Equity Certification",
      ],
      image: null,
    },
    quote: {
      text: "I will use this information when teaching and with my patients regardless of their ethnicity. I found it highly valuable, and Dr. Maryam’s knowledge and presentation were outstanding.",
      author: "Medical professional",
    },
  },
  {
    slug: "research-and-evaluation",
    menuBody: "Mixed-methods research and assessment",
    preview: {
      title: "Evidence that reveals both the problem and the path forward.",
      body: "Climate assessments, program evaluation and research coaching, grounded in the Intersections Research Lab.",
      tags: ["Assessment", "Program evaluation", "Mixed methods"],
    },
    name: "Research and Evaluation",
    order: 4,
    cardBody: "Assessment, mixed-methods research, and program evaluation.",
    icon: "focus",
    seo: {
      title: "Research and Evaluation · Jernigan & Associates",
      description:
        "We help organizations and researchers design and conduct rigorous, equity-centered research and evaluation, from organizational assessment to program evaluation.",
    },
    hero: {
      eyebrow: "Research, Assessment, and Evaluation",
      title: [
        "Evidence that reveals",
        "both the problem",
        "and the path forward.",
      ],
      body: "We help organizations and researchers design and conduct rigorous, equity-centered research and evaluation, from organizational assessment to program evaluation, all grounded in the Intersections Research Lab and community-based participatory principles.",
      primaryLabel: "Book a consultation",
      primaryHref: "/contact",
      secondaryLabel: "Read the case scenario",
      secondaryHref: "#case",
      chipFigure: "Mixed methods",
      chipLabel: "Surveys, focus groups and document review",
      bottomChipFigure: "35,000+",
      bottomChipLabel: "Professionals trained",
      image: null,
    },
    offerings: {
      eyebrow: "How we partner",
      titleDark: "Built with the people",
      titleBlue: "closer to the work.",
      body: "Every engagement is customized. We start by understanding your context, then co-design solutions grounded in evidence and tailored to your goals.",
      ctaLabel: "Book a consultation",
      ctaHref: "/contact",
      items: [
        "Organizational and climate assessments using surveys, focus groups, and document review.",
        "Program evaluation and continuous quality improvement, including pre and post and behavior-change measures.",
        "Research methodology training and anti-racism research coaching.",
        "Translation of findings into clear, board-ready recommendations.",
      ],
    },
    caseStudy: {
      title: "National Professional Association",
      context:
        "A national mental-health professional association had adopted equity statements but had not embedded them in governance, research priorities, or member engagement, and needed both vision and concrete action planning.",
      role: "Partnering with multiple divisions over several years, we provided strategic planning to embed equity across functions; assessed and advised the Science Directorate on integrating race and racism into research priorities and funding; facilitated a multi-day research-to-practice summit; developed member training curricula; and coached senior leaders through change.",
      outcomes: [
        "Racial equity goals integrated into strategic planning across directorates",
        "A research agenda and funding priorities centered on race and racism",
        "Training resources disseminated to thousands of members",
        "Greater organizational accountability for equity commitments",
        "Increased representation of scholars and practitioners of Color in leadership",
      ],
      image: null,
    },
    quote: {
      text: "Your integration of context, culture, and social factors in both clinical and academic settings resonates strongly with my own interests in collective healing.",
      author: "Former clinical intern",
    },
  },
  {
    slug: "leadership-development",
    menuBody: "Coaching and inclusive leadership",
    preview: {
      title: "Inclusive leadership and people management that sustain change.",
      body: "Executive coaching, culture assessment and accountability structures for leaders, managers and teams.",
      tags: ["Executive coaching", "Culture assessment", "Accountability"],
    },
    name: "Leadership Development",
    order: 5,
    cardBody:
      "Executive coaching, inclusive leadership, people management, and organizational change.",
    icon: "bars",
    seo: {
      title: "Leadership Development · Jernigan & Associates",
      description:
        "We work with leaders, managers, and teams to build cultures of belonging, grow inclusive leadership and people-management capacity, and create accountability structures that sustain equity work.",
    },
    hero: {
      eyebrow: "Leadership, People Management, and Organizational Culture",
      title: [
        "Inclusive leadership",
        "and people",
        "management that",
        "sustain change.",
      ],
      body: "We work with leaders, managers, and teams to build cultures of belonging, grow inclusive leadership and people-management capacity, and create accountability structures that sustain equity work over time. With William James College, we also help build a more diverse leadership pipeline.",
      primaryLabel: "Book a consultation",
      primaryHref: "/contact",
      secondaryLabel: "Read the case scenario",
      secondaryHref: "#case",
      chipFigure: "Pipeline",
      chipLabel: "Leadership Development Institute Fellowship",
      bottomChipFigure: "35,000+",
      bottomChipLabel: "Professionals trained",
      image: null,
    },
    offerings: {
      eyebrow: "How we partner",
      titleDark: "Built with the people",
      titleBlue: "closer to the work.",
      body: "Every engagement is customized. We start by understanding your context, then co-design solutions grounded in evidence and tailored to your goals.",
      ctaLabel: "Book a consultation",
      ctaHref: "/contact",
      items: [
        "Executive and management coaching for leaders navigating change and equity challenges.",
        "People-management practices, including inclusive hiring, supervision, performance, and retention.",
        "Organizational culture assessments examining inclusion, belonging, and psychological safety.",
        "Leadership development programs centered on inclusive, anti-oppression leadership.",
        "Facilitation of difficult conversations and conflict resolution across differences.",
        "Accountability mechanisms and metrics for equity goals.",
      ],
    },
    caseStudy: {
      title: "State Youth Services Department",
      context:
        "A state department of youth services set out to reduce racial disparities in detention and embed trauma-informed, healing-centered practice across facilities, but staff lacked training and the culture reflected punitive rather than restorative values.",
      role: "Over a multi-year engagement, we led racial-equity strategy and trauma-informed systems transformation: assessing disparities across detention, programming, and discipline; delivering a statewide training program for all staff; coaching trauma resource specialists; embedding equity metrics and accountability into operations; and facilitating learning communities to sustain change.",
      outcomes: [
        "Trauma-informed practices implemented across all facilities statewide",
        "Racial equity metrics and accountability structures at the departmental level",
        "Documented shifts toward healing-centered staff practices",
        "Sustainable internal training capacity",
        "Data systems to monitor and address ongoing disparities",
      ],
      image: null,
    },
    quote: {
      text: "Dr. Jernigan-Noesi’s presentation was dynamic, powerful, and engaging, with data that was relevant and applicable. I came away feeling inspired, more knowledgeable, and more confident.",
      author: "Organizational leader",
    },
  },
  {
    slug: "curriculum-and-training",
    menuBody: "Content design and workshops",
    preview: {
      title:
        "Curricula and trainings that change practice, not just knowledge.",
      body: "Custom curricula and six signature trainings, delivered in person, virtually and in LMS-ready formats.",
      tags: ["Curriculum design", "Workshops", "Certificate programs"],
    },
    name: "Curriculum and Training",
    order: 6,
    cardBody:
      "Curriculum and content design plus workshops and certificate programs.",
    icon: "blocks",
    seo: {
      title: "Curriculum and Training · Jernigan & Associates",
      description:
        "Curricula and trainings that change practice, not just knowledge. We have trained 35,000+ professionals and built curricula for graduate programs, agencies, and national associations.",
    },
    hero: {
      eyebrow: "Curriculum Development and Training",
      title: [
        "Curricula and",
        "trainings that change",
        "practice, not just",
        "knowledge.",
      ],
      body: "Designing and delivering learning is at the heart of our work. We have trained 35,000+ professionals and built curricula for graduate programs, agencies, and national associations. Content, deliverables, and timelines are co-created with every client.",
      primaryLabel: "Request the training catalog",
      primaryHref: "/contact",
      secondaryLabel: "Read the case scenario",
      secondaryHref: "#case",
      chipFigure: "4 tiers",
      chipLabel: "All-staff, direct-service, supervisory, leadership",
      bottomChipFigure: "35,000+",
      bottomChipLabel: "Professionals trained",
      image: null,
    },
    offerings: {
      eyebrow: "Signature offerings",
      titleDark: "Six signature trainings,",
      titleBlue: "built to scale.",
      body: "Delivered in person, virtually, and in asynchronous, LMS-ready formats, each with pre and post knowledge checks and follow-up to support behavior change. The full menu lives in our 2026 Training Catalog.",
      ctaLabel: "Request the training catalog",
      ctaHref: "/contact",
      items: [
        "Foundational Training in Racism-Related Stress and Trauma Across the Lifespan.",
        "Trauma-Informed Mental Health Care.",
        "Racially Conscious and Culturally Responsive Supervision and Management.",
        "Building Inclusive Educational Experiences.",
        "Culturally Responsive Leadership Development.",
        "Inclusive Health Equity Praxis.",
      ],
    },
    caseStudy: {
      title: "National Mental Health Association",
      context:
        "A national mental health professional association sought to strengthen the leadership and mentoring pipeline for early-career psychologists, including fellows from communities historically underrepresented in the field. Existing mentoring resources did not consistently reflect the identities, lived experiences, and developmental needs of diverse mentors and mentees.",
      role: "We designed a customized leadership development and advanced mentoring curriculum using an intersectional lens. The work included reviewing existing mentoring frameworks, developing culturally responsive curriculum and facilitator materials informed by a participant pre-survey, then piloting with fellows and content experts and refining the materials for association-wide implementation.",
      outcomes: [
        "A complete, culturally responsive advanced mentoring curriculum aligned to the association’s leadership pipeline",
        "An intersectional lens integrated throughout mentor and mentee development",
        "Custom facilitator materials and participant worksheets informed by pre-session data",
        "Structured piloting and feedback that readied the curriculum for association-wide distribution",
      ],
      image: null,
    },
    quote: {
      text: "I had not learned about Racial Identity Theory before, and it was a very useful framework for approaching my own learning and the work I do with clients.",
      author: "Clinical practitioner",
    },
  },
];

import type { Metadata } from "next";
import {
  BlockButton,
  BlockIcon,
  BloomGrid,
  Chip,
  Eyebrow,
  Flower,
  ICONS,
  type IconName,
  Logo,
  Rules,
  Section,
} from "@/components/brand";

export const metadata: Metadata = {
  title: "Brand Guidelines 2026 · Jernigan & Associates",
  description:
    "Visual identity, voice and applications for Jernigan & Associates. Version 1.0 · 2026.",
};

const contents = [
  ["03", "Purpose & values", "purpose"],
  ["05", "Brand idea", "brand-idea"],
  ["06", "Symbol", "symbol"],
  ["07", "Voice", "voice"],
  ["08", "Colour", "colour"],
  ["09", "Pattern in motion", "pattern-in-motion"],
  ["10", "Signature phrases", "signature-phrases"],
  ["11", "Logo", "logo"],
  ["12", "Typography", "typography"],
  ["13", "Icon lab", "icon-lab"],
  ["14", "Bloom pattern", "bloom-pattern"],
  ["15", "Photography", "photography"],
  ["16", "Data & UI", "data-ui"],
  ["17", "Web", "web"],
  ["18", "Applications & contact", "applications"],
] as const;

const who = [
  [
    "Purpose",
    "Our purpose",
    "To help institutions become places where everyone can grow, belong and lead.",
  ],
  [
    "Mission",
    "Our mission",
    "Translate rigorous psychological science into practices people can feel, every day.",
  ],
  [
    "Promise",
    "Our promise",
    "Research led, culturally embedded work, built with your people, never just for them.",
  ],
] as const;

const values: [string, string, string, string, IconName][] = [
  [
    "01",
    "Belonging",
    "We design for the people most often left out, because that is how everyone gets in.",
    "bg-lilac-300",
    "plus",
  ],
  [
    "02",
    "Rigor",
    "We bring evidence and measure what changes. Feelings matter; so does data.",
    "bg-tan-300",
    "growth",
  ],
  [
    "03",
    "Courage",
    "We say the hard thing kindly, and we stay in the room for the work.",
    "bg-mist-300",
    "chat",
  ],
  [
    "04",
    "Care",
    "We treat every partner and participant as a whole person.",
    "bg-white",
    "check",
  ],
];

const SHADES = [100, 200, 300, 500, 700, 900] as const;

// Hex values mirror the tokens in app/globals.css.
const palette: { name: string; key: string; role: string; hex: string[] }[] = [
  {
    name: "Paper",
    key: "paper",
    role: "Lets it breathe",
    hex: ["#F7F4EF", "#EFEAE3", "#DDD7CF", "#B5AEA6", "#8A847D", "#6E6964"],
  },
  {
    name: "Blue",
    key: "blue",
    role: "Carries structure",
    hex: ["#E3EEF8", "#C2D8EF", "#8FB5DF", "#2F6FAE", "#1B4F86", "#123A66"],
  },
  {
    name: "Mist",
    key: "mist",
    role: "Brings light",
    hex: ["#E6F8FB", "#C9F0F5", "#A5E5EE", "#6FD3E2", "#4FC3D6", "#3FB4C9"],
  },
  {
    name: "Tan",
    key: "tan",
    role: "Brings light",
    hex: ["#FAF3E6", "#F3E6CD", "#EBD9B8", "#E0C79C", "#D6B98A", "#C9A877"],
  },
  {
    name: "Lilac",
    key: "lilac",
    role: "Brings warmth",
    hex: ["#F3ECFC", "#E6D9F8", "#D6C2F2", "#C3A8EA", "#B394E0", "#A283D6"],
  },
  {
    name: "Petal",
    key: "petal",
    role: "Brings warmth",
    hex: ["#FCEAF3", "#F8D5E7", "#F2BBD8", "#EDA3CB", "#E88FC0", "#E07DB4"],
  },
  {
    name: "Navy",
    key: "navy",
    role: "Adds depth",
    hex: ["#E4E8F0", "#C3CCDD", "#8B9BB8", "#2A4A75", "#12305A", "#0B2140"],
  },
];

const lightText = (key: string, shade: number) =>
  (key === "blue" || key === "navy" || key === "paper") && shade >= 500;

const phrases = [
  ["Welcome to a new era of belonging", "Hero headline"],
  ["Partnership over prescription", "Approach and proof"],
  ["Science, translated into everyday practice.", "About and founder"],
  ["Your first step toward belonging", "Closing call to action"],
  ["Let’s grow together.", "Sign-off on slides and email"],
] as const;

const sectors = [
  "Education",
  "Behavioral health",
  "Healthcare",
  "Legal & criminal justice",
  "Entertainment",
];

const photoFrames = [
  ["Hero landscape", "Landscape leads the hero", "bg-mist-200"],
  ["Team portrait", "Plain, light backdrop", "bg-lilac-200"],
  ["Workshop", "Shot mid moment, not posed", "bg-tan-200"],
  ["Facilitation", "Facilitators in the room", "bg-blue-100"],
] as const;

const webSpecs = [
  ["Nav", "100px tall, logo + menu left, search right"],
  ["Hero", "Landscape image, H1 at 92, body then CTA"],
  ["Sections", "Panels with 64px padding, colour per section"],
  ["Footer", "Blue shell with the bloom pattern"],
] as const;

function Stats({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-[3px] ${className}`}>
      <Chip figure="2008" label="Founded in Atlanta" className="bg-tan-300" />
      <Chip
        figure="100+"
        label="Organizations served"
        className="bg-lilac-300"
      />
      <Chip figure="35,000+" label="Professionals trained" />
    </div>
  );
}

export default function BrandPage() {
  return (
    <main className="flex-1">
      {/* Nav — 100px tall, logo + menu left */}
      <header className="sticky top-0 z-20 bg-blue-900 text-white">
        <div className="mx-auto flex h-[100px] max-w-[1440px] items-center gap-10 px-6 md:px-16">
          <a href="#cover" aria-label="Back to cover">
            <Logo width={128} />
          </a>
          <nav className="hidden gap-7 text-sm lg:flex">
            {[
              ["Colour", "colour"],
              ["Logo", "logo"],
              ["Typography", "typography"],
              ["Icons", "icon-lab"],
              ["Bloom", "bloom-pattern"],
              ["Data & UI", "data-ui"],
              ["Web", "web"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="hover:text-mist-300">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contents"
            className="type-eyebrow ml-auto text-white/70 hover:text-white"
          >
            Contents
          </a>
        </div>
      </header>

      {/* 01 Cover */}
      <Section id="cover" label="Cover" tone="blue">
        <div className="relative flex min-h-[min(60vh,620px)] flex-col justify-between">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <p className="max-w-xs text-sm text-white/80">
              Visual identity, voice and applications for Jernigan &amp;
              Associates. Version 1.0 · 2026
            </p>
            <div className="flex flex-col items-start gap-[3px]">
              <Chip
                figure="2008"
                label="Founded in Atlanta"
                className="bg-tan-300"
              />
              <Chip
                figure="100+"
                label="Organizations served"
                className="bg-lilac-300"
              />
              <Chip figure="35,000+" label="Professionals trained" />
            </div>
          </div>
          <Flower
            outline
            size={280}
            className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 rotate-45 text-white/25 md:block"
          />
          <h1 className="mt-24 font-serif text-[clamp(4.5rem,15vw,13rem)] leading-[0.9] tracking-[-0.02em]">
            Guidelines
          </h1>
        </div>
      </Section>

      {/* 02 Contents */}
      <Section id="contents" label="Contents" tone="navy">
        <h2 className="type-h2">Contents</h2>
        <ol className="mt-16 max-w-5xl gap-x-16 text-sm sm:columns-2 lg:ml-auto lg:columns-3">
          {contents.map(([num, title, id]) => (
            <li
              key={id}
              className="break-inside-avoid border-t border-white/15"
            >
              <a
                href={`#${id}`}
                className="flex gap-5 py-4 hover:text-mist-300"
              >
                <span className="text-white/50">{num}</span>
                {title}
              </a>
            </li>
          ))}
        </ol>
      </Section>

      {/* 03 Purpose */}
      <Section id="purpose" label="Purpose & values">
        <Eyebrow>Who we are</Eyebrow>
        <div className="grid gap-[3px] lg:grid-cols-3">
          {who.map(([tag, title, body], i) => (
            <div
              key={tag}
              className={`flex min-h-80 flex-col justify-between p-8 ${
                ["bg-tan-300", "bg-lilac-300", "bg-mist-300"][i]
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="type-eyebrow">{title}</span>
                <span className="flex items-center gap-2 bg-white px-3 py-2 text-xs font-medium">
                  {tag}
                  <BlockIcon name="chevron down" size={12} />
                </span>
              </div>
              <p className="mt-12 font-serif text-[1.75rem] leading-[1.15] tracking-[-0.01em]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 04 Values */}
      <Section id="values" label="Values">
        <Eyebrow>Values</Eyebrow>
        <div className="border-b border-blue-900/20">
          {values.map(([num, name, body, bg, icon]) => (
            <div
              key={num}
              className="grid items-center gap-6 border-t border-blue-900/20 py-8 md:grid-cols-[4rem_1fr_4rem_1.4fr]"
            >
              <span className="text-sm text-blue-900/50">{num}</span>
              <h3 className="font-serif text-4xl tracking-[-0.015em]">
                {name}
              </h3>
              <span
                className={`flex size-12 items-center justify-center ${bg}`}
              >
                <BlockIcon name={icon} size={20} />
              </span>
              <p className="type-body max-w-lg">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 05 Brand idea */}
      <Section id="brand-idea" label="Brand idea">
        <div className="relative flex min-h-[min(60vh,620px)] flex-col items-center justify-center gap-10 text-center">
          <span className="flex items-center gap-2 bg-white px-3 py-2 text-xs lg:absolute lg:right-[12%] lg:top-6">
            <Flower size={12} /> Climate survey ready
            <span className="bg-mist-300 px-1.5 py-0.5 font-medium">New</span>
          </span>
          <p className="max-w-xs bg-white p-4 text-left text-xs leading-relaxed lg:absolute lg:left-[4%] lg:top-16">
            <span className="mr-2 text-blue-900/50">01</span>
            The ultimate reward for belonging work is a place where people stop
            having to explain themselves.
          </p>
          <h2 className="font-serif text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.95] tracking-[-0.02em]">
            Belonging
            <br />
            by Design
          </h2>
          <p className="max-w-xs bg-white p-4 text-left text-xs leading-relaxed lg:absolute lg:bottom-10 lg:right-[4%]">
            <span className="mr-2 text-blue-900/50">02</span>
            Warm, human and quietly confident. Backed by evidence, delivered
            with care, built to outlast the engagement.
          </p>
          <span className="flex items-center gap-2 bg-white px-3 py-2 text-xs lg:absolute lg:bottom-6 lg:left-[12%]">
            <Flower size={12} /> Cohort 0412 · Week 3
            <span className="bg-lilac-300 px-1.5 py-0.5 font-medium">New</span>
          </span>
        </div>
      </Section>

      {/* 06 Symbol */}
      <Section id="symbol" label="Symbol">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Symbol application</Eyebrow>
            <p className="type-body max-w-sm">
              The tree mark can stand alone on merchandise, social avatars and
              environmental graphics when the full lockup is already present
              nearby.
            </p>
          </div>
          <div className="grid gap-[3px] sm:grid-cols-2">
            <div className="flex aspect-square flex-col justify-end bg-blue-700 p-8 text-white">
              <Logo width={110} />
              <p className="mt-5 font-serif text-3xl leading-[1.05]">
                Grow where
                <br />
                you’re rooted
              </p>
            </div>
            <div className="flex aspect-square flex-col justify-end bg-lilac-300 p-8">
              <Logo width={110} colorClass="bg-blue-900" />
              <p className="mt-5 font-serif text-3xl leading-[1.05]">
                Belonging
                <br />
                Ambassador
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 07 Voice */}
      <Section id="voice" label="Voice">
        <Eyebrow>Voice</Eyebrow>
        <div className="grid gap-[3px]">
          <div className="bg-tan-300 p-8 md:p-16">
            <p className="max-w-4xl font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.2] tracking-[-0.01em]">
              Jernigan &amp; Associates is a psychological and educational
              consulting practice. We help schools, universities and health
              systems turn good intentions into belonging people can feel.
            </p>
            <p className="mt-16 text-xs text-blue-900/70">
              What we do, in one breath.
            </p>
          </div>
          <div className="bg-lilac-300 p-8 md:p-16">
            <p className="max-w-4xl font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.2] tracking-[-0.01em]">
              We are research-led and deeply human. We listen first, design with
              you, and measure what changes, so the work lasts long after we
              leave the room.
            </p>
            <p className="mt-16 text-xs text-blue-900/70">
              How we work, in one breath.
            </p>
          </div>
        </div>
      </Section>

      {/* 08 Colour */}
      <Section id="colour" label="Colour">
        <div className="grid gap-10 lg:grid-cols-[1fr_3fr]">
          <div>
            <Flower size={28} />
            <h2 className="type-eyebrow mb-4 mt-10">Bloom palette</h2>
            <p className="max-w-xs text-sm leading-relaxed">
              Seven families, six tints each. Blue carries structure, Tan and
              Mist bring light, Lilac and Petal bring warmth, Navy adds depth,
              Paper lets it breathe.
            </p>
          </div>
          <div className="overflow-x-auto">
            <div className="grid min-w-[720px] grid-cols-7">
              {palette.map((family) => (
                <div key={family.key}>
                  {SHADES.map((shade, i) => (
                    <div
                      key={shade}
                      className={`flex h-24 flex-col justify-between p-2.5 text-[11px] ${
                        lightText(family.key, shade)
                          ? "text-white"
                          : "text-blue-900"
                      }`}
                      style={{
                        backgroundColor: `var(--color-${family.key}-${shade})`,
                      }}
                    >
                      <span>{shade}</span>
                      <span className="font-mono opacity-80">
                        {family.hex[i]}
                      </span>
                    </div>
                  ))}
                  <p className="mt-3 text-sm font-medium">{family.name}</p>
                  <p className="text-xs text-blue-900/60">{family.role}</p>
                  <p className="mt-1 font-mono text-[11px] text-blue-900/60">
                    bg-{family.key}-500
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 09 Pattern in motion */}
      <Section id="pattern-in-motion" label="Pattern in motion" tone="navy">
        <div className="relative overflow-hidden bg-blue-900 p-8 md:p-16">
          <BloomGrid
            cols={22}
            rows={8}
            budClass="text-blue-700"
            bloomClass="text-mist-300"
            animated
            className="w-full"
          />
          <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
            <p className="flex items-center gap-3 text-sm">
              <Flower size={16} className="text-mist-300" />
              100+ organizations served since 2008
            </p>
            <div className="w-full max-w-xs bg-white p-6 text-blue-900">
              <p className="type-eyebrow mb-3">Where we work</p>
              <ul className="text-sm">
                {[
                  "Education",
                  "Behavioral health",
                  "Healthcare",
                  "Legal & justice",
                ].map((item) => (
                  <li key={item} className="border-t border-blue-900/15 py-2.5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 10 Signature phrases */}
      <Section id="signature-phrases" label="Signature phrases" tone="blue">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Eyebrow>Signature phrases</Eyebrow>
            <h2 className="type-h2">
              Lines we
              <br />
              Come Back To
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/80">
              Pulled straight from the homepage. Use them as headlines, slide
              titles and sign offs. Keep them short, warm and specific, and
              never stack two on one page.
            </p>
            <Rules
              markClass="text-mist-300"
              items={[
                "Sentence case in body, Title Case on a second title line",
                "One phrase per page or slide",
                "No slogans we cannot back with work",
              ]}
            />
          </div>
          <ul className="border-b border-white/25">
            {phrases.map(([phrase, use]) => (
              <li
                key={phrase}
                className="flex flex-wrap items-baseline justify-between gap-4 border-t border-white/25 py-7"
              >
                <span className="max-w-md font-serif text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.1]">
                  {phrase}
                </span>
                <span className="type-eyebrow text-[11px] text-white/60">
                  {use}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 11 Logo */}
      <Section id="logo" label="Logo" tone="mist">
        <div className="grid gap-[3px] lg:grid-cols-[1fr_2fr]">
          <div className="pb-10 pr-10">
            <Eyebrow>The mark</Eyebrow>
            <p className="type-body max-w-sm">
              The tree holds the people we serve, its canopy is made of the same
              petals as our flower. Paired with the wordmark, it reads as warm,
              established and personal.
            </p>
          </div>
          <div className="flex min-h-80 items-center justify-center bg-blue-900 p-10">
            <Logo width={300} />
          </div>
        </div>
        <div className="mt-[3px] grid grid-cols-2 gap-[3px] lg:grid-cols-4">
          {[
            ["bg-paper-100", "bg-blue-900", "Paper 100"],
            ["bg-lilac-300", "bg-blue-900", "Lilac 300"],
            ["bg-tan-300", "bg-blue-900", "Tan 300"],
            ["bg-navy-900", "", "Navy 900"],
          ].map(([bg, ink, name]) => (
            <figure key={name} className={`${bg} p-6`}>
              <div className="flex h-36 items-center justify-center">
                <Logo width={150} colorClass={ink || undefined} />
              </div>
              <figcaption
                className={`text-xs ${ink ? "text-blue-900/70" : "text-white/70"}`}
              >
                {name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* 12 Typography */}
      <Section id="typography" label="Typography">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Typography</Eyebrow>
            <h2 className="type-h2">
              Two Voices,
              <br />
              One System
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed">
              Hedvig Letters Serif carries every title and big number. Inter
              does the work: body, buttons, labels and data. Nothing else.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-[3px]">
              <div className="bg-tan-300 p-6">
                <p className="font-serif text-8xl">Aa</p>
                <p className="mt-10 text-sm font-medium">
                  Hedvig Letters Serif
                </p>
                <p className="text-xs text-blue-900/70">
                  Primary. Titles, quotes, big numbers.
                </p>
                <p className="mt-2 font-mono text-[11px] text-blue-900/60">
                  font-serif
                </p>
              </div>
              <div className="bg-lilac-300 p-6">
                <p className="font-sans text-8xl">Aa</p>
                <p className="mt-10 text-sm font-medium">Inter</p>
                <p className="text-xs text-blue-900/70">
                  Secondary. Body, UI, eyebrows, buttons.
                </p>
                <p className="mt-2 font-mono text-[11px] text-blue-900/60">
                  font-sans
                </p>
              </div>
            </div>
          </div>
          <dl className="border-b border-blue-900/20">
            {(
              [
                [
                  "H1 display",
                  "Hedvig 92 / 98% / -2%",
                  "type-h1",
                  <p key="s" className="type-h1">
                    Welcome to a new era
                  </p>,
                ],
                [
                  "H2 section",
                  "Hedvig 52–72 / 104% / -1.5%",
                  "type-h2",
                  <p key="s" className="type-h2">
                    Partnership over prescription
                  </p>,
                ],
                [
                  "Big number",
                  "Hedvig 88 / -2%",
                  "type-number",
                  <p key="s" className="type-number">
                    35,000+
                  </p>,
                ],
                [
                  "Body",
                  "Inter 16–17 / 155%",
                  "type-body",
                  <p key="s" className="type-body">
                    Since 2008, turning good intentions into measurable, lasting
                    change.
                  </p>,
                ],
                [
                  "Eyebrow",
                  "Inter Semi Bold 13 / +8% / caps",
                  "type-eyebrow",
                  <p key="s" className="type-eyebrow">
                    Who we are
                  </p>,
                ],
                [
                  "Button",
                  "Inter Medium 15",
                  "type-button",
                  <p key="s" className="type-button">
                    Book a consultation
                  </p>,
                ],
              ] as const
            ).map(([name, spec, cls, sample]) => (
              <div
                key={name}
                className="grid gap-4 border-t border-blue-900/20 py-6 sm:grid-cols-[11rem_1fr]"
              >
                <dt className="text-xs">
                  <span className="font-medium">{name}</span>
                  <br />
                  <span className="text-blue-900/60">{spec}</span>
                  <br />
                  <span className="font-mono text-[11px] text-blue-900/60">
                    {cls}
                  </span>
                </dt>
                <dd className="min-w-0">{sample}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* 13 Icon lab */}
      <Section id="icon-lab" label="Icon lab">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="type-h2">
              Built from blocks
              <br />
              and petals.
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed">
              Solid shapes, 2.5px corners, 3px gaps, one accent piece per icon.
              The accent marks the moment of action: the arrowhead, the open
              slot, the person.
            </p>
            <ul className="mt-8 space-y-2 text-xs">
              <li className="flex items-center gap-3">
                <span className="size-3 bg-blue-900" /> Blue 900 · structure
              </li>
              <li className="flex items-center gap-3">
                <span className="size-3 bg-blue-400" /> Blue 400 · accent
              </li>
            </ul>
          </div>
          <ul className="grid grid-cols-3 gap-x-6 gap-y-12 sm:grid-cols-4">
            {(Object.keys(ICONS) as IconName[]).map((name) => (
              <li key={name} className="flex flex-col gap-4">
                <BlockIcon name={name} size={36} />
                <span className="text-xs text-blue-900/70">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 14 Bloom pattern */}
      <Section id="bloom-pattern" label="Bloom pattern" tone="blue">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>The bloom grid</Eyebrow>
            <h2 className="type-h2">
              Petals,
              <br />
              repeated.
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/80">
              Buds sit in Blue; blooms light up in Mist or Tan. As decoration it
              gives texture; as data, one bloom is one unit.
            </p>
            <Rules
              markClass="text-mist-300"
              items={[
                "Square grid, gap = 15% of flower size",
                "One highlight colour per grid",
                "Keep 70%+ of flowers as buds",
                "Crop at the frame edge, never mid row",
              ]}
            />
          </div>
          <div className="grid gap-[3px] sm:grid-cols-2">
            <figure className="bg-blue-700 p-6">
              <BloomGrid
                cols={9}
                rows={5}
                budClass="text-blue-500"
                bloomClass="text-mist-300"
                className="w-full"
              />
              <figcaption className="mt-5 text-xs text-white/70">
                Decorative · Mist on Blue
              </figcaption>
            </figure>
            <figure className="bg-tan-300 p-6 text-blue-900">
              <BloomGrid
                cols={12}
                rows={5}
                budClass="text-tan-700"
                bloomClass="text-blue-900"
                className="w-full"
              />
              <figcaption className="mt-5 text-xs text-blue-900/70">
                Data · a bloom grid as a count, e.g. professionals trained
              </figcaption>
            </figure>
            <figure className="bg-navy-900 p-6">
              <div className="flex h-40 items-end justify-center gap-6">
                {[
                  ["text-mist-300", 72, "h-16"],
                  ["text-lilac-300", 56, "h-24"],
                  ["text-mist-300", 44, "h-10"],
                ].map(([color, size, stem], i) => (
                  <div key={i} className="flex flex-col items-center">
                    <Flower size={size as number} className={color as string} />
                    <span className={`w-[3px] bg-tan-500 ${stem}`} />
                  </div>
                ))}
              </div>
              <figcaption className="mt-5 text-xs text-white/70">
                Illustration · Tan stems, Mist &amp; Lilac blooms
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden bg-mist-300 p-6 text-blue-900">
              <div className="flex h-40 items-center justify-center">
                <Flower size={150} className="text-blue-700 blur-md" />
                <Flower size={90} className="-ml-10 text-white blur-lg" />
              </div>
              <figcaption className="mt-5 text-xs text-blue-900/70">
                Atmosphere · blurred blooms on Mist or Blue
              </figcaption>
            </figure>
            <figure className="bg-blue-700 p-6 sm:col-span-2">
              <div className="petal-hatch h-24 text-white" />
              <figcaption className="mt-5 text-xs text-white/70">
                Texture · petal hatch at 25% for panels
              </figcaption>
            </figure>
          </div>
        </div>
      </Section>

      {/* 15 Photography */}
      <Section id="photography" label="Photography" tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Photography</Eyebrow>
            <h2 className="type-h2">
              Real Rooms,
              <br />
              Real People
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed">
              Our photos show the work as it happens: facilitators in the room,
              teams in conversation, the landscape our brand grows from. Square
              crops, no rounded corners, no stock smiles.
            </p>
            <Rules
              items={[
                "Landscape leads the hero",
                "Team portraits on a plain, light backdrop",
                "Workshops shot mid moment, not posed",
                "No stock imagery or rounded crops",
              ]}
            />
          </div>
          <div className="grid grid-cols-2 gap-[3px]">
            {photoFrames.map(([name, note, bg]) => (
              <figure
                key={name}
                className={`relative flex aspect-square flex-col justify-between p-4 ${bg}`}
              >
                <figcaption className="self-start bg-white px-2.5 py-1.5 text-xs font-medium">
                  {name}
                </figcaption>
                <p className="text-xs text-blue-900/60">Photo slot · {note}</p>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      {/* 16 Data & UI */}
      <Section id="data-ui" label="Data & UI">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Data &amp; UI</Eyebrow>
            <h2 className="type-h2">
              Numbers With
              <br />
              Context
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed">
              Every number we show is real and sourced from our own work. Chips,
              stat panels and charts use the same blocks, colours and square
              corners as the website.
            </p>
            <Rules
              items={[
                "Real figures only, always with a label",
                "Labels sit inside the bar end",
                "Square buttons: label block + arrow block",
                "No invented percentages or survey results",
              ]}
            />
          </div>
          <div className="space-y-10">
            <div>
              <p className="type-eyebrow mb-4 text-[11px]">Data chips</p>
              <Stats />
            </div>
            <div>
              <p className="type-eyebrow mb-4 text-[11px]">Buttons</p>
              <div className="flex flex-wrap gap-4">
                <BlockButton>Book a consultation</BlockButton>
                <BlockButton variant="mist">Explore programs</BlockButton>
                <BlockButton variant="light">Meet the team</BlockButton>
              </div>
            </div>
            <div>
              <p className="type-eyebrow mb-4 text-[11px]">Growth chart</p>
              <div className="grid h-96 grid-cols-2 items-end gap-[3px] sm:grid-cols-4">
                <div className="flex h-[35%] flex-col justify-end bg-lilac-300 p-4">
                  <p className="font-serif text-3xl">Since 2008</p>
                  <p className="mt-1 text-xs">Founded in Atlanta</p>
                </div>
                <div className="flex h-[60%] flex-col justify-end bg-mist-300 p-4">
                  <p className="font-serif text-4xl">100+</p>
                  <p className="mt-1 text-xs">Organizations served</p>
                </div>
                <div className="flex h-full flex-col justify-end bg-tan-300 p-4">
                  <p className="font-serif text-4xl">35,000+</p>
                  <p className="mt-1 text-xs">Professionals trained</p>
                </div>
                <div className="flex h-full flex-col bg-blue-900 p-4 text-white">
                  <p className="mb-3 font-serif text-2xl">Five sectors</p>
                  <ul className="text-xs">
                    {sectors.map((sector) => (
                      <li
                        key={sector}
                        className="border-t border-white/25 py-2"
                      >
                        {sector}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 17 Web */}
      <Section id="web" label="Web" tone="tan">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Web</Eyebrow>
            <h2 className="type-h2">
              The Homepage
              <br />
              Is the Source
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed">
              The landing page sets the standard for every touchpoint. Generous
              section heights, a 100px nav, square button pairs and colour
              blocks that carry the data.
            </p>
            <dl className="mt-10 border-b border-blue-900/25 text-sm">
              {webSpecs.map(([name, spec]) => (
                <div
                  key={name}
                  className="grid grid-cols-[6rem_1fr] border-t border-blue-900/25 py-3"
                >
                  <dt className="font-medium">{name}</dt>
                  <dd>{spec}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid gap-[3px]">
            <div className="bg-blue-900 text-white">
              <div className="flex h-16 items-center gap-6 border-b border-white/15 px-6 text-xs">
                <Logo width={64} />
                <span>About</span>
                <span>Programs</span>
                <span>Impact</span>
                <BlockIcon name="search" size={14} mono className="ml-auto" />
              </div>
              <div className="p-6 md:p-16">
                <p className="type-eyebrow text-[11px] text-white/70">
                  Psychological &amp; educational consulting since 2008
                </p>
                <p className="type-h2-lg mt-5 max-w-xl">
                  Welcome to a new era of belonging
                </p>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-white/80">
                  Discover research led psychological and educational consulting
                  that meets people where they are. We help institutions become
                  places where everyone can grow.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <BlockButton variant="light">Explore our work</BlockButton>
                  <BlockButton variant="mist">Watch the film</BlockButton>
                </div>
              </div>
            </div>
            <div className="grid gap-[3px] sm:grid-cols-3">
              <div className="bg-white p-6">
                <p className="text-xs">Organizations served</p>
                <p className="type-number mt-6 text-6xl">100+</p>
              </div>
              <div className="bg-lilac-300 p-6">
                <p className="text-xs">Sectors we serve</p>
                <p className="mt-6 font-serif text-4xl">5 sectors</p>
                <p className="mt-3 text-xs leading-relaxed">
                  {sectors.join(" · ")}
                </p>
              </div>
              <div className="bg-blue-900 p-6 text-white">
                <p className="type-number text-6xl">35,000+</p>
                <p className="mt-4 text-xs leading-relaxed text-white/80">
                  Professionals trained since 2008, across education,
                  healthcare, behavioral health, legal and entertainment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 18 Applications & contact */}
      <Section id="applications" label="Applications & contact" tone="blue">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="flex flex-col">
            <Eyebrow>Applications &amp; contact</Eyebrow>
            <h2 className="type-h2">
              Let’s Grow
              <br />
              Together.
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/80">
              The same system runs through slides, social and print. When in
              doubt, start from the homepage and the slide template, and keep
              this guide close.
            </p>
            <ul className="mt-10 space-y-3 text-sm">
              <li>
                <a href="tel:+14044106674" className="hover:text-mist-300">
                  404 410 6674
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@mmjerniganassociates.com"
                  className="break-all hover:text-mist-300"
                >
                  admin@mmjerniganassociates.com
                </a>
              </li>
              <li>Atlanta, GA · Founded 2008</li>
            </ul>
            <BloomGrid
              cols={8}
              rows={2}
              budClass="text-blue-700"
              bloomClass="text-tan-300"
              className="mt-auto w-56 pt-12"
            />
          </div>
          <div className="grid gap-[3px] sm:grid-cols-2">
            <div className="flex min-h-80 flex-col justify-between bg-tan-300 p-8 text-blue-900 sm:col-span-2">
              <div className="flex items-start justify-between">
                <Logo width={96} colorClass="bg-blue-900" />
                <span className="text-xs">Capabilities deck 2026</span>
              </div>
              <div>
                <p className="type-h2 max-w-md">
                  Transforming organizations through social impact
                </p>
                <p className="mt-6 max-w-sm text-xs leading-relaxed">
                  Psychological &amp; educational consulting since 2008.
                  Culturally responsive, trauma informed and person centered.
                </p>
                <p className="mt-4 text-xs text-blue-900/70">
                  Prepared for Partner name
                </p>
              </div>
            </div>
            <div className="bg-white p-8 text-blue-900">
              <p className="type-eyebrow text-[11px]">Impact</p>
              <p className="mt-4 font-serif text-2xl leading-tight">
                Trusted by professionals across five sectors
              </p>
              <p className="type-number mt-8 text-6xl">35,000+</p>
              <p className="mt-3 text-xs leading-relaxed">
                professionals trained since 2008, across education, behavioral
                health, healthcare, legal and criminal justice, and
                entertainment.
              </p>
            </div>
            <div className="bg-navy-900 p-8">
              <p className="type-eyebrow text-[11px] text-white/70">
                03 By the numbers
              </p>
              <p className="mt-4 font-serif text-2xl leading-tight">
                Growing reach, lasting change
              </p>
              <div className="mt-8 grid grid-cols-2 gap-[3px] text-blue-900">
                <div className="bg-mist-300 p-4">
                  <p className="font-serif text-3xl">100+</p>
                  <p className="mt-1 text-[11px]">organizations served</p>
                </div>
                <div className="bg-lilac-300 p-4">
                  <p className="font-serif text-3xl">Since 2008</p>
                  <p className="mt-1 text-[11px]">founded in Atlanta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

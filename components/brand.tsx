import Image from "next/image";
import type { ReactNode } from "react";
import { Glyph, type GlyphName, isGlyph } from "@/components/icons";

const LOGO_SRC = "/logo/jernigan-logo-white.png";
const LOGO_RATIO = 325 / 183;

/* ---- Section shell ------------------------------------------------------ */

const tones = {
  paper: "bg-paper-100 text-blue-900",
  white: "bg-white text-blue-900",
  blue: "bg-blue-900 text-white",
  navy: "bg-navy-900 text-white",
  mist: "bg-mist-200 text-blue-900",
  tan: "bg-tan-300 text-blue-900",
} as const;

export type Tone = keyof typeof tones;

const isDark = (tone: Tone) => tone === "blue" || tone === "navy";

export function Section({
  id,
  label,
  tone = "paper",
  children,
}: {
  id: string;
  label: string;
  tone?: Tone;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`${tones[tone]} scroll-mt-[100px]`}>
      <div className="mx-auto flex min-h-[min(80vh,860px)] max-w-[1440px] flex-col px-6 pt-16 md:px-16">
        <div className="flex-1 pb-16">{children}</div>
        <div
          className={`flex justify-between border-t py-5 text-xs ${
            isDark(tone)
              ? "border-white/25 text-white/70"
              : "border-blue-900/20 text-blue-900/70"
          }`}
        >
          <span>Jernigan &amp; Associates · Brand Guidelines 2026</span>
          <span>{label}</span>
        </div>
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="type-eyebrow mb-5 opacity-70">{children}</p>;
}

export function Rules({
  items,
  markClass = "text-blue-400",
}: {
  items: string[];
  markClass?: string;
}) {
  return (
    <ul className="mt-10 space-y-3 text-sm">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Flower size={16} className={`mt-0.5 shrink-0 ${markClass}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---- Logo --------------------------------------------------------------- */

/**
 * Only a white PNG is supplied. On dark grounds it is used as is; on light
 * grounds the same file is used as a mask so the mark can take a brand colour.
 */
export function Logo({
  width = 160,
  colorClass,
  className = "",
}: {
  width?: number;
  /** A bg-* class. Omit for the original white artwork. */
  colorClass?: string;
  className?: string;
}) {
  const height = Math.round(width / LOGO_RATIO);
  if (!colorClass) {
    return (
      <Image
        src={LOGO_SRC}
        alt="Jernigan & Associates"
        width={width}
        height={height}
        className={className}
      />
    );
  }
  return (
    <span
      role="img"
      aria-label="Jernigan & Associates"
      className={`inline-block ${colorClass} ${className}`}
      style={{
        width,
        height,
        maskImage: `url(${LOGO_SRC})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskImage: `url(${LOGO_SRC})`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

/* ---- Photography ------------------------------------------------------ */

/**
 * Fills its (relative) parent with a photo, or with a labelled slot until the
 * photo exists. Square crops, no rounded corners.
 */
export function Photo({
  src,
  alt = "",
  slot,
  sizes = "100vw",
}: {
  src?: string;
  alt?: string;
  /** What belongs here, shown while there is no image. */
  slot: string;
  sizes?: string;
}) {
  return src ? (
    <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
  ) : (
    <span className="absolute left-4 right-4 top-4 text-xs opacity-60">
      Photo slot · {slot}
    </span>
  );
}

/**
 * Construction-line frame: an outlined box with inner guides and a circle,
 * used behind portraits and stat stacks. Lines take the current border colour
 * from `lineClass` (a border-* class). Children sit above the lines.
 */
export function GuideFrame({
  children,
  lineClass = "border-blue-900/15",
  className = "",
}: {
  children: ReactNode;
  lineClass?: string;
  className?: string;
}) {
  return (
    <div className={`relative border ${lineClass} ${className}`}>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 left-[9.5%] right-[9.5%] border-x ${lineClass}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-[9.5%] top-[9.5%] border-y ${lineClass}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border ${lineClass}`}
      />
      {children}
    </div>
  );
}

/** Small outlined tag, e.g. a credential or audience. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-blue-900/50 px-2.5 py-0.5 text-xs">
      {children}
    </span>
  );
}

/* ---- Bloom -------------------------------------------------------------- */

const PETAL = "M12 11C8.5 8 8.5 4 12 1.5C15.5 4 15.5 8 12 11Z";
const TURNS = [0, 90, 180, 270];

function Petals({ x = 0, y = 0, outline = false }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {TURNS.map((turn) => (
        <path
          key={turn}
          d={PETAL}
          transform={`rotate(${turn} 12 12)`}
          fill={outline ? "none" : "currentColor"}
          stroke={outline ? "currentColor" : "none"}
          strokeWidth={outline ? 1.5 : 0}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </g>
  );
}

/** The four-petal flower. Uses currentColor. */
export function Flower({
  size = 24,
  outline = false,
  className = "",
}: {
  size?: number;
  outline?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
    >
      <Petals outline={outline} />
    </svg>
  );
}

/**
 * The bloom grid. Square grid, gap = 15% of flower size, one highlight colour
 * per grid, 70%+ of flowers kept as buds. Bloom positions are deterministic.
 */
export function BloomGrid({
  cols,
  rows,
  budClass,
  bloomClass,
  animated = false,
  className = "",
}: {
  cols: number;
  rows: number;
  budClass: string;
  bloomClass: string;
  animated?: boolean;
  className?: string;
}) {
  const size = 24;
  const step = size * 1.15;
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      const bloom = (i * 7 + r * 3) % 11 === 0 || (c * 5 + r * 9) % 17 === 0;
      cells.push(
        <g
          key={i}
          className={`${bloom ? bloomClass : budClass} ${
            bloom && animated ? "bloom-pulse" : ""
          }`}
          style={
            bloom && animated
              ? { animationDelay: `${(i % 7) * -0.7}s` }
              : undefined
          }
        >
          <Petals x={c * step} y={r * step} />
        </g>,
      );
    }
  }
  return (
    <svg
      viewBox={`0 0 ${cols * step - size * 0.15} ${rows * step - size * 0.15}`}
      aria-hidden="true"
      className={className}
    >
      {cells}
    </svg>
  );
}

/**
 * An icon chosen by name in the CMS: a glyph, or the brand flower for
 * "flower" and for any name that is not a glyph.
 */
export function Mark({
  name,
  size = 16,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return isGlyph(name) ? (
    <Glyph name={name} size={size} className={className} />
  ) : (
    <Flower size={size} className={className} />
  );
}

/* ---- Icon lab ----------------------------------------------------------- */

/**
 * Built from blocks: solid squares on a 5×5 grid with soft corners and even
 * gaps. `#` is structure (Blue 900), `o` is the single accent piece (Blue 400)
 * that marks the moment of action.
 */
export const ICONS = {
  "arrow right": ["..o..", "...o.", "####o", "...o.", "..o.."],
  "arrow left": ["..o..", ".o...", "o####", ".o...", "..o.."],
  "arrow up right": [".oooo", "...#o", "..#.o", ".#..o", "#...."],
  "chevron down": [".....", "#...#", ".#.#.", "..o..", "....."],
  "chevron right": [".#...", "..#..", "...o.", "..#..", ".#..."],
  close: ["#...#", ".#.#.", "..o..", ".#.#.", "#...#"],
  search: [".###.", "#...#", "#...#", ".###.", "....o"],
  plus: ["..#..", "..#..", "##o##", "..#..", "..#.."],
  minus: [".....", ".....", "####o", ".....", "....."],
  check: ["....o", "...o.", "#.#..", ".#...", "....."],
  play: ["#....", "###..", "####o", "###..", "#...."],
  info: ["..o..", ".....", "..#..", "..#..", "..#.."],
  mail: ["#####", "##.##", "#.o.#", "#...#", "#####"],
  chat: ["#####", "#####", "#####", ".o...", "o...."],
  calendar: [".o.o.", "#####", "#.#.#", "#####", "#.#.#"],
  growth: ["....o", "..#.#", "..#.#", "#.#.#", "#.#.#"],
  location: [".###.", "#.o.#", "#####", ".###.", "..#.."],
} as const;

export type IconName = keyof typeof ICONS;

export function BlockIcon({
  name,
  size = 28,
  className = "",
  mono = false,
}: {
  name: IconName;
  size?: number;
  className?: string;
  /** Draw every block in currentColor (for use on dark or coloured grounds). */
  mono?: boolean;
}) {
  const cell = 5;
  const gap = 1;
  return (
    <svg
      viewBox="0 0 29 29"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
    >
      {ICONS[name].flatMap((row, y) =>
        [...row].map((ch, x) =>
          ch === "." ? null : (
            <rect
              key={`${x}-${y}`}
              x={x * (cell + gap)}
              y={y * (cell + gap)}
              width={cell}
              height={cell}
              rx={0.8}
              fill={
                mono
                  ? "currentColor"
                  : ch === "o"
                    ? "var(--color-blue-400)"
                    : "var(--color-blue-900)"
              }
            />
          ),
        ),
      )}
    </svg>
  );
}

/* ---- Data & UI ---------------------------------------------------------- */

/** Square button pair: label block + arrow block. */
export function BlockButton({
  children,
  href = "#",
  variant = "navy",
  icon = "arrow-right",
}: {
  children: ReactNode;
  href?: string;
  variant?: "navy" | "light" | "mist" | "tan" | "lilac";
  /** Glyph in the arrow block. Use `arrow-up-right` for links that leave the page. */
  icon?: GlyphName;
}) {
  const styles = {
    navy: ["bg-blue-900 text-white", "bg-blue-900 text-white"],
    light: ["bg-white text-blue-900", "bg-white text-blue-900"],
    mist: ["bg-mist-300 text-blue-900", "bg-mist-300 text-blue-900"],
    tan: ["bg-tan-300 text-blue-900", "bg-tan-300 text-blue-900"],
    lilac: ["bg-lilac-200 text-blue-900", "bg-lilac-200 text-blue-900"],
  }[variant];
  return (
    <a href={href} className="group type-button inline-flex gap-[3px]">
      <span className={`flex h-12 items-center px-5 ${styles[0]}`}>
        {children}
      </span>
      <span
        className={`flex size-12 items-center justify-center transition-transform group-hover:translate-x-0.5 ${styles[1]}`}
      >
        <Glyph name={icon} size={18} />
      </span>
    </a>
  );
}

/** Data chip: real figure, always with a label. */
export function Chip({
  figure,
  label,
  icon,
  size = "sm",
  className = "bg-white",
}: {
  figure: string;
  label: string;
  /** Glyph to lead with. Defaults to the flower. */
  icon?: GlyphName;
  size?: "sm" | "lg";
  className?: string;
}) {
  const lg = size === "lg";
  const mark = lg ? 16 : 14;
  return (
    <span
      className={`inline-flex items-center text-blue-900 ${
        lg ? "gap-3 px-3.5 py-2.5" : "gap-2.5 px-3 py-2"
      } ${className}`}
    >
      {icon ? (
        <Glyph name={icon} size={mark} className="shrink-0" />
      ) : (
        <Flower size={mark} className="shrink-0" />
      )}
      <span
        className={`font-serif leading-none ${lg ? "text-[1.625rem]" : "text-xl"}`}
      >
        {figure}
      </span>
      <span
        className={`leading-tight ${
          lg ? "max-w-[20ch] text-xs" : "max-w-[9ch] text-[11px]"
        }`}
      >
        {label}
      </span>
    </span>
  );
}

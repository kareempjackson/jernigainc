/**
 * Small UI glyphs for controls (arrows, search, chip markers). Solid, square
 * cut and drawn in currentColor so they stay crisp at 12–20px, where the
 * block-grid icons from the icon lab get too fine to read.
 */
const paths = {
  "arrow-right": "M3 9h9.2L8.6 5.4 10 4l6 6-6 6-1.4-1.4 3.6-3.6H3z",
  "arrow-up-right": "M6 4h10v10h-2V7.4l-8.6 8.6L4 14.6 12.6 6H6z",
  search:
    "M8.5 2a6.5 6.5 0 0 1 5.2 10.4l4 4-1.4 1.4-4-4A6.5 6.5 0 1 1 8.5 2zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z",
  pin: "M10 1.5a6.5 6.5 0 0 1 6.5 6.5c0 4.2-4.3 8.3-6.5 10.5C7.8 16.3 3.5 12.2 3.5 8A6.5 6.5 0 0 1 10 1.5zm0 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
  bars: "M3 11h3v6H3zm5.5-4h3v10h-3zM14 3h3v14h-3z",
  focus:
    "M3 3h5v2H5v3H3zM12 3h5v5h-2V5h-3zM3 12h2v3h3v2H3zM15 12h2v5h-5v-2h3zM10 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
  check: "M16.6 4.6 18 6l-9.5 9.5L3 10l1.4-1.4 4.1 4.1z",
  cross: "M8 2h4v6h6v4h-6v6H8v-6H2V8h6z",
  award:
    "M10 2a5.5 5.5 0 0 1 3.5 9.74V18L10 16l-3.5 2v-6.26A5.5 5.5 0 0 1 10 2zm0 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  dot: "M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14z",
  quote:
    "M3 15v-4.5C3 7.4 4.8 5.2 7.8 4.500l.6 1.600C6.9 6.7 6.1 7.8 6 9h2.500v6zm8.5 0v-4.500c0-3.1 1.8-5.3 4.8-6l.6 1.600c-1.5.6-2.3 1.7-2.4 2.900H17v6z",
  clock:
    "M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm1 2v3.600l2.7 1.6-1 1.700L9 10.700V6z",
  play: "M5 3l12 7-12 7z",
  globe:
    "M9 2.06V9H2.06A8 8 0 0 1 9 2.06zm2 0A8 8 0 0 1 17.94 9H11zM2.06 11H9v6.94A8 8 0 0 1 2.06 11zM11 11h6.94A8 8 0 0 1 11 17.94z",
  phone: "M6 2h8v16H6zm2 2v10h4V4zm1 11.5h2v1H9z",
  mail: "M2 4h16v12H2zm2.2 2L10 10.2 15.8 6zM4 7.6V14h12V7.6l-6 4.3z",
  sprout:
    "M9 11h2v7H9zM9.5 11C5.5 11 3.500 8.500 3.500 4.500c4 0 6 2.500 6 6.500zM10.500 13c0-3.500 2-5.500 6-5.500 0 3.500-2 5.500-6 5.500z",
  blocks: "M3 3h8v8H3zM13 3h4v8h-4zM3 13h4v4H3zM9 13h8v4H9z",
  chat: "M2 4h16v10H9l-4 3.500V14H2z",
  mic: "M8 2h4v9H8zM5 9h1.500v3.500h7V9H15v5h-4v2h3v2H6v-2h3v-2H5z",
} as const;

export type GlyphName = keyof typeof paths;

export function Glyph({
  name,
  size = 16,
  className = "",
}: {
  name: GlyphName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
    >
      <path d={paths[name]} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

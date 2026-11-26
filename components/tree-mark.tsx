/**
 * The tree mark, drawn as vector so it stays sharp at any size: a figure with
 * raised arms whose canopy is made of petals. Uses currentColor.
 *
 * This is a redraw for large display use (e.g. the footer), not the supplied
 * logo artwork.
 */

// Each leaf: [angle in degrees (0 = right, -90 = up), start distance from the
// head, length, width].
const LEAVES: [number, number, number, number][] = [
  // Large inner leaves
  [-90, 50, 92, 31],
  [-60, 50, 88, 30],
  [-120, 50, 88, 30],
  [-31, 52, 84, 29],
  [-149, 52, 84, 29],
  // The two broad leaves resting on the arms
  [-4, 46, 92, 30],
  [-176, 46, 92, 30],
  // Small leaves tucked between the large ones
  [-75, 100, 38, 13],
  [-105, 100, 38, 13],
  [-45.5, 100, 36, 13],
  [-134.5, 100, 36, 13],
  [-17.5, 102, 34, 12],
  [-162.5, 102, 34, 12],
  // Outer ring
  [-90, 150, 28, 12],
  [-75, 146, 30, 12],
  [-105, 146, 30, 12],
  [-60, 146, 28, 12],
  [-120, 146, 28, 12],
  [-45.5, 144, 30, 12],
  [-134.5, 144, 30, 12],
  [-31, 144, 26, 11],
  [-149, 144, 26, 11],
  [-17.5, 144, 28, 11],
  [-162.5, 144, 28, 11],
  [-5, 146, 22, 10],
  [-175, 146, 22, 10],
];

const CX = 180;
const CY = 196;

function leafPath(start: number, length: number, width: number) {
  const end = start + length;
  const mid = start + length * 0.48;
  return `M${start} 0Q${mid} ${width} ${end} 0Q${mid} ${-width} ${start} 0Z`;
}

export function TreeMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="8 8 344 392"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      {LEAVES.map(([angle, start, length, width], i) => (
        <path
          key={i}
          d={leafPath(start, length, width)}
          transform={`translate(${CX} ${CY}) rotate(${angle})`}
        />
      ))}
      {/* Head */}
      <circle cx={CX} cy={CY} r={22} />
      {/* Raised arms and trunk */}
      <path d="M8 208C62 256 140 238 158 276C168 320 160 366 144 398H216C200 366 192 320 202 276C220 238 298 256 352 208C298 230 232 222 180 222C128 222 62 230 8 208Z" />
    </svg>
  );
}

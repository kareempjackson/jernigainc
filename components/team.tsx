import { homeDefaults, type HomeContent } from "@/content/home";
import Link from "next/link";
import { BlockButton, BloomGrid, Photo } from "@/components/brand";
import { Glyph } from "@/components/icons";

type TeamMember = {
  name: string;
  role: string;
  href: string;
  /** A file under /public. Black-and-white portraits. */
  imageSrc?: string;
  /** Label block colour (a bg-* class). */
  tone: string;
};

/** "The people behind the work": four portraits and the bloom strip. */
export function Team({
  content: c = homeDefaults.team,
}: {
  content?: HomeContent["team"];
}) {
  const tones = ["bg-navy-100", "bg-lilac-200", "bg-blue-200", "bg-paper-100"];
  const members: TeamMember[] = c.members.map((m, i) => ({
    name: m.name,
    role: m.role,
    href: m.href || "/our-team",
    imageSrc: m.image ?? undefined,
    tone: tones[i % tones.length],
  }));
  return (
    <section className="overflow-hidden bg-blue-900 text-white">
      <div className="mx-auto max-w-[1440px] px-6 pt-20 md:px-16 lg:pt-28">
        <div className="grid items-end gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
          <div>
            <p className="mb-4 text-sm text-white/75">{c.eyebrow}</p>
            <h2 className="type-h2-lg">
              {c.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <div>
            <p className="type-body max-w-md text-white/80">{c.body}</p>
            <div className="mt-6">
              <BlockButton href={c.ctaHref} variant="light">
                {c.ctaLabel}
              </BlockButton>
            </div>
          </div>
        </div>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {members.map((member, i) => (
            <li key={`${member.name}-${i}`}>
              <Link
                href={member.href}
                className="group relative block aspect-[4/5] bg-paper-300 text-blue-900"
              >
                <Photo
                  src={member.imageSrc}
                  alt={member.name}
                  slot="Team portrait, black and white"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <span
                  className={`absolute bottom-0 left-0 block w-[85%] px-6 py-5 ${member.tone}`}
                >
                  <span className="block font-medium leading-snug">
                    {member.name}
                  </span>
                  <span className="mt-1 block text-xs text-blue-900/75">
                    {member.role}
                  </span>
                </span>
                <span className="absolute bottom-0 right-0 flex size-10 items-center justify-center bg-white transition-colors group-hover:bg-mist-300">
                  <Glyph name="arrow-up-right" size={13} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bloom strip, cropped at the frame edge */}
      <BloomGrid
        cols={48}
        rows={3}
        budClass="text-blue-700"
        bloomClass="text-tan-300"
        className="mt-14 w-[max(100%,1800px)] max-w-none"
      />
    </section>
  );
}

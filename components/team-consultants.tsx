import { teamDefaults, type TeamContent } from "@/content/team";
import Image from "next/image";

type Consultant = {
  name: string;
  role: string;
  bio: string;
  /** Name band colour (a bg-* class). */
  tone: string;
  /** A file under /public. Until it exists the card shows initials. */
  imageSrc?: string;
};

/** "CG" from "Dr. Carlton E. Green": first and last name, title dropped. */
function initials(name: string) {
  const parts = name.replace(/^Dr\.\s+/, "").split(/\s+/);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/** Our team page: senior consultants and consultants. */
export function TeamConsultants({
  content: c = teamDefaults.consultants,
}: {
  content?: TeamContent["consultants"];
}) {
  const tones = ["bg-tan-300", "bg-lilac-200", "bg-mist-200", "bg-paper-200"];
  const consultants: Consultant[] = c.people.map((p, i) => ({
    name: p.name,
    role: p.role,
    bio: p.bio,
    tone: tones[i % tones.length],
    imageSrc: p.image ?? undefined,
  }));
  return (
    <section className="bg-white text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 py-14 lg:py-20">
        <div className="grid items-end gap-x-16 gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <p className="flex items-center gap-2.5 text-[13px]">
              <span
                aria-hidden="true"
                className="size-1 rounded-full bg-current"
              />
              {c.eyebrow}
            </p>
            <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4">
              {c.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <p className="text-[15px] leading-[1.6] text-blue-900/70">{c.body}</p>
        </div>

        <ul className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {consultants.map(({ name, role, bio, tone, imageSrc }) => (
            <li key={name}>
              <div className="relative flex aspect-[10/11] items-center justify-center overflow-hidden bg-blue-900 text-paper-100">
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <>
                    <span className="absolute left-4 top-4 bg-white/15 px-2 py-1 text-[11px] leading-none text-white/85">
                      Headshot to come
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-serif text-[clamp(3.5rem,6vw,5rem)] leading-none tracking-[-0.02em]"
                    >
                      {initials(name)}
                    </span>
                  </>
                )}
              </div>
              <div className={`px-5 py-4 ${tone}`}>
                <h3 className="font-medium">{name}</h3>
                <p className="mt-1 text-[13px] text-blue-900/70">{role}</p>
              </div>
              <p className="mt-4 text-sm leading-[1.55] text-blue-900/70">
                {bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

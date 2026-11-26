import { homeDefaults, type HomeContent } from "@/content/home";
import { FilmPlayer } from "@/components/film-player";

/**
 * "In the room": the film. The hero's "Watch the film" link lands here (#film).
 * Pass `videoSrc` / `posterSrc` (files under /public) once the film exists.
 */
export function InTheRoom({
  content: c = homeDefaults.film,
  videoSrc,
  posterSrc,
  captionsSrc,
  meta,
}: {
  content?: HomeContent["film"];
  videoSrc?: string;
  posterSrc?: string;
  captionsSrc?: string;
  meta?: string;
}) {
  return (
    <section
      id="film"
      className="dot-grid scroll-mt-10 overflow-hidden bg-paper-100 text-blue-900"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-16 lg:py-28">
        <div className="grid items-end gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <div>
            <p className="type-eyebrow mb-5 font-normal text-blue-900/70">
              {c.eyebrow}
            </p>
            <h2 className="type-h2-lg">
              {c.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <p className="type-body max-w-md text-blue-900/75 lg:pb-3">
            {c.body}
          </p>
        </div>

        <div className="scroll-expand relative mt-14 aspect-video bg-blue-200 lg:mt-20 lg:aspect-[1.92]">
          <FilmPlayer
            src={videoSrc ?? (c.videoUrl || undefined)}
            poster={posterSrc ?? c.poster ?? undefined}
            captions={captionsSrc}
            title={c.filmTitle}
            meta={meta ?? c.meta}
          />
        </div>

        <p className="scroll-expand-hint mt-10 text-center text-blue-900/70">
          Scroll to expand
          <svg
            viewBox="0 0 10 6"
            width={12}
            height={7}
            aria-hidden="true"
            className="mx-auto mt-1.5"
          >
            <path
              d="M1 1l4 4 4-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            />
          </svg>
        </p>
      </div>
    </section>
  );
}

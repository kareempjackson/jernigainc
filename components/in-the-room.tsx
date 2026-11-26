import { FilmScroll } from "@/components/film-scroll";
import { homeDefaults, type HomeContent } from "@/content/home";

/**
 * "In the room": the film. The hero's "Watch the film" link lands here
 * (#film). The scroll behaviour lives in film-scroll.tsx. Pass `videoSrc` /
 * `posterSrc` (files under /public) to override the CMS.
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
    <FilmScroll
      eyebrow={c.eyebrow}
      title={c.title}
      body={c.body}
      filmTitle={c.filmTitle}
      meta={meta ?? c.meta}
      src={videoSrc ?? (c.videoUrl || undefined)}
      poster={posterSrc ?? c.poster ?? undefined}
      captions={captionsSrc}
    />
  );
}

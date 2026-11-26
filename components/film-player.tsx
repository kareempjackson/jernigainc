"use client";

import Image from "next/image";
import { useState } from "react";
import { Glyph } from "@/components/icons";

/**
 * Poster frame with a play button. Pressing play swaps in the video with
 * native controls. Without `src` the frame is a labelled slot and the button
 * is inert.
 */
export function FilmPlayer({
  src,
  poster,
  captions,
  title,
  meta,
}: {
  src?: string;
  poster?: string;
  /** WebVTT captions track. */
  captions?: string;
  title: string;
  /** Small chip in the corner, e.g. "2:14 · Captions on". */
  meta?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing && src) {
    return (
      <video
        src={src}
        poster={poster}
        controls
        autoPlay
        playsInline
        className="absolute inset-0 size-full bg-navy-900 object-cover"
      >
        {captions && (
          <track kind="captions" src={captions} srcLang="en" default />
        )}
      </video>
    );
  }

  return (
    <>
      {poster ? (
        <Image
          src={poster}
          alt=""
          fill
          sizes="(min-width: 1440px) 1312px, 100vw"
          className="object-cover"
        />
      ) : (
        <span className="absolute bottom-4 left-4 text-xs text-blue-900/60 sm:bottom-7 sm:left-7">
          Film slot · {title}
        </span>
      )}
      {meta && (
        <span className="absolute left-4 top-4 flex items-center gap-2 bg-white px-3 py-2 text-xs text-blue-900 sm:left-7 sm:top-7">
          <Glyph name="clock" size={13} />
          {meta}
        </span>
      )}
      <button
        type="button"
        onClick={() => setPlaying(true)}
        disabled={!src}
        aria-label={src ? `Play: ${title}` : `${title} (film coming soon)`}
        className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-lilac-200 text-blue-900 transition-transform enabled:hover:scale-105 enabled:hover:bg-white sm:size-24"
      >
        <Glyph name="play" size={30} className="ml-1" />
      </button>
    </>
  );
}

"use client";

/** Set in localStorage once a visitor has been shown the entrance. */
export const INTRO_SEEN_KEY = "jernigan:intro-seen";

/**
 * Decides, before anything is painted, whether this visit gets the entrance
 * (see components/site-intro.tsx) and records the answer on <html data-intro>:
 * "playing" on a first visit, "seen" on every later one. Add `?intro` to any
 * address to watch it again.
 *
 * Must be rendered before the page content, so the answer is known by the
 * time the browser reaches it. The script only ever runs from the HTML the
 * server sends; in the browser React is given an inert type, since it cannot
 * run scripts it renders itself and says so loudly.
 */
const boot = `(function(){var d=document.documentElement,s="seen";try{if(/[?&]intro(=|&|$)/.test(location.search)||!localStorage.getItem(${JSON.stringify(
  INTRO_SEEN_KEY,
)}))s="playing"}catch(e){}d.dataset.intro=s})()`;

export function SiteIntroBoot() {
  return (
    <>
      <script
        type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: boot }}
      />
      {/* Without script nothing could remove the cover, so never show it. */}
      <noscript>
        <style>{".site-intro{display:none}"}</style>
      </noscript>
    </>
  );
}

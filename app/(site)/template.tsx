"use client";

import { type ReactNode, useEffect } from "react";
import { RevealObserver } from "@/components/motion";

/**
 * Wraps each page's content. Unlike the layout, a template is created afresh
 * on every navigation, which replays the arrival animation and, on mount,
 * clears the "leaving" state the menus set on the page that was left.
 */
export default function SiteTemplate({ children }: { children: ReactNode }) {
  useEffect(() => {
    delete document.documentElement.dataset.leaving;
  }, []);

  return (
    <div className="page-arrive">
      {/* Scroll-triggered reveals (see "Motion" in globals.css). */}
      <RevealObserver />
      {children}
    </div>
  );
}

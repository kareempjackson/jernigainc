"use client";

import {
  MotionConfig,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { type ReactNode, useState } from "react";

/** Scrolling less than this in one step does not flip the bar. */
const NUDGE = 4;
/** Above this point the bar always shows. */
const TOP_ZONE = 160;

/**
 * The navigation bar's sticky shell. It slides out of the way while the
 * visitor scrolls down and slides back in as soon as they scroll up, so the
 * menu is always one small gesture away without covering the page.
 */
export function StickyBar({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [raised, setRaised] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const delta = y - (scrollY.getPrevious() ?? 0);
    if (y < TOP_ZONE) setHidden(false);
    else if (delta > NUDGE) setHidden(true);
    else if (delta < -NUDGE) setHidden(false);
    setRaised(y > 8);
  });

  return (
    <MotionConfig reducedMotion="user">
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        // Keyboard users tabbing into a hidden bar bring it back.
        onFocusCapture={() => setHidden(false)}
        className={`sticky top-0 z-30 text-white transition-shadow duration-300 ${
          raised && !hidden ? "shadow-[0_10px_30px_rgb(5_16_33/0.28)]" : ""
        }`}
      >
        {children}
      </motion.header>
    </MotionConfig>
  );
}

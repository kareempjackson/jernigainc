"use client";

import { type ReactNode, useId, useState } from "react";
import { Glyph } from "@/components/icons";

/**
 * One item open at a time. Opening animates the height over 300ms and fades
 * the text in; the plus turns 45° into a cross. The first item starts open.
 */
export function Accordion({
  items,
}: {
  items: { icon: ReactNode; title: string; body: string }[];
}) {
  const [open, setOpen] = useState(0);
  const id = useId();

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className="bg-white">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center gap-4 px-5 py-5 text-left"
              >
                <span className="shrink-0">{item.icon}</span>
                <span className="text-[15px]">{item.title}</span>
                <Glyph
                  name="cross"
                  size={12}
                  className={`ml-auto shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={`${id}-${i}`}
              role="region"
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`px-5 pb-6 pl-[3.25rem] text-sm leading-relaxed text-blue-900/75 transition-opacity duration-300 motion-reduce:transition-none ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

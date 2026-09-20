"use client";

import { useEffect } from "react";

/**
 * Adds a class to <html> once JS has hydrated, so the CSS-only starting
 * state for .reveal elements only applies when we can actually animate
 * them in. No-JS visitors simply see fully visible content.
 */
export function RevealInit() {
  useEffect(() => {
    document.documentElement.classList.add("js-reveal");
  }, []);

  return null;
}

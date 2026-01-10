import { useEffect, useState } from "react";

import type { TBreakpoint, IUseBreakpoints } from "../types/hooks";

import { breakpoints } from "../stoop.config";

/**
 * Extracts the media query condition from a full media query string
 * Handles formats like:
 * - "@media only screen and (max-width: 800px)" -> "(max-width: 800px)"
 * - "@media only screen and (min-width: 801px) and (max-width: 1100px)" -> "(min-width: 801px) and (max-width: 1100px)"
 */
const extractMediaQuery = (cssRule: string): string => {
  // Remove "@media only screen and " prefix if present
  let query = cssRule.replace(/^@media\s+only\s+screen\s+and\s+/, "");

  // If it still starts with "@media", handle other formats
  if (query.startsWith("@media")) {
    query = query.replace(/^@media\s+/, "");
  }

  return query;
};

/**
 * Detects the current breakpoint by checking media queries in order from smallest to largest
 * Order matters: we check specific ranges first, then fallback to broader matches
 */
const getBreakpoint = (): TBreakpoint => {
  if (typeof window === "undefined") {
    return undefined;
  }

  // Check breakpoints in order from smallest to largest screen size
  // This ensures we match the most specific breakpoint first

  // Phone: max-width: 800px (0-800px)
  if (window.matchMedia(extractMediaQuery(breakpoints.phone)).matches) {
    return "phone";
  }

  // TabletX: min-width: 801px and max-width: 1100px (801-1100px)
  if (window.matchMedia(extractMediaQuery(breakpoints.tabletX)).matches) {
    return "tabletX";
  }

  // LaptopX: min-width: 1101px and max-width: 1400px (1101-1400px)
  if (window.matchMedia(extractMediaQuery(breakpoints.laptopX)).matches) {
    return "laptopX";
  }

  // DesktopX: min-width: 1401px and max-width: 2200px (1401-2200px)
  if (window.matchMedia(extractMediaQuery(breakpoints.desktopX)).matches) {
    return "desktopX";
  }

  // Wide: min-width: 2201px (2201px+)
  if (window.matchMedia(extractMediaQuery(breakpoints.wide)).matches) {
    return "wide";
  }

  // Fallback: if no breakpoint matches (shouldn't happen in practice)
  // Default to phone for mobile-first approach
  return "phone";
};

export default function useBreakpoints(): IUseBreakpoints {
  // Initialize with undefined for SSR, will be set on mount
  const [breakpoint, setBreakpoint] = useState<TBreakpoint>(undefined);

  const isPhone = breakpoint === "phone";
  const isTablet = breakpoint === "tabletX";
  const isLaptop = breakpoint === "laptopX";
  const isDesktop = breakpoint === "desktopX";
  const isWide = breakpoint === "wide";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const breakpointListener = (): void => {
        const currentBreakpoint = getBreakpoint();

        setBreakpoint(currentBreakpoint);
      };

      // Set initial breakpoint immediately

      breakpointListener();

      // Listen for resize events
      window.addEventListener("resize", breakpointListener);

      // Also listen for orientation changes on mobile devices
      window.addEventListener("orientationchange", breakpointListener);

      return (): void => {
        window.removeEventListener("resize", breakpointListener);
        window.removeEventListener("orientationchange", breakpointListener);
      };
    }

    return (): void => {};
  }, []);

  return { breakpoint, isDesktop, isLaptop, isPhone, isTablet, isWide };
}

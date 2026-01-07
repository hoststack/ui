import { useEffect, useState } from "react";

import type { TBreakpoint, IUseBreakpoints } from "../types/hooks";

import { breakpoints } from "../stoop.config";

const extractMediaQuery = (cssRule: string): string => {
  return cssRule.replace("@media only screen and ", "");
};

const getBreakpoint = (): TBreakpoint => {
  if (window.matchMedia(extractMediaQuery(breakpoints.phone)).matches) {
    return "phone";
  } else if (window.matchMedia(extractMediaQuery(breakpoints.tabletX)).matches) {
    return "tabletX";
  } else if (window.matchMedia(extractMediaQuery(breakpoints.laptopX)).matches) {
    return "laptopX";
  } else if (window.matchMedia(extractMediaQuery(breakpoints.desktopX)).matches) {
    return "desktopX";
  } else if (window.matchMedia(extractMediaQuery(breakpoints.wide)).matches) {
    return "wide";
  }

  return undefined;
};

export default function useBreakpoints(): IUseBreakpoints {
  const [breakpoint, setBreakpoint] = useState<TBreakpoint>("phone");

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

      breakpointListener();
      window.addEventListener("resize", breakpointListener);

      return (): void => window.removeEventListener("resize", breakpointListener);
    }

    return (): void => {};
  }, []);

  return { breakpoint, isDesktop, isLaptop, isPhone, isTablet, isWide };
}

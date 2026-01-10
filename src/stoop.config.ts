/* eslint-disable perfectionist/sort-objects */
import { createStoop, type CSS } from "stoop";

// Re-export CSS type for use in components
export type { CSS };

export const breakpoints = {
  desktop: "@media only screen and (max-width: 2200px)",
  desktopX: "@media only screen and (min-width: 1401px) and (max-width: 2200px)",
  laptop: "@media only screen and (max-width: 1400px)",
  laptopX: "@media only screen and (min-width: 1101px) and (max-width: 1400px)",
  phone: "@media only screen and (max-width: 800px)",
  phoneX: "@media only screen and (min-width: 376px) and (max-width: 800px)",
  tablet: "@media only screen and (max-width: 1100px)",
  tabletX: "@media only screen and (min-width: 801px) and (max-width: 1100px)",
  wide: "@media only screen and (min-width: 2201px)",
  micro: "@media only screen and (max-width: 375px)",
  print: "@media print",
  retina:
    "@media only screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 2dppx)",
};

export const spacings = {
  auto: "auto",
  large: "40px",
  larger: "60px",
  largest: "100px",
  medium: "20px",
  none: "0px",
  small: "10px",
  smaller: "5px",
  smallest: "2.5px",
};

export const defaultTheme = {
  colors: {
    background: "#f3f3f1",
    border: "rgba(160, 160, 155, 0.4)",
    borderLight: "rgba(160, 160, 155, 0.2)",
    glass: "rgba(255, 255, 255, 0.8)",
    overlay: "rgba(0, 0, 0, 0.25)",
    surface: "#FFFFFF",
    surfaceHover: "rgba(160, 160, 155, 0.2)",
    surfaceLight: "rgba(160, 160, 155, 0.1)",
    text: "#141415",
    yellow: "#ffcd1a",
    yellowLight: "#FFE792",
  },
  fonts: {
    default: "DM Sans, apple-system, sans-serif",
    heading: "Archivo, apple-system, sans-serif",
  },
  fontSizes: {
    default: "clamp(0.9375rem, 0.875rem + 0.5vw, 1.125rem)",
    h1: "clamp(2rem, 1.6rem + 0.8vw, 2.4rem)",
    h2: "clamp(1.75rem, 1.4rem + 0.7vw, 2.2rem)",
    h3: "clamp(1.5rem, 1.2rem + 0.6vw, 2rem)",
    h4: "clamp(1.375rem, 1.1rem + 0.5vw, 1.6rem)",
    h5: "clamp(1.25rem, 1rem + 0.4vw, 1.4rem)",
    h6: "clamp(1.125rem, 0.95rem + 0.3vw, 1.2rem)",
    micro: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",
    small: "clamp(0.875rem, 0.8125rem + 0.3125vw, 1rem)",
  },
  lineHeights: {
    default: "1.5",
    small: "1.2",
  },
  opacities: {
    default: 0.75,
    light: 0.55,
  },

  sizes: spacings,
  space: spacings,
  transitions: {
    default: "all 0.420s ease",
  },
  zIndices: {
    menu: 999,
    modal: 997,
    popover: 996,
    select: 995,
    special: 100,
    table: 100,
    toast: 998,
  },
};

const darkThemeConfig = {
  colors: {
    background: "#0f0f0f",
    border: "rgba(255, 255, 255, 0.2)",
    borderLight: "rgba(255, 255, 255, 0.1)",
    glass: "rgba(0, 0, 0, 0.6)",
    overlay: "rgba(255, 255, 255, 0.1)",
    surface: "#222222",
    surfaceHover: "rgba(255, 255, 255, 0.2)",
    surfaceLight: "rgba(255, 255, 255, 0.1)",
    text: "#FFFFFF",
    yellow: "#ffcd1a",
    yellowLight: "#64521E",
  },
};

// Use breakpoints directly as media config (already flat)
const media = breakpoints;

// Global CSS configuration (automatically applied by Provider)
const globalCssConfig = {
  "*": {
    boxSizing: "border-box",
    margin: 0,
    marginBlock: 0,
    padding: 0,
    paddingBlock: 0,
  },
  "*:focus": {
    outline: "$yellow",
  },
  "::selection": {
    backgroundColor: "$text",
    color: "$background",
  },
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Archivo:wght@600&family=DM+Sans:wght@400;600&display=swap')",
  "a, a:visited, a:active, a:hover": {
    color: "inherit",
    textDecoration: "none",
    WebkitTapHighlightColor: "transparent",
  },
  body: {
    "[data-theme='dark'] &": {
      colorScheme: "dark",
    },
    backgroundColor: "$background",
    color: "$text",
    fontFamily: "$default",
    fontFeatureSettings: '"zero" 1, "tnum" 1, "calt" 1, "liga" 1, "case" 1',
    fontOpticalSizing: "auto",
    fontSize: "$default",
    fontWeight: 400,
    height: "100%",
    letterSpacing: "0.015em",
    lineHeight: "$default",
    margin: 0,
    minHeight: "100vh",
    MozOsxFontSmoothing: "grayscale",
    overflowX: "hidden",
    padding: 0,
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
  },
  "button:disabled, input:disabled, textarea:disabled, select:disabled": {
    cursor: "not-allowed",
    opacity: "$light",
  },
  "button, input, textarea, select": {
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "inherit",
  },
  "h1, h2, h3, h4, h5, h6": {
    fontFeatureSettings: '"zero" 1, "tnum" 1, "calt" 1, "liga" 1, "case" 1',
    fontWeight: 600,
    lineHeight: "$small",
    margin: 0,
    textRendering: "optimizeLegibility",
  },
  html: {
    boxSizing: "border-box",
    fontSize: "100%",
    height: "100%",
    margin: 0,
    marginBlock: 0,
    padding: 0,
    paddingBlock: 0,
    scrollBehavior: "smooth",
  },
  "img, svg": {
    display: "block",
    maxWidth: "100%",
  },
  "input, textarea, select": {
    cursor: "text",
  },
  p: {
    lineHeight: "$default",
    margin: 0,
  },
  reduceMotion: {
    "*:not([data-allow-motion])": {
      animation: "none !important",
      scrollBehavior: "auto !important",
      transition: "none !important",
    },
  },
  svg: {
    alignSelf: "center",
    verticalAlign: "middle",
  },
  "ul, ol": {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

// Create Stoop instance - types are inferred from createStoop
// We'll create the instance with themes for Provider support
const stoopInstance = createStoop({
  globalCss: globalCssConfig,
  theme: defaultTheme,
  themes: {
    light: defaultTheme,
    dark: darkThemeConfig,
  },
  media,
  utils: {
    // Theme utilities
    // darkOnly uses data-theme attribute set by Stoop Provider
    darkOnly: (value) => {
      if (typeof value === "object" && value !== null) {
        return {
          "[data-theme='dark'] &": value as CSS,
        };
      }

      return {};
    },
    lightOnly: (value) => {
      if (typeof value === "object" && value !== null) {
        return {
          "@media (prefers-color-scheme: light)": value as CSS,
        };
      }

      return {};
    },
    // Responsive breakpoint utilities
    wide: (value) => {
      if (typeof value === "object" && value !== null) {
        return {
          [breakpoints.wide]: value as CSS,
        };
      }

      return {};
    },
    desktop: (value) => {
      if (typeof value === "object" && value !== null) {
        return {
          [breakpoints.desktop]: value as CSS,
        };
      }

      return {};
    },
    desktopX: (value) => {
      if (typeof value === "object" && value !== null) {
        return {
          [breakpoints.desktopX]: value as CSS,
        };
      }

      return {};
    },
    laptop: (value) => {
      if (typeof value === "object" && value !== null) {
        return {
          [breakpoints.laptop]: value as CSS,
        };
      }

      return {};
    },
    laptopX: (value) => {
      if (typeof value === "object" && value !== null) {
        return {
          [breakpoints.laptopX]: value as CSS,
        };
      }

      return {};
    },
    tablet: (value) => {
      if (typeof value === "object" && value !== null) {
        return {
          [breakpoints.tablet]: value as CSS,
        };
      }

      return {};
    },
    tabletX: (value) => {
      if (typeof value === "object" && value !== null) {
        return {
          [breakpoints.tabletX]: value as CSS,
        };
      }

      return {};
    },
    phone: (value) => {
      if (typeof value === "object" && value !== null) {
        return {
          [breakpoints.phone]: value as CSS,
        };
      }

      return {};
    },
    phoneX: (value) => {
      if (typeof value === "object" && value !== null) {
        return {
          [breakpoints.phoneX]: value as CSS,
        };
      }

      return {};
    },
    // Dynamic viewport utilities with modern fallback
    dynamicViewport: (config) => {
      if (
        typeof config === "object" &&
        config !== null &&
        "property" in config &&
        "value" in config &&
        "unit" in config &&
        typeof config.property === "string" &&
        typeof config.value === "string" &&
        typeof config.unit === "string"
      ) {
        const { property, value, unit } = config;

        // Determine axis for feature query based on unit
        const isHeight =
          unit.endsWith("vh") ||
          unit.endsWith("dvh") ||
          unit.endsWith("svh") ||
          unit.endsWith("lvh");
        const featureProp = isHeight ? "height" : "width";
        const dynamicViewportUnit = isHeight ? "dvh" : "dvw";
        const classicUnit = isHeight ? "vh" : "vw";

        return {
          // Classic viewport units as fallback
          [property]: `${value}${classicUnit}`,
          // Use dynamic viewport when supported (updates as UI chrome changes)
          [`@supports (${featureProp}: 100${dynamicViewportUnit})`]: {
            [property]: `${value}${dynamicViewportUnit}`,
          },
        };
      }

      return {};
    },
    // Special breakpoints
    micro: (value) => {
      if (typeof value === "object" && value !== null) {
        return {
          [breakpoints.micro]: value as CSS,
        };
      }

      return {};
    },
    retina: (value) => {
      if (typeof value === "object" && value !== null) {
        return {
          [breakpoints.retina]: value as CSS,
        };
      }

      return {};
    },
    print: (value) => {
      if (typeof value === "object" && value !== null) {
        return {
          [breakpoints.print]: value as CSS,
        };
      }

      return {};
    },
    reduceMotion: (value) => {
      if (typeof value === "object" && value !== null) {
        return {
          "@media (prefers-reduced-motion: reduce)": value as CSS,
        };
      }

      return {};
    },
    // Visibility utilities
    hidden: (value) => {
      if (typeof value === "string" && value in breakpoints) {
        const breakpointValue = breakpoints[value as keyof typeof breakpoints];

        if (typeof breakpointValue === "string") {
          return {
            [breakpointValue]: {
              display: "none !important",
            },
          };
        }
      }

      return {};
    },
    hiddenInline: (value) => {
      if (typeof value === "string" && value in breakpoints) {
        const breakpointValue = breakpoints[value as keyof typeof breakpoints];

        if (typeof breakpointValue === "string") {
          return {
            display: "inline-block !important",
            [breakpointValue]: {
              display: "none !important",
            },
          };
        }
      }

      return {};
    },
    hiddenSpecial: (value) => {
      if (
        typeof value === "string" &&
        (value === "micro" || value === "retina" || value === "print")
      ) {
        return {
          [breakpoints[value]]: {
            display: "none !important",
          },
        };
      }

      return {};
    },
    visible: (value) => {
      if (typeof value === "string" && value in breakpoints) {
        const breakpointValue = breakpoints[value as keyof typeof breakpoints];

        if (typeof breakpointValue === "string") {
          return {
            display: "none",
            [breakpointValue]: {
              display: "block !important",
            },
          };
        }
      }

      return {};
    },
    visibleInline: (value) => {
      if (typeof value === "string" && value in breakpoints) {
        const breakpointValue = breakpoints[value as keyof typeof breakpoints];

        if (typeof breakpointValue === "string") {
          return {
            display: "none",
            [breakpointValue]: {
              display: "inline-block !important",
            },
          };
        }
      }

      return {};
    },
    visibleSpecial: (value) => {
      if (
        typeof value === "string" &&
        (value === "micro" || value === "retina" || value === "print")
      ) {
        return {
          display: "none",
          [breakpoints[value]]: {
            display: "block !important",
          },
        };
      }

      return {};
    },
  },
});

// Export Stoop functions immediately so they can be used below
export const {
  css,
  getCssText,
  globalCss,
  keyframes,
  preloadTheme,
  styled,
  theme,
  createTheme,
  useTheme,
  Provider,
} = stoopInstance;

// Create dark theme (for backward compatibility)
// Note: darkThemeConfig is already merged via themes config, but we keep this for any direct usage
export const darkTheme = createTheme(darkThemeConfig);

// Export keyframes with proper return types
export const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

export const fadeOut = keyframes({
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
  },
});

// Modal/Menu animations
export const slideInScale = keyframes({
  from: {
    opacity: 0,
    transform: "scale(0.95)",
  },
  to: {
    opacity: 1,
    transform: "scale(1)",
  },
});

export const slideOutScale = keyframes({
  from: {
    opacity: 1,
    transform: "scale(1)",
  },
  to: {
    opacity: 0,
    transform: "scale(0.95)",
  },
});

// Bottom slide animations (for mobile modal)
export const slideInUp = keyframes({
  from: {
    transform: "translateX(0) translateY(100%)",
  },
  to: {
    transform: "translateX(0) translateY(0)",
  },
});

export const slideOutDown = keyframes({
  from: {
    transform: "translateX(0) translateY(0)",
  },
  to: {
    transform: "translateX(0) translateY(100%)",
  },
});

// Sidebar slide animations (from right)
export const slideInRight = keyframes({
  from: {
    transform: "translateX(100%)",
  },
  to: {
    transform: "translateX(0)",
  },
});

export const slideOutRight = keyframes({
  from: {
    transform: "translateX(0)",
  },
  to: {
    transform: "translateX(100%)",
  },
});

export const pulse = keyframes({
  // scale and opacity from 0.7 to 1.3 back to 1
  "0%": {
    opacity: 1,
    transform: "scale(1)",
  },
  "50%": {
    opacity: 0.75,
    transform: "scale(1.3)",
  },
  "100%": {
    opacity: 1,
    transform: "scale(1)",
  },
});

// Subtle vertical fade+lift used for small surfaces like popovers, lists
export const fadeInUp = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(4px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const fadeOutDown = keyframes({
  from: {
    opacity: 1,
    transform: "translateY(0)",
  },
  to: {
    opacity: 0,
    transform: "translateY(4px)",
  },
});

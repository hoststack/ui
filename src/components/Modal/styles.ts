import { slideInRight, slideInUp, slideOutDown, slideOutRight, styled } from "../../stoop.config";

export const ModalStyled = styled("div", {
  display: "inline-flex",
  height: "100%",
  verticalAlign: "middle",
});

export const ModalTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const ModalOverlayStyled = styled("div", {
  // Desktop default: sidebar from right
  alignItems: "flex-start",
  backgroundColor: "$overlay",
  display: "flex",
  dynamicViewport: { property: "height", unit: "vh", value: "100" },
  inset: 0,
  justifyContent: "flex-end",
  // Mobile (phone): drawer from bottom, centered
  phone: {
    "& > *": {
      marginLeft: "auto",
      marginRight: "auto",
    },
    alignItems: "flex-end",
    justifyContent: "center",
  },
  pointerEvents: "auto",
  position: "fixed",
  // Mobile (tabletX): drawer from bottom, centered
  tabletX: {
    "& > *": {
      marginLeft: "auto",
      marginRight: "auto",
    },
    alignItems: "flex-end",
    justifyContent: "center",
  },
  variants: {
    animation: {
      false: {},
      true: {},
    },
  },
  zIndex: "$modal",
});

export const ModalGroupStyled = styled("div", {
  backgroundColor: "$surface",
  // Desktop: border on left for sidebar
  borderLeft: "1px solid $border",
  boxSizing: "border-box",
  display: "flex",
  // Desktop default: sidebar behavior - full height, positioned from right
  dynamicViewport: { property: "height", unit: "vh", value: "100" },
  flexDirection: "column",
  maxHeight: "100vh",
  minHeight: 0,
  overflow: "hidden",
  padding: 0,
  // Mobile (phone): drawer behavior - slides up from bottom
  phone: {
    borderLeft: "none",
    borderTop: "1px solid $border",
    boxSizing: "border-box",
    dynamicViewport: { property: "maxHeight", unit: "vh", value: "90" },
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    maxHeight: "90dvh",
    minHeight: "auto",
    transform: "translateX(0) translateY(100%)",
    width: "100% !important",
  },
  position: "relative",
  // Mobile (tabletX): drawer behavior - slides up from bottom
  tabletX: {
    borderLeft: "none",
    borderTop: "1px solid $border",
    boxSizing: "border-box",
    dynamicViewport: { property: "maxHeight", unit: "vh", value: "90" },
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    maxHeight: "90dvh",
    minHeight: "auto",
    transform: "translateX(0) translateY(100%)",
    width: "100% !important",
  },
  variants: {
    animation: {
      false: {
        // Desktop default: slide out to right
        animation: `${slideOutRight} 300ms ease-out`,
        animationFillMode: "forwards",
        // Mobile (phone): slide down
        phone: {
          animation: `${slideOutDown} 300ms ease-in-out`,
          animationFillMode: "forwards",
        },
        // Mobile (tabletX): slide down
        tabletX: {
          animation: `${slideOutDown} 300ms ease-in-out`,
          animationFillMode: "forwards",
        },
      },
      true: {
        // Desktop default: slide in from right
        animation: `${slideInRight} 300ms ease-out`,
        animationFillMode: "forwards",
        // Mobile (phone): slide up from bottom
        phone: {
          animation: `${slideInUp} 300ms ease-in-out`,
          animationFillMode: "forwards",
          transform: "translateX(0) translateY(100%)",
        },
        // Mobile (tabletX): slide up from bottom
        tabletX: {
          animation: `${slideInUp} 300ms ease-in-out`,
          animationFillMode: "forwards",
          transform: "translateX(0) translateY(100%)",
        },
      },
    },
    small: {
      false: {
        // Desktop default: 60vw width (inherited from base)
        // Mobile (phone): full width, max height 90vh
        phone: {
          dynamicViewport: { property: "maxHeight", unit: "vh", value: "90" },
          height: "auto",
          width: "100% !important",
        },
        // Mobile (tabletX): full width, max height 90vh
        tabletX: {
          dynamicViewport: { property: "maxHeight", unit: "vh", value: "90" },
          height: "auto",
          width: "100% !important",
        },
      },
      true: {
        // Mobile (phone): full width, smaller max height 40vh - override desktop width
        phone: {
          dynamicViewport: { property: "maxHeight", unit: "vh", value: "40" },
          height: "auto",
          width: "100% !important",
        },
        // Mobile (tabletX): full width, smaller max height 40vh - override desktop width
        tabletX: {
          dynamicViewport: { property: "maxHeight", unit: "vh", value: "40" },
          height: "auto",
          width: "100% !important",
        },
        // Desktop default: smaller width 30vw
        width: "30vw",
      },
    },
  },
  // Desktop default width
  width: "60vw",
});

export const ModalHeaderStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$surfaceLight",
  borderBottom: "1px solid $borderLight",
  display: "flex",
  flexShrink: 0,
  justifyContent: "space-between",
  padding: "$medium",
});

export const ModalContentStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backgroundColor: "$background",
  boxSizing: "border-box",
  flex: 1,
  minHeight: 0,
  overflowX: "hidden",
  overflowY: "auto",
  padding: "$medium",
  phone: {
    margin: "0 auto",
    maxWidth: "600px",
    padding: "$large $medium",
    paddingBottom: "calc($medium + env(safe-area-inset-bottom))",
    width: "100%",
  },
  // Mobile: match content styling
  tabletX: {
    margin: "0 auto",
    maxWidth: "600px",
    padding: "$large $medium",
    paddingBottom: "calc($medium + env(safe-area-inset-bottom))",
    width: "100%",
  },
});

export const ModalFooterStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$background",
  borderTop: "1px solid $borderLight",
  display: "flex",
  flexShrink: 0,
  justifyContent: "flex-end",
  padding: "$medium",
});

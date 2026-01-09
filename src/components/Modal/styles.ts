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
  alignItems: "flex-start",
  backgroundColor: "$overlay",
  display: "flex",
  dynamicViewport: { property: "height", unit: "vh", value: "100" },
  inset: 0,
  justifyContent: "flex-end",
  // Mobile: align to bottom
  phone: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  pointerEvents: "auto",
  position: "fixed",
  tablet: {
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
  borderLeft: "1px solid $border",
  display: "flex",
  // Desktop: sidebar behavior - full height, positioned from right
  dynamicViewport: { property: "height", unit: "vh", value: "100" },
  flexDirection: "column",
  overflow: "hidden",
  padding: 0,
  position: "relative",
  variants: {
    animation: {
      false: {
        animation: `${slideOutRight} 300ms ease-out`,
        animationFillMode: "forwards",
        // Mobile: override with slide down animation
        phone: {
          animation: `${slideOutDown} 300ms ease-in-out`,
          animationFillMode: "forwards",
        },
        tablet: {
          animation: `${slideOutDown} 300ms ease-in-out`,
          animationFillMode: "forwards",
        },
      },
      true: {
        animation: `${slideInRight} 300ms ease-out`,
        animationFillMode: "forwards",
        // Mobile: override with slide up animation
        phone: {
          animation: `${slideInUp} 300ms ease-in-out`,
          animationFillMode: "forwards",
        },
        tablet: {
          animation: `${slideInUp} 300ms ease-in-out`,
          animationFillMode: "forwards",
        },
      },
    },
    small: {
      false: {
        phone: {
          dynamicViewport: { property: "maxHeight", unit: "vh", value: "90" },
          height: "auto",
          width: "100%",
        },
        // Mobile: full width, max height from bottom
        tablet: {
          dynamicViewport: { property: "maxHeight", unit: "vh", value: "90" },
          height: "auto",
          width: "100%",
        },
      },
      true: {
        phone: {
          dynamicViewport: { property: "maxHeight", unit: "vh", value: "40" },
          height: "auto",
          width: "100%",
        },
        // Mobile: full width, smaller max height
        tablet: {
          dynamicViewport: { property: "maxHeight", unit: "vh", value: "40" },
          height: "auto",
          width: "100%",
        },
        width: "30vw",
      },
    },
  },
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
  flex: 1,
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
  tablet: {
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

import { slideInScale, slideOutScale, styled } from "../../stoop.config";

export const MenuStyled = styled("div", {
  display: "inline-flex",
  height: "100%",
  verticalAlign: "middle",
});

export const MenuTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const MenuOverlayStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$overlay",
  display: "flex",
  dynamicViewport: { property: "height", unit: "vh", value: "100" },
  inset: 0,
  justifyContent: "center",
  pointerEvents: "auto",
  position: "fixed",
  variants: {
    animation: {
      false: {},
      true: {},
    },
  },
  zIndex: "$menu",
});

export const MenuGroupStyled = styled("div", {
  backgroundColor: "$surface",
  border: "1px solid $border",
  display: "flex",
  dynamicViewport: { property: "maxHeight", unit: "vh", value: "80" },
  flexDirection: "column",
  isolation: "isolate",
  maxWidth: "420px",
  minHeight: "auto",
  overflow: "hidden",
  padding: 0,
  phone: {
    dynamicViewport: { property: "maxHeight", unit: "vh", value: "90" },
    maxWidth: "95%",
  },
  position: "relative",
  variants: {
    animation: {
      false: {
        animation: `${slideOutScale} 200ms ease-out`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${slideInScale} 200ms ease-out`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "100%",
});

export const MenuItemStyled = styled("div", {
  "&:active": {
    transform: "translateY(1px)",
  },
  "&:hover": {
    backgroundColor: "$surfaceHover",
  },
  alignItems: "center",
  backgroundColor: "$surface",
  borderLeft: "2px solid transparent",
  color: "$text",
  cursor: "pointer",
  display: "flex",
  fontSize: "$default",
  justifyContent: "space-between",
  margin: "$smaller",
  padding: "$smaller $small",
  textAlign: "left",
  transition: "$default",
  userSelect: "none",
  variants: {
    focused: {
      true: {
        backgroundColor: "$surfaceHover",
      },
    },
    selected: {
      true: {
        backgroundColor: "$surfaceLight",
        borderLeft: "2px solid $yellow",
        fontFamily: "$fonts.default",
        fontWeight: 400,
      },
    },
  },
});

export const MenuItemContentStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  gap: "$small",
  justifyContent: "space-between",
  width: "100%",
});

export const MenuItemIconStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  variants: {
    align: {
      left: {
        order: -1,
      },
      right: {
        order: 1,
      },
    },
  },
});

export const MenuContentStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backgroundColor: "$background",
  flex: 1,
  overflowX: "hidden",
  overflowY: "auto",
  padding: "$medium $small",
});

export const MenuFooterStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$background",
  borderTop: "1px solid $borderLight",
  display: "flex",
  flexShrink: 0,
  justifyContent: "flex-end",
  padding: "$medium $small",
});

export const MenuHeaderStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$surfaceLight",
  borderBottom: "1px solid $borderLight",
  display: "flex",
  flexShrink: 0,
  justifyContent: "space-between",
  padding: "$small $medium",
});

export default MenuStyled;

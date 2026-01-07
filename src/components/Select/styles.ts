import { fadeInUp, fadeOutDown, styled } from "../../stoop.config";

const stickyBase = {
  backdropFilter: "blur(16px)",
  backgroundColor: "transparent",
  position: "sticky",
  top: 0,
  zIndex: "$select",
} as const;

export const SelectStyled = styled("div", {
  display: "inline-block",
  position: "relative",
  verticalAlign: "middle",
});

export const SelectTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const SelectGroupStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backdropFilter: "blur(8px)",
  backgroundColor: "$glass",
  border: "1px solid $border",
  lineBreak: "auto",
  overflowY: "auto",
  padding: "$smallest $smaller",
  pointerEvents: "auto",
  textAlign: "left !important",
  transformOrigin: "top center",
  variants: {
    animation: {
      false: {
        animation: `${fadeOutDown} 200ms ease-out`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeInUp} 200ms ease-out`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "100%",
  willChange: "transform, opacity",
  zIndex: "$select",
});

export const SelectFilterStyled = styled("div", {
  ...stickyBase,
  padding: "$small",
});

export const SelectItemStyled = styled("div", {
  "&:active": {
    transform: "translateY(1px)",
  },
  "&:hover": {
    backgroundColor: "$surfaceHover",
  },
  alignItems: "center",
  backgroundColor: "$background",
  borderLeft: "2px solid transparent",
  color: "$text",
  cursor: "pointer",
  display: "flex",
  fontSize: "$default",
  gap: "$small",
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
    last: {
      true: {
        borderTop: "1px solid $border",
        marginTop: "$small",
        paddingTop: "$small",
      },
    },
    selected: {
      true: {
        backgroundColor: "$surfaceLight",
        borderLeft: "2px solid $yellow",
        color: "$text",
        fontFamily: "$default",
        fontWeight: 400,
      },
    },
  },
});

export const SelectEmptyStyled = styled("div", {
  color: "$text",
  fontSize: "$small",
  opacity: "$light",
  padding: "$medium",
  textAlign: "center",
});

export const SelectLabelStyled = styled("div", {
  ...stickyBase,
  borderBottom: "1px solid $borderLight",
  fontFamily: "$default",
  fontWeight: 600,
  padding: "$smaller $small $smallest $small",
});

export const SelectIconStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  transition: "$default",
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

export default SelectStyled;

import { pulse, styled } from "../../stoop.config";

export const ButtonStyled = styled("button", {
  "&:active": {
    outline: 0,
    transform: "translateY(1px)",
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: "$light",
  },
  "&:focus, &:focus-visible": {
    outline: 0,
  },
  alignContent: "center",
  alignItems: "center",
  appearance: "none",
  backgroundColor: "$surface",
  border: "1px solid $border",
  color: "$text",
  cursor: "pointer",
  display: "inline-flex",
  fontFamily: "$default",
  fontSize: "$default",
  fontWeight: 600,
  justifyContent: "center",
  letterSpacing: "-0.02em",
  lineHeight: "$lineHeights.default",
  margin: 0,
  minHeight: "34px",
  outline: 0,
  padding: "$smallest $small",
  phone: {
    minHeight: "33px",
    padding: "$smallest $small",
  },
  position: "relative",
  textOverflow: "ellipsis",

  transition: "$default",

  variants: {
    block: {
      true: {
        display: "block",
        width: "100%",
      },
    },
    loading: {
      true: {
        cursor: "wait",
        opacity: "$light",
      },
    },
    small: {
      true: {
        fontSize: "$small",
        lineHeight: "$lineHeights.small",
        minHeight: "28px",
        padding: "$smallest $small",

        phone: {
          minHeight: "25px",
        },
      },
    },
    theme: {
      default: {
        "&:not(:disabled):hover": {
          backgroundColor: "$surfaceHover",
          transform: "translateY(-2px)",
        },
      },
      minimal: {
        "&:not(:disabled):hover": {
          backgroundColor: "$surfaceHover",
          borderColor: "$border",
          transform: "translateY(-2px)",
        },
        backgroundColor: "transparent",
        borderColor: "transparent",
      },
      solid: {
        "&:not(:disabled):hover": {
          opacity: "$default",
          transform: "translateY(-2px)",
        },
        backgroundColor: "$text",
        borderColor: "$text",
        color: "$background",
      },
      yellow: {
        "&:not(:disabled):hover": {
          opacity: "$default",
          transform: "translateY(-2px)",
        },
        backgroundColor: "$yellow",
        borderColor: "$yellow",
        color: "$text",
        darkOnly: {
          color: "$background",
        },
      },
    },
  },
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  width: "fit-content",
});

export const ButtonIconStyled = styled("span", {
  display: "inline-flex",
  justifyContent: "center",
  transition: "$default",

  variants: {
    align: {
      left: {
        marginRight: "$small",
      },
      right: {
        [`${ButtonStyled}:hover &`]: {
          transform: "translateX(2px)",
        },
        marginLeft: "$small",
      },
      smallLeft: {
        marginRight: "$smaller",
      },
      smallRight: {
        [`${ButtonStyled}:hover &`]: {
          transform: "translateX(2px)",
        },
        marginLeft: "$smaller",
      },
    },
  },
  verticalAlign: "middle",
});

export const ButtonLoadingStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$surface",
  display: "flex",
  inset: 0,
  justifyContent: "center",
  position: "absolute",
  zIndex: 1,
});

export const NewDotStyled = styled("span", {
  animation: `${pulse} 3s infinite linear`,
  borderRadius: "50%",
  height: "8px",
  position: "absolute",
  right: "-3px",
  top: "-3px",
  variants: {
    theme: {
      default: {
        backgroundColor: "$yellow",
      },
      minimal: {
        backgroundColor: "$yellow",
      },
      solid: {
        backgroundColor: "$yellow",
      },
      yellow: {
        backgroundColor: "$text",
      },
    },
  },
  width: "8px",
  zIndex: 2,
});

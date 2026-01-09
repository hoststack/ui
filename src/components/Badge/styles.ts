import { styled, fadeOut, pulse } from "../../stoop.config";

export const BadgeStyled = styled("span", {
  alignContent: "center !important",
  alignItems: "center !important",
  backgroundColor: "$surface",
  border: "1px solid $border",
  color: "$text",
  display: "inline-flex",
  fontFamily: "$default",
  fontSize: "$small",
  fontWeight: 600,
  justifyContent: "center",
  lineHeight: "$lineHeights.default",
  marginBottom: "0 !important",
  padding: "$smallest $small",
  position: "relative",

  variants: {
    animation: {
      true: {
        animation: `${fadeOut} 0.15s linear`,
        animationFillMode: "forwards",
      },
    },
    block: {
      true: {
        justifyContent: "initial",
        width: "100%",
      },
    },
    link: {
      true: {
        "&:hover": {
          backgroundColor: "$surfaceHover",
          borderColor: "$border",
        },
        cursor: "pointer",
        transition: "$default",
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
        fontSize: "$micro",
        padding: "$smallest $smaller",
      },
    },
    theme: {
      default: {
        backgroundColor: "$surface",
        borderColor: "$border",
      },
      solid: {
        backgroundColor: "$text",
        borderColor: "$text",
        color: "$background",
      },
      yellow: {
        backgroundColor: "$surface",
        borderColor: "$yellow",
        borderLeftWidth: "5px",
      },
    },
    variant: {
      border: {},
      theme: {},
    },
  },
  verticalAlign: "middle",
});

export const BadgeIconStyled = styled("span", {
  color: "inherit",
  display: "inline-flex",

  variants: {
    align: {
      left: {
        marginRight: "$small",
      },
      right: {
        marginLeft: "$small",
      },
      smallLeft: {
        marginRight: "$smaller",
      },
      smallRight: {
        marginLeft: "$smaller",
      },
    },
    hover: {
      true: {
        "&:hover": {
          opacity: "$light",
          transition: "$default",
        },
        cursor: "pointer",
      },
    },
  },
  verticalAlign: "middle",
});

export const BadgeLoadingStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$surface",
  display: "flex",
  inset: 0,
  justifyContent: "center",
  position: "absolute",
});

export const NewDotStyled = styled("span", {
  animation: `${pulse} 3s infinite`,
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

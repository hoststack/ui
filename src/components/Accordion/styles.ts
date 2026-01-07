import { styled } from "../../stoop.config";
import Box from "../Box";
import Button from "../Button";

export const AccordionStyled = styled("div", {
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: "$small",
  transition: "$default",
  width: "100%",
});

export const AccordionItemStyled = styled("div", {
  width: "100%",
});

export const AccordionButtonStyled = styled(Button, {
  "&::before": {
    backgroundColor: "transparent",
    bottom: 0,
    content: "",
    left: 0,
    position: "absolute",
    top: 0,
    transition: "$default",
    width: "2px",
  },
  "&:active": {
    transform: "translateY(1px)",
  },
  "& svg": {
    alignSelf: "flex-start",
    flexShrink: 0,
    transition: "$default",
  },
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$smaller $small",
  position: "relative",
  textAlign: "left",
  transition: "$default",
  variants: {
    expanded: {
      true: {
        "&::before": {
          backgroundColor: "$yellow",
        },
        "& svg": {
          transform: "rotate(90deg)",
        },
        backgroundColor: "$surfaceLight",
        borderBottom: "none",
      },
    },
  },
  whiteSpace: "normal",

  width: "100%",
  wordBreak: "break-word",
});

export const AccordionCardStyled = styled(Box, {
  cursor: "pointer",
});

export const AccordionListContentStyled = styled("div", {
  border: "1px solid transparent",
  overflow: "hidden",
  transition: "all 200ms ease-out",
  variants: {
    expanded: {
      false: {
        height: 0,
        opacity: 0,
        padding: "0 $small",
      },
      true: {
        borderColor: "$border",
        height: "auto",
        opacity: 1,
        padding: "$medium $small",
      },
    },
  },
  willChange: "height, opacity, padding",
});

// Grid content removed

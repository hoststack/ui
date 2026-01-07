import { styled } from "../../stoop.config";

const interactiveStyles = {
  borderColor: "$text",
};

export const FieldStyled = styled("div", {
  position: "relative",

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: "$light",
      },
    },
  },
  width: "100%",
});

export const FieldCoreStyled = styled("div", {
  "&:focus-within": {
    ...interactiveStyles,
  },
  "&:hover": interactiveStyles,
  backgroundColor: "$surface",
  border: "1px solid $border",
  display: "flex",
  flexDirection: "column",
  transition: "$default",
  width: "100%",
});

export const FieldAreaStyled = styled("textarea", {
  "&::placeholder": {
    color: "$text",
    opacity: "$light",
  },
  "&:after": {
    clear: "both",
    content: '""',
  },
  "&:focus": {
    outline: "none",
  },
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  color: "$text",
  display: "block",
  fontFamily: "$fonts.default",
  fontSize: "$default",
  minHeight: "$largest",
  padding: "$small",
  phone: {
    fontSize: "16px !important",
  },
  resize: "vertical",

  width: "100%",
});

export const FieldFunctionStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$surfaceLight",
  borderTop: "1px solid $borderLight",
  display: "flex",
  gap: "$smaller",
  justifyContent: "flex-end",
  padding: "$smaller $small",

  phone: {
    justifyContent: "flex-start",
  },
});

export const FieldCallbackStyled = styled("div", {
  display: "block",
  paddingTop: "$small",
  textAlign: "left",
});

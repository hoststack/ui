import { styled } from "../../stoop.config";

const interactiveStyles = {
  borderColor: "$text",
};

export const InputStyled = styled("div", {
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

export const InputCoreStyled = styled("div", {
  "&:focus-within": {
    ...interactiveStyles,
  },
  "&:hover": interactiveStyles,
  alignItems: "center",
  alignSelf: "center",
  backgroundColor: "$surface",
  border: "1px solid $border",
  display: "flex",
  justifyContent: "space-between",
  transition: "$default",
  width: "100%",
});

export const InputAreaStyled = styled("input", {
  "&::placeholder": {
    color: "$text",
    opacity: "$light",
  },
  "&:after": {
    clear: "both",
    content: '""',
  },
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  color: "$text",
  display: "block",
  flex: "1 1 auto",
  fontFamily: "$fonts.default",
  fontSize: "$default",
  height: "$large",
  minWidth: 0,
  padding: "0 $small",
  phone: {
    fontSize: "16px !important",
  },
});

export const InputFunctionStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  flexBasis: "auto",
  flexDirection: "row",
  gap: "$smaller",
  justifyContent: "flex-start",
  padding: "0 $small 0 0",
});

export const InputCallbackStyled = styled("div", {
  display: "block",
  paddingTop: "$small",
  textAlign: "left",
});

import { styled } from "../../stoop.config";

export const AvatarStyled = styled("div", {
  alignSelf: "center",
  border: "1px solid $border",
  display: "inline-flex",
  height: "100%",
  img: {
    height: "100%",
    objectFit: "cover !important",
    width: "100%",
  },
  justifyContent: "center",

  span: {
    alignItems: "center",
    color: "$text",
    display: "flex",
    fontFamily: "$default",
    fontSize: "$small",
    fontWeight: 600,
    justifyContent: "center",
    overflow: "hidden",
    textTransform: "uppercase",
  },

  variants: {
    theme: {
      default: {
        backgroundColor: "$surface",
      },
      yellow: {
        backgroundColor: "$yellow",
      },
    },
  },
  verticalAlign: "middle",
});

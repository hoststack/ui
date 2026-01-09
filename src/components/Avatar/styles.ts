import { styled } from "../../stoop.config";

export const AvatarStyled = styled("div", {
  alignItems: "center",
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
    height: "100%",
    justifyContent: "center",
    lineHeight: 1,
    margin: 0,
    overflow: "hidden",
    textTransform: "uppercase",
    width: "100%",
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

import { styled } from "../../stoop.config";
import { TextStyled } from "../Text/styles";

export const StackStyled = styled("div", {
  margin: 0,
  variants: {
    direction: {
      column: {
        display: "flex",
        flexDirection: "column",
      },
      row: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: "$small",
        paddingRight: "$small",
        phone: {
          paddingLeft: "$smaller",
          paddingRight: "$smaller",
        },
      },
    },
    inline: {
      true: {
        [`& ${TextStyled}`]: {
          marginBottom: "0 !important",
          verticalAlign: "middle",
        },
      },
    },
    inverted: {
      true: {
        backgroundColor: "$background",
        color: "$text",
      },
    },
    minimal: {
      true: {
        paddingLeft: "0 !important",
        paddingRight: "0 !important",
      },
    },
  },
});

export default StackStyled;

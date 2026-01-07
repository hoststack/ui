import { styled } from "../../stoop.config";

export const ViewStyled = styled("section", {
  backgroundColor: "$background",
  color: "$text",
  paddingLeft: "$medium",
  paddingRight: "$medium",
  phone: {
    paddingLeft: "$small",
    paddingRight: "$small",
  },
  position: "relative",
  variants: {
    inverted: {
      true: {
        backgroundColor: "$background",
        color: "$text",
      },
    },
  },
});

export const ViewContainerStyled = styled("div", {
  position: "relative",

  variants: {
    app: {
      false: {
        width: "100%",
      },
      true: {
        desktopX: {
          maxWidth: "2400px",
        },
        margin: "0 auto",
        wide: {
          maxWidth: "2800px",
        },
        width: "98%",
      },
    },
    container: {
      false: {
        width: "100%",
      },
      true: {
        desktopX: {
          maxWidth: "1900px",
        },
        margin: "0 auto",
        wide: {
          maxWidth: "2200px",
        },
        width: "96%",
      },
    },
  },
  zIndex: 2,
});

export default ViewStyled;

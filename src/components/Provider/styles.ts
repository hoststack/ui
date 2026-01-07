import { styled } from "../../stoop.config";

export const ProviderStyled = styled("main", {
  position: "relative",
});

export const ToastStyled = styled("div", {
  "&:hover": {
    opacity: "$default",
  },
  backdropFilter: "blur(8px)",
  cursor: "pointer",
  marginBottom: "$small",
  maxWidth: "600px",
  padding: "$smaller $small",
  phone: {
    "&:last-child": {
      marginBottom: "$small",
    },
    margin: "0 auto",
    marginBottom: "0",
    marginTop: "$small",
    maxWidth: "90%",
    textAlign: "center",
  },
  pointerEvents: "all",
  width: "fit-content",
});

export default ProviderStyled;

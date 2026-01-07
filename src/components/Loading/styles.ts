import { keyframes, styled } from "../../stoop.config";

const animationDuration = "8s";

const houseToSquareSlide = keyframes({
  "0%": {
    clipPath: "polygon(10% 50%, 50% 15%, 90% 50%, 90% 100%, 10% 100%)",
    transform: "translate(-50%, -50%)",
  },
  "10%": {
    clipPath: "polygon(10% 50%, 50% 15%, 90% 50%, 90% 100%, 10% 100%)",
    transform: "translate(-50%, -50%)",
  },

  "15%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(-50%, -50%)",
  },

  "20%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(-100%, -100%)",
  },

  "30%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(0%, -100%)",
  },

  "35%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(-50%, -50%)",
  },

  "40%": {
    clipPath: "polygon(10% 50%, 50% 15%, 90% 50%, 90% 100%, 10% 100%)",
    transform: "translate(-50%, -50%)",
  },

  "50%": {
    clipPath: "polygon(10% 50%, 50% 15%, 90% 50%, 90% 100%, 10% 100%)",
    transform: "translate(-50%, -50%)",
  },

  "55%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(-50%, -50%)",
  },

  "60%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(0%, 0%)",
  },

  "70%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(-100%, 0%)",
  },

  "75%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transform: "translate(-50%, -50%)",
  },

  "80%": {
    clipPath: "polygon(10% 50%, 50% 15%, 90% 50%, 90% 100%, 10% 100%)",
    transform: "translate(-50%, -50%)",
  },

  "100%": {
    clipPath: "polygon(10% 50%, 50% 15%, 90% 50%, 90% 100%, 10% 100%)",
    transform: "translate(-50%, -50%)",
  },
});

export const LoadingStyled = styled("div", {
  "&::before": {
    animation: `${houseToSquareSlide} ${animationDuration} cubic-bezier(0.45, 0, 0.55, 1) infinite`,
    backgroundColor: "currentColor",
    content: "",
    height: "50%",
    left: "50%",
    position: "absolute",
    top: "50%",
    transformOrigin: "center",
    width: "50%",
  },
  backgroundColor: "$yellow",
  display: "inline-flex",
  height: "$medium",
  position: "relative",

  width: "$medium",
});

export const LoadingOverlayStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$text",
  border: "1px solid $text",
  bottom: "$medium",
  color: "$background",
  display: "flex",
  justifyContent: "center",
  maxWidth: "600px",
  padding: "$smallest $small",
  phone: {
    left: "50%",
    maxWidth: "95%",
    textAlign: "center",
    transform: "translateX(-50%)",
    width: "fit-content",
  },
  pointerEvents: "none",
  position: "fixed",
  right: "$medium",
  userSelect: "none",
  zIndex: "$toast",
});

export const LoadingOverlayTitledStyled = styled("div", {
  marginLeft: "$small",
});

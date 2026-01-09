import { fadeInUp, fadeOutDown, styled } from "../../stoop.config";

export const PlacesStyled = styled("div", {
  display: "block",
  position: "relative",
  width: "100%",
});

export const PlacesDropdownStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backgroundColor: "$surface",
  border: "1px solid $border",
  lineBreak: "auto",
  overflowY: "auto",
  padding: "$smallest $smaller",
  pointerEvents: "auto",
  textAlign: "left !important",
  transformOrigin: "top center",
  variants: {
    animation: {
      false: {
        animation: `${fadeOutDown} 200ms ease-out`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeInUp} 200ms ease-out`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "100%",
  willChange: "transform, opacity",
  zIndex: "$select",
});

export const PlacesItemStyled = styled("div", {
  "&:active": {
    transform: "translateY(1px)",
  },
  "&:hover": {
    backgroundColor: "$surfaceHover",
  },
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  gap: "$small",
  justifyContent: "space-between",
  margin: "$smaller",
  padding: "$smaller $small",
  textAlign: "left",
  transition: "$default",
  userSelect: "none",
});

export const PlacesEmptyStyled = styled("div", {
  color: "$text",
  fontSize: "$small",
  opacity: "$light",
  padding: "$medium",
  textAlign: "center",
});

export default PlacesStyled;

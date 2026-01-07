import { fadeInUp, fadeOutDown, styled } from "../../stoop.config";

export const PopoverStyled = styled("div", {
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const PopoverTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const PopoverContentStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backdropFilter: "blur(16px)",
  backgroundColor: "$glass",
  border: "1px solid $border",
  overflowY: "auto",
  padding: "$small $medium",
  pointerEvents: "auto",
  textAlign: "left !important",
  transformOrigin: "top center",
  variants: {
    animation: {
      false: {
        animation: `${fadeOutDown} 180ms ease-out`,
        animationFillMode: "forwards",
        reduceMotion: {
          animation: "none",
        },
      },
      true: {
        animation: `${fadeInUp} 180ms ease-out`,
        animationFillMode: "forwards",
        reduceMotion: {
          animation: "none",
        },
      },
    },
    minimal: {
      true: {
        padding: 0,
      },
    },
    small: {
      false: {
        maxWidth: "420px",
        minWidth: "250px",
        phone: {
          maxWidth: "calc(100vw - $large)",
        },
      },
      true: {
        maxWidth: "280px",
        minWidth: "200px",
        phone: {
          maxWidth: "calc(100vw - $large)",
        },
      },
    },
  },
  width: "100%",
  willChange: "transform, opacity",
  zIndex: "$popover",
});

export default PopoverStyled;

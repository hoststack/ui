import { styled } from "../../stoop.config";

const highlight = {
  padding: "calc($smallest / 2) $smaller",
};

const link = {
  "&:hover": {
    backgroundColor: "$surface",
  },
  borderBottom: "1px solid $border",
  color: "$text",
  cursor: "pointer",
  margin: 0,
  textDecoration: "none !important",
  transition: "$default",
};

const mutedStyles = {
  opacity: "$default",
};

export const TextSizes = {
  a: {
    marginBottom: 0,
    textDecoration: "none !important",
  },
  h1: {
    fontFamily: "$heading",
    fontSize: "$h1",
    fontWeight: 600,
    lineHeight: "$small",
    marginBottom: "$medium",
  },
  h2: {
    fontFamily: "$heading",
    fontSize: "$h2",
    fontWeight: 600,
    lineHeight: "$small",
    marginBottom: "$medium",
  },
  h3: {
    fontFamily: "$heading",
    fontSize: "$h3",
    fontWeight: 600,
    lineHeight: "$small",
    marginBottom: "$medium",
  },
  h4: {
    fontFamily: "$heading",
    fontSize: "$h4",
    fontWeight: 600,
    lineHeight: "$small",
    marginBottom: "$medium",
  },
  h5: {
    fontFamily: "$heading",
    fontSize: "$h5",
    fontWeight: 600,
    lineHeight: "$default",
    marginBottom: "$small",
  },
  h6: {
    fontFamily: "$heading",
    fontSize: "$h6",
    fontWeight: 600,
    lineHeight: "$default",
    marginBottom: "$small",
  },
  label: {
    color: "$text",
    display: "block",
    fontFamily: "$heading",
    fontSize: "$small",
    fontWeight: 600,
    lineHeight: "$default",
    marginBottom: "$smaller",
    opacity: "$default",
  },
  li: {
    fontSize: "$default",
    lineHeight: "$default",
    marginBottom: "$smaller",
  },
  micro: {
    color: "$text",
    display: "block",
    fontSize: "$micro",
    lineHeight: "$default",
    marginBottom: "$smaller",
    opacity: "$default",
  },
  ol: {
    listStyle: "decimal inside !important",
    listStylePosition: "inside",
    listStyleType: "decimal",
    marginBottom: 0,
    paddingLeft: "$small",
  },
  p: {
    color: "$text",
    fontFamily: "$default",
    fontSize: "$default",
    lineHeight: "$default",
    marginBottom: "$small",
  },
  small: {
    color: "$text",
    display: "block",
    fontSize: "$small",
    lineHeight: "$small",
    marginBottom: "$smaller",
    opacity: "$default",
  },
  span: {
    fontSize: "inherit",
    fontWeight: 400,
    lineHeight: "inherit",
  },
  strong: {
    fontFamily: "$heading",
    fontSize: "inherit",
    fontWeight: 600,
    lineHeight: "inherit",
  },
  ul: {
    listStyle: "disc inside !important",
    listStylePosition: "inside",
    listStyleType: "disc",
    marginBottom: 0,
    paddingLeft: "$small",
  },
};

export const TextStyled = styled("div", {
  "&:last-child": {
    marginBottom: "0 !important",
  },
  color: "$text",
  marginBlock: "0",
  paddingBlock: "0",
  variants: {
    accent: {
      true: mutedStyles,
    },
    hero: {
      true: {
        color: "$text",
        mask: "linear-gradient(to bottom, black 0%, black 20%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.35) 100%)",
        WebkitMask:
          "linear-gradient(to bottom, black 0%, black 20%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.35) 100%)",
      },
    },
    highlight: {
      default: {
        ...highlight,
        backgroundColor: "$surface",
      },
      yellow: {
        ...highlight,
        backgroundColor: "$yellow",
      },
    },
    inline: {
      false: {
        verticalAlign: "baseline !important",
      },
      true: {
        alignSelf: "center",
        display: "inline-flex !important",
        marginBottom: "0 !important",
        marginTop: "0 !important",
        verticalAlign: "middle",
      },
    },
    link: {
      default: {
        ...link,
      },
      minimal: {
        "&:hover": {
          backgroundColor: "$surface",
        },
        borderBottom: "none !important",
        color: "$text",
        cursor: "pointer",
        margin: 0,
        textDecoration: "none !important",
        transition: "$default",
      },
    },
    muted: {
      true: mutedStyles,
    },
    size: TextSizes,
    truncate: {
      "1": {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      "2": {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 2,
      },
      "3": {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 3,
      },
      "4": {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 4,
      },
    },
  },

  verticalAlign: "baseline",
});

export default TextStyled;

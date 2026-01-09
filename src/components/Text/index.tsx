import { Fragment, type JSX } from "react";
import { Balancer } from "react-wrap-balancer";

import { ArrowTopRightIcon } from "../../icons";
import { Icon, type IText } from "../../index";
import { TextStyled } from "./styles";

export default function Text({
  accent,
  as = "p",
  balanced,
  bottom,
  children,
  css,
  hero,
  highlight,
  href,
  inline,
  link,
  muted,
  override,
  rel,
  target,
  top,
  truncate,
  ...rest
}: IText): JSX.Element {
  const TextBalancer = balanced ? Balancer : Fragment;
  const elementType = as || "p";
  const styleSize = override || as || "p";
  const isAnchor = as === "a";
  const isExternalLink = isAnchor && target === "_blank";
  const shouldShowInline = inline && !["span", "strong"].includes(as);

  return (
    <TextStyled
      accent={accent}
      as={elementType}
      css={{
        ...(top && {
          marginTop: 0,
          paddingTop: `$${top}`,
        }),
        ...(bottom && {
          marginBottom: 0,
          paddingBottom: `$${bottom}`,
        }),
        ...(inline && {
          marginBottom: "0 !important",
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
          marginTop: "0 !important",
        }),
        ...css,
      }}
      hero={hero}
      highlight={highlight}
      href={isAnchor ? href : undefined}
      {...(shouldShowInline && { inline: true })}
      link={link || (isAnchor ? "default" : undefined)}
      muted={muted}
      rel={isAnchor ? (isExternalLink ? rel || "noopener noreferrer" : rel) : undefined}
      size={styleSize}
      target={isAnchor ? target : undefined}
      truncate={truncate}
      {...rest}>
      <TextBalancer>{children}</TextBalancer>
      {isExternalLink && (
        <Icon
          css={{
            marginLeft: "$smallest",
            marginTop: "-$smallest",
          }}
          forceSize={18}
          radix={<ArrowTopRightIcon />}
        />
      )}
    </TextStyled>
  );
}

Text.displayName = "Text";

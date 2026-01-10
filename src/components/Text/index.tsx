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
  const styleSize = override || as || "p";
  const isAnchor = as === "a";
  const isExternalLink = isAnchor && target === "_blank";
  const shouldShowInline = inline && !["span", "strong"].includes(as);

  return (
    <TextStyled
      accent={accent}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      as={as as any}
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
      {...(isAnchor && href ? { href } : {})}
      {...(shouldShowInline && { inline: true })}
      link={link || (isAnchor ? "default" : undefined)}
      muted={muted}
      {...(isAnchor ? { rel: isExternalLink ? rel || "noopener noreferrer" : rel } : {})}
      size={styleSize}
      {...(isAnchor && target ? { target } : {})}
      truncate={truncate ? (String(truncate) as "1" | "2" | "3" | "4") : undefined}
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

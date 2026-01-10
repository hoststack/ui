import { useState, type JSX } from "react";

import { EnterIcon, ExitIcon, CrossCircledIcon } from "../../icons";
import { Button, Loading, Icon, type IBox } from "../../index";
import {
  BoxExitStyled,
  BoxExpanderTrigger,
  BoxFlexStyled,
  BoxFooterStyled,
  BoxHeaderStyled,
  BoxInnerStyled,
  BoxLoadingStyled,
  BoxStyled,
  BoxImageStyled,
} from "./styles";

export default function Box({
  border,
  children,
  closable,
  css,
  cta,
  expandable,
  expandableHeight,
  footer,
  header,
  hover,
  id,
  image,
  imageCTA,
  imageFit,
  imageHeight,
  imagePosition,
  imageTarget,
  loading,
  minimal,
  onClick,
  role,
  small,
  tabIndex,
  theme = "default",
}: IBox): JSX.Element | null {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 100);
  }

  const padding = header || footer || image || minimal ? "none" : small ? "small" : "default";
  const hasInteraction = !!(cta || imageCTA || onClick);
  const isHoverEnabled = !!(hover ?? hasInteraction);

  if (!isMounted) return null;

  return (
    <BoxStyled
      animation={!isOpen}
      aria-busy={!!loading || undefined}
      aria-label={cta ? (typeof header === "string" ? header : undefined) : undefined}
      as={cta ? "a" : "div"}
      border={border}
      collapsed={expandable && !isExpanded}
      css={{
        ...(expandable && expandableHeight && !isExpanded && { maxHeight: expandableHeight }),
        ...css,
      }}
      footer={!!footer}
      hover={!loading && isHoverEnabled}
      {...(cta && { href: cta, target: "_blank" as const })}
      id={id}
      loading={!!loading}
      padding={padding}
      rel={cta ? "noopener noreferrer" : undefined}
      role={role}
      tabIndex={tabIndex}
      theme={theme || "default"}
      onClick={onClick}>
      {loading && (
        <BoxLoadingStyled>
          <Loading />
        </BoxLoadingStyled>
      )}

      <BoxFlexStyled>
        {image && (
          <BoxImageStyled
            css={{
              img: {
                height: imageHeight || "100%",
                objectFit: imageFit || "cover",
                objectPosition: imagePosition || "center",
                width: "100%",
              },
            }}>
            {imageCTA && !cta ? (
              <a href={imageCTA} rel="noopener noreferrer" target={imageTarget || "_blank"}>
                {image}
              </a>
            ) : (
              image
            )}
          </BoxImageStyled>
        )}
        {header && (
          <BoxHeaderStyled padding={minimal ? "none" : small ? "small" : "default"}>
            {header}
          </BoxHeaderStyled>
        )}

        {image || header || footer ? (
          <BoxInnerStyled padding={minimal ? "none" : small ? "small" : "default"}>
            {children}
          </BoxInnerStyled>
        ) : (
          children
        )}
      </BoxFlexStyled>

      {footer && (
        <BoxFooterStyled fill={!header} padding={minimal ? "none" : small ? "small" : "default"}>
          {footer}
        </BoxFooterStyled>
      )}

      {expandable && !cta && (
        <BoxExpanderTrigger expanded={isExpanded}>
          <Button
            icon={isExpanded ? <Icon radix={<EnterIcon />} /> : <Icon radix={<ExitIcon />} />}
            small
            theme={isExpanded ? "default" : "solid"}
            onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Collapse" : "Expand"}
          </Button>
        </BoxExpanderTrigger>
      )}

      {closable && !cta && (
        <BoxExitStyled onClick={() => handleClose()}>
          <Button small theme="minimal">
            <Icon radix={<CrossCircledIcon />} />
          </Button>
        </BoxExitStyled>
      )}
    </BoxStyled>
  );
}

Box.displayName = "Box";

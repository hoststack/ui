import { useState, type JSX, type KeyboardEvent, type MouseEvent } from "react";
import { toast } from "react-hot-toast";

import { ClipboardIcon, CrossCircledIcon } from "../../icons";
import { Loading, Icon, type IBadge } from "../../index";
import { BadgeIconStyled, BadgeStyled, BadgeLoadingStyled, NewDotStyled } from "./styles";

export default function Badge({
  block,
  children,
  closable,
  copy,
  css,
  icon,
  iconPosition,
  inline,
  link,
  loading,
  new: isNew,
  onClick,
  small,
  theme = "default",
  variant = "border",
  ...rest
}: IBadge): JSX.Element | null {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 150);
  }

  function handleCopy(): void {
    if (copy) {
      navigator.clipboard.writeText(copy.toString());
      toast("Copied to clipboard");
    } else {
      toast("Nothing to copy");
    }
  }

  if (!isMounted) return null;

  const isInteractive = Boolean(link || onClick || copy);

  return (
    <BadgeStyled
      animation={!isOpen}
      aria-busy={loading || undefined}
      block={block}
      css={{
        ...(inline && {
          display: "inline-flex",
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
          verticalAlign: "middle",
        }),
        ...css,
      }}
      link={isInteractive}
      loading={loading}
      role={isInteractive ? "button" : undefined}
      small={small}
      tabIndex={isInteractive ? 0 : undefined}
      theme={theme}
      variant={variant}
      onClick={copy ? handleCopy : onClick}
      onKeyDown={(e: KeyboardEvent<HTMLSpanElement>): void => {
        if (!isInteractive) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.currentTarget.click();
        }
      }}
      {...rest}>
      {loading && (
        <BadgeLoadingStyled>
          <Loading />
        </BadgeLoadingStyled>
      )}

      {icon && iconPosition !== "right" && !copy && (
        <BadgeIconStyled align={small ? "smallLeft" : "left"}>{icon}</BadgeIconStyled>
      )}

      {copy && (
        <BadgeIconStyled align={small ? "smallLeft" : "left"} hover>
          <Icon radix={<ClipboardIcon />} />
        </BadgeIconStyled>
      )}

      {children}

      {icon && iconPosition === "right" && !closable && !copy && (
        <BadgeIconStyled align={small ? "smallRight" : "right"}>{icon}</BadgeIconStyled>
      )}

      {closable && (
        <BadgeIconStyled
          align={small ? "smallRight" : "right"}
          hover
          role="button"
          tabIndex={0}
          onClick={(e: MouseEvent<HTMLSpanElement>): void => {
            e.stopPropagation();
            handleClose();
          }}
          onKeyDown={(e: KeyboardEvent<HTMLSpanElement>): void => {
            e.stopPropagation();
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleClose();
            }
          }}>
          <Icon radix={<CrossCircledIcon />} />
        </BadgeIconStyled>
      )}

      {isNew && <NewDotStyled theme={theme} />}
    </BadgeStyled>
  );
}

Badge.displayName = "Badge";

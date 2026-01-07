import { useEffect, useId, useState, type JSX, type MouseEvent as ReactMouseEvent } from "react";
import { createPortal } from "react-dom";

import { CrossCircledIcon } from "../../icons";
import { Button, useEventListener, useOutsideClick, useModal, Icon, type IMenu } from "../../index";
import {
  MenuGroupStyled,
  MenuItemStyled,
  MenuItemContentStyled,
  MenuItemIconStyled,
  MenuStyled,
  MenuTriggerStyled,
  MenuContentStyled,
  MenuFooterStyled,
  MenuHeaderStyled,
  MenuOverlayStyled,
} from "./styles";

export default function Menu({
  ariaLabel,
  children,
  css,
  initial,
  logo,
  onSelection,
  options,
  trigger,
  triggerCSS,
  wrapperCSS,
}: IMenu): JSX.Element {
  const reactId = useId();
  const instanceId = `menu-${reactId}`;

  const [focused, setFocused] = useState("");

  const menu = useModal();

  function handleClick(): void {
    menu.handleClick();
  }

  function handleClose(): void {
    setFocused("");
    menu.handleClose();
  }

  function handleSelection(value: string, label: string): void {
    if (onSelection) {
      onSelection(value, label);
    }
    handleClose();
  }

  function handleKeyDown(event: KeyboardEvent): void {
    if (!menu.isOpen) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index < options.length - 1) {
        setFocused(options[index + 1].value);
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index > 0) {
        setFocused(options[index - 1].value);
      }
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index >= 0) {
        handleSelection(options[index].value, options[index].label);
      }
    }
  }

  function handleItemMouseOver(value: string): void {
    setFocused(value);
  }

  useEffect(() => {
    if (menu.isOpen && menu.modalRef.current) {
      menu.modalRef.current.focus();
    } else {
      setFocused("");
    }
  }, [menu.isOpen]);

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  });

  useEventListener("keydown", handleKeyDown, menu.modalRef);

  useOutsideClick(menu.modalRef, () => handleClose());

  return (
    <MenuStyled css={wrapperCSS}>
      <MenuTriggerStyled
        aria-controls={`${instanceId}-content`}
        aria-expanded={menu.isOpen}
        aria-haspopup="menu"
        css={triggerCSS}
        onClick={(e: ReactMouseEvent<HTMLDivElement>): void => {
          e.stopPropagation();
          handleClick();
        }}>
        {trigger}
      </MenuTriggerStyled>

      {menu.isMounted &&
        createPortal(
          <MenuOverlayStyled animation={menu.isOpen}>
            <MenuGroupStyled
              ref={menu.modalRef}
              animation={menu.isOpen}
              aria-label={ariaLabel || "Menu"}
              css={css}
              id={`${instanceId}-content`}
              role="menu"
              tabIndex={-1}>
              <MenuHeaderStyled>
                {logo && <div>{logo}</div>}
                <Button
                  icon={<Icon radix={<CrossCircledIcon />} />}
                  small
                  onClick={() => handleClose()}>
                  Close
                </Button>
              </MenuHeaderStyled>

              <MenuContentStyled>
                {options.map((option) => (
                  <MenuItemStyled
                    key={option.value}
                    aria-checked={initial === option.value || undefined}
                    focused={option.value === focused}
                    role="menuitemradio"
                    selected={initial === option.value}
                    onClick={() => handleSelection(option.value, option.label)}
                    onMouseOver={() => handleItemMouseOver(option.value)}>
                    <MenuItemContentStyled>
                      {option.icon && option.iconPosition === "left" && (
                        <MenuItemIconStyled align="left">{option.icon}</MenuItemIconStyled>
                      )}
                      {option.label}
                      {option.icon && option.iconPosition !== "left" && (
                        <MenuItemIconStyled align="right">{option.icon}</MenuItemIconStyled>
                      )}
                    </MenuItemContentStyled>
                  </MenuItemStyled>
                ))}
              </MenuContentStyled>

              {children && (
                <MenuFooterStyled>
                  {typeof children === "function" ? children(handleClose) : children}
                </MenuFooterStyled>
              )}
            </MenuGroupStyled>
          </MenuOverlayStyled>,
          document.body,
        )}
    </MenuStyled>
  );
}

Menu.displayName = "Menu";

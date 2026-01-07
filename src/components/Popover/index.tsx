import { useId, type JSX, type MouseEvent as ReactMouseEvent } from "react";

import {
  useEventListener,
  useOutsideClick,
  useFloatingUI,
  useWindowDimensions,
  type IPopover,
} from "../../index";
import { PopoverStyled, PopoverContentStyled, PopoverTriggerStyled } from "./styles";

export default function Popover({
  ariaLabel,
  children,
  css,
  disabled,
  minimal = false,
  small = false,
  trigger,
  triggerCSS,
  wrapperCSS,
}: IPopover): JSX.Element {
  const { contentRef, handleClick, handleClose, isMounted, isOpen, triggerRef } = useFloatingUI();
  const { height: windowHeight } = useWindowDimensions();
  const reactId = useId();
  const instanceId = `popover-${reactId}`;

  function handleKeyDown(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  }

  function handleTriggerClick(e: ReactMouseEvent<HTMLDivElement>): void {
    e.stopPropagation();
    if (!disabled) {
      handleClick();
    }
  }

  useOutsideClick(contentRef, () => handleClose());
  useEventListener("keydown", handleKeyDown);

  return (
    <PopoverStyled css={wrapperCSS}>
      <PopoverTriggerStyled
        ref={triggerRef}
        aria-controls={`${instanceId}-content`}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        css={triggerCSS}
        onClick={(e: ReactMouseEvent<HTMLDivElement>) => handleTriggerClick(e)}>
        {trigger}
      </PopoverTriggerStyled>

      {isMounted && (
        <PopoverContentStyled
          ref={contentRef}
          animation={isOpen}
          aria-label={ariaLabel}
          css={{
            maxHeight: windowHeight < 700 ? "50vh" : "70vh",
            width: "auto",
            ...css,
          }}
          id={`${instanceId}-content`}
          minimal={minimal}
          role="region"
          small={small}>
          {typeof children === "function" ? children(handleClose) : children}
        </PopoverContentStyled>
      )}
    </PopoverStyled>
  );
}

Popover.displayName = "Popover";

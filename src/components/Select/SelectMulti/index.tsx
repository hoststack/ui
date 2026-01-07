import { useEffect, useRef, useState, type JSX, type MouseEvent as ReactMouseEvent } from "react";
import toast from "react-hot-toast";

import { CrossCircledIcon } from "../../../icons";
import {
  Input,
  Loading,
  Text,
  useBreakpoints,
  useEventListener,
  useOutsideClick,
  useFloatingUI,
  useWindowDimensions,
  Icon,
  type ISelectMulti,
} from "../../../index";
import {
  SelectStyled,
  SelectTriggerStyled,
  SelectGroupStyled,
  SelectItemStyled,
  SelectFilterStyled,
  SelectEmptyStyled,
  SelectLabelStyled,
  SelectIconStyled,
} from "../styles";

export default function SelectMulti({
  css,
  disabled,
  filter,
  height,
  initial,
  label,
  limit,
  loading,
  onSelection,
  options,
  reset = true,
  trigger,
  triggerCSS,
  width,
  wrapperCSS,
}: ISelectMulti): JSX.Element {
  const { contentRef, handleClick, handleClose, isMounted, isOpen, triggerRef } = useFloatingUI();
  const { isPhone } = useBreakpoints();
  const { height: windowHeight } = useWindowDimensions();
  const optionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState("");
  const [selected, setSelected] = useState<Array<{ label: string; value: string }>>(initial || []);

  const shouldShowFilter = options.length > 10 && filter;
  const hasSelections = selected.length > 0;
  const canReset = reset && hasSelections;
  const filteredOptions = options
    ? options.filter((option) => {
        if (search) {
          return option.label.toLowerCase().includes(search.toLowerCase());
        }

        return option;
      })
    : [];

  useEffect(() => {
    if (!isOpen) {
      setSearch("");
      setFocused("");
    } else if (!shouldShowFilter && contentRef.current) {
      contentRef.current.focus();
    }
  }, [isOpen, shouldShowFilter]);

  function handleSelection(option: { label: string; value: string }): void {
    const selectionIndex = selected.findIndex((item) => item.value === option.value);
    let newSelectedItems;

    if (selectionIndex === -1) {
      if (!limit || selected.length < limit) {
        newSelectedItems = [...selected, option];
        setSelected(newSelectedItems);
        if (onSelection) {
          onSelection(newSelectedItems);
        }
      } else {
        toast(`Maximum selections reached (${limit}).`);
      }
    } else {
      newSelectedItems = [
        ...selected.slice(0, selectionIndex),
        ...selected.slice(selectionIndex + 1),
      ];
      setSelected(newSelectedItems);
      if (onSelection) {
        onSelection(newSelectedItems);
      }
    }
  }

  function handleReset(): void {
    setSelected([]);
    if (onSelection) {
      onSelection([]);
    }
  }

  function handleKeyDown(event: KeyboardEvent): void {
    if (isPhone || !isOpen) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const index = filteredOptions.findIndex((option) => option.value === focused);

      if (index < filteredOptions.length - 1) {
        const nextValue = filteredOptions[index + 1].value;

        setFocused(nextValue);

        optionRefs.current[nextValue]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const index = filteredOptions.findIndex((option) => option.value === focused);

      if (index > 0) {
        const prevValue = filteredOptions[index - 1].value;

        setFocused(prevValue);

        optionRefs.current[prevValue]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const index = filteredOptions.findIndex((option) => option.value === focused);

      if (index >= 0) {
        handleSelection(filteredOptions[index]);
      }
    }
  }

  function handleItemMouseOver(value: string): void {
    if (!isPhone) {
      setFocused(value);
    }
  }

  function handleResetMouseOver(): void {
    if (!isPhone) {
      setFocused("");
    }
  }

  function isOptionSelected(optionValue: string): boolean {
    return selected.findIndex((item) => item.value === optionValue) !== -1;
  }

  function handleEscapeKey(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  }

  useOutsideClick(contentRef, () => handleClose());
  useEventListener("keydown", handleEscapeKey);
  useEventListener("keydown", handleKeyDown, contentRef);

  return (
    <SelectStyled css={wrapperCSS}>
      <SelectTriggerStyled
        ref={triggerRef}
        css={triggerCSS}
        onClick={(e: ReactMouseEvent<HTMLDivElement>): void => {
          e.stopPropagation();
          if (!disabled) {
            handleClick();
          }
        }}>
        {trigger}
      </SelectTriggerStyled>
      {isMounted && (
        <SelectGroupStyled
          ref={contentRef}
          animation={isOpen}
          css={{
            height: height || "auto",
            maxHeight: windowHeight < 700 ? "50vh" : "70vh",
            maxWidth: width || "500px",
            minWidth: width || filter ? "200px" : "125px",
            phone: {
              maxWidth: "100%",
            },
            width: width || "auto",
            ...css,
          }}
          tabIndex={-1}>
          {label && (
            <SelectLabelStyled>
              <Text as="h6">{label}</Text>
            </SelectLabelStyled>
          )}
          {shouldShowFilter && (
            <SelectFilterStyled>
              <Input
                disabled={!options}
                name="select-multi-filter"
                placeholder="Type to search..."
                submitValid={(): boolean => search.length > 0}
                value={search}
                onChange={(event): void => setSearch(event.target.value)}
              />
            </SelectFilterStyled>
          )}
          {loading ? (
            <Loading />
          ) : filteredOptions && filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <SelectItemStyled
                key={option.value}
                ref={(el: HTMLDivElement | null) => {
                  optionRefs.current[option.value] = el;
                }}
                focused={option.value === focused && !isPhone}
                selected={isOptionSelected(option.value)}
                onClick={() => handleSelection(option)}
                onMouseOver={() => handleItemMouseOver(option.value)}>
                {option.icon && option.iconPosition === "left" && (
                  <SelectIconStyled align="left">{option.icon}</SelectIconStyled>
                )}
                {option.label}
                {option.icon && option.iconPosition !== "left" && (
                  <SelectIconStyled align="right">{option.icon}</SelectIconStyled>
                )}
              </SelectItemStyled>
            ))
          ) : (
            <SelectEmptyStyled>No matching options</SelectEmptyStyled>
          )}
          {canReset && (
            <SelectItemStyled
              key="reset"
              last
              onClick={() => handleReset()}
              onMouseOver={() => handleResetMouseOver()}>
              Reset
              <SelectIconStyled align="right">
                <Icon radix={<CrossCircledIcon />} />
              </SelectIconStyled>
            </SelectItemStyled>
          )}
        </SelectGroupStyled>
      )}
    </SelectStyled>
  );
}

SelectMulti.displayName = "SelectMulti";

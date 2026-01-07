import {
  useEffect,
  useId,
  useRef,
  useState,
  type JSX,
  type MouseEvent as ReactMouseEvent,
} from "react";

import {
  Input,
  Loading,
  Text,
  useBreakpoints,
  useEventListener,
  useOutsideClick,
  useFloatingUI,
  useWindowDimensions,
  type ISelect,
} from "../../index";
import {
  SelectStyled,
  SelectTriggerStyled,
  SelectGroupStyled,
  SelectItemStyled,
  SelectFilterStyled,
  SelectEmptyStyled,
  SelectLabelStyled,
  SelectIconStyled,
} from "./styles";

export default function Select({
  css,
  disabled,
  filter,
  height,
  initial,
  label,
  last,
  loading,
  onSelection,
  options,
  trigger,
  triggerCSS,
  width,
  wrapperCSS,
}: ISelect): JSX.Element {
  const reactId = useId();
  const instanceId = `select-${reactId}`;
  const { contentRef, handleClick, handleClose, isMounted, isOpen, triggerRef } = useFloatingUI();
  const { isPhone } = useBreakpoints();
  const { height: windowHeight } = useWindowDimensions();
  const optionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const filterRef = useRef<HTMLInputElement | null>(null);

  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState("");
  const [selected, setSelected] = useState<string>(initial || "");

  const shouldShowFilter = options.length > 8 || filter;
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
    } else if (shouldShowFilter) {
      filterRef.current?.focus();
    } else if (contentRef.current) {
      contentRef.current.focus();
    }
  }, [isOpen, shouldShowFilter]);

  useEffect(() => {
    if (initial !== undefined) {
      setSelected(initial);
    }
  }, [initial]);

  function handleSelection(value: string, label: string): void {
    setSelected(value);
    if (onSelection) {
      onSelection(value, label);
    }
    handleClose();
  }

  function handleKeyDown(event: KeyboardEvent): void {
    if (isPhone || !isOpen) return;
    const target = event.target as HTMLElement | null;

    if (target && target.getAttribute("name") === "select-filter") return;

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
        handleSelection(filteredOptions[index].value, filteredOptions[index].label);
      }
    }
  }

  function handleEscapeKey(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  }

  function handleItemMouseOver(value: string): void {
    if (!isPhone) {
      setFocused(value);
    }
  }

  useOutsideClick(contentRef, () => handleClose());
  useEventListener("keydown", handleEscapeKey);
  useEventListener("keydown", handleKeyDown, contentRef);

  return (
    <SelectStyled css={wrapperCSS}>
      <SelectTriggerStyled
        ref={triggerRef}
        aria-controls={`${instanceId}-listbox`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
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
          aria-activedescendant={focused || undefined}
          aria-busy={loading || undefined}
          aria-labelledby={label ? `${instanceId}-label` : undefined}
          css={{
            height: height || "auto",
            maxHeight: windowHeight < 700 ? "50vh" : "70vh",
            maxWidth: width || "500px",
            minWidth: width || (filter ? "200px" : "125px"),
            phone: {
              maxWidth: "100%",
            },
            width: width || "auto",
            ...css,
          }}
          id={`${instanceId}-listbox`}
          role="listbox"
          tabIndex={-1}>
          {label && (
            <SelectLabelStyled>
              <Text as="h6" id={`${instanceId}-label`}>
                {label}
              </Text>
            </SelectLabelStyled>
          )}
          {shouldShowFilter && (
            <SelectFilterStyled>
              <Input
                ref={filterRef}
                aria-label="Filter options"
                disabled={!options}
                name="select-filter"
                placeholder="Type to search..."
                submitValid={(): boolean => search.length > 0}
                value={search}
                onChange={(event): void => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                    event.preventDefault();
                    const index = filteredOptions.findIndex((o) => o.value === focused);

                    if (event.key === "ArrowDown") {
                      const nextIndex =
                        index < 0 ? 0 : Math.min(index + 1, filteredOptions.length - 1);
                      const nextValue = filteredOptions[nextIndex]?.value;

                      if (nextValue) {
                        setFocused(nextValue);
                        optionRefs.current[nextValue]?.scrollIntoView({
                          behavior: "smooth",
                          block: "nearest",
                        });
                      }
                    }
                    if (event.key === "ArrowUp") {
                      const prevIndex =
                        index < 0 ? filteredOptions.length - 1 : Math.max(index - 1, 0);
                      const prevValue = filteredOptions[prevIndex]?.value;

                      if (prevValue) {
                        setFocused(prevValue);
                        optionRefs.current[prevValue]?.scrollIntoView({
                          behavior: "smooth",
                          block: "nearest",
                        });
                      }
                    }
                  }
                  if (event.key === "Enter") {
                    event.preventDefault();
                    const idx = filteredOptions.findIndex((o) => o.value === focused);

                    if (idx >= 0) {
                      handleSelection(filteredOptions[idx].value, filteredOptions[idx].label);
                    }
                  }
                }}
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
                aria-selected={option.value === selected}
                focused={option.value === focused && !isPhone}
                id={option.value}
                last={last && !search}
                role="option"
                selected={option.value === selected}
                onClick={() => handleSelection(option.value, option.label)}
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
        </SelectGroupStyled>
      )}
    </SelectStyled>
  );
}

Select.displayName = "Select";

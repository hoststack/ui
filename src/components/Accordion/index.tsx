import { useState, useRef, type JSX } from "react";

import { ChevronDownIcon, ChevronRightIcon } from "../../icons";
import { Icon, type IAccordion } from "../../index";
import {
  AccordionStyled,
  AccordionItemStyled,
  AccordionButtonStyled,
  AccordionListContentStyled,
} from "./styles";

export default function Accordion({
  allowMultiple = false,
  initial,
  onToggle,
  options,
}: IAccordion): JSX.Element {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(initial ? [initial] : []));
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const hasOptions = options && options.length > 0;

  function handleToggle(value: string): void {
    const isOpen = openItems.has(value);

    if (allowMultiple) {
      const newOpenItems = new Set(openItems);

      if (isOpen) {
        newOpenItems.delete(value);
      } else {
        newOpenItems.add(value);
      }
      setOpenItems(newOpenItems);
    } else {
      setOpenItems(isOpen ? new Set() : new Set([value]));
    }

    if (!isOpen) {
      setTimeout(() => {
        const contentElement = contentRefs.current[value];

        if (contentElement) {
          contentElement.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
          window.scrollBy(0, 20);
        }
      }, 150);
    }

    if (onToggle) {
      onToggle(value, !isOpen);
    }
  }

  function handleItemClick(value: string): () => void {
    return () => handleToggle(value);
  }

  if (!hasOptions) {
    return <AccordionStyled />;
  }

  return (
    <AccordionStyled>
      {options.map((option) => {
        const isOpen = openItems.has(option.value);
        const buttonId = `accordion-${option.value}-button`;
        const panelId = `accordion-${option.value}-panel`;

        return (
          <AccordionItemStyled key={option.value}>
            {/* @ts-expect-error - Stoop styled component type inference issue with children prop */}
            <AccordionButtonStyled
              aria-controls={panelId}
              aria-expanded={isOpen}
              expanded={isOpen}
              icon={
                isOpen ? (
                  <Icon radix={<ChevronDownIcon />} />
                ) : (
                  <Icon radix={<ChevronRightIcon />} />
                )
              }
              iconPosition="right"
              id={buttonId}
              onClick={handleItemClick(option.value)}>
              {option.label}
            </AccordionButtonStyled>
            <AccordionListContentStyled
              ref={(el: HTMLDivElement | null) => {
                contentRefs.current[option.value] = el;
              }}
              aria-labelledby={buttonId}
              expanded={isOpen}
              id={panelId}
              role="region">
              <div>{option.children}</div>
            </AccordionListContentStyled>
          </AccordionItemStyled>
        );
      })}
    </AccordionStyled>
  );
}

Accordion.displayName = "Accordion";

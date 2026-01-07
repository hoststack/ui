import {
  useRef,
  useState,
  type JSX,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

import { Button, useEventListener, type IForm } from "../../index";
import { FormStyled } from "./styles";

export default function Form({
  children,
  css,
  disabled,
  id,
  listen,
  loading,
  name,
  submit,
  submitFunction,
  submitValid,
  ...rest
}: IForm): JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  function getFormData(form: HTMLFormElement): Record<string, FormDataEntryValue> {
    const data: Record<string, FormDataEntryValue> = {};
    const fd = new FormData(form);

    fd.forEach((value, key) => {
      data[key] = value;
    });

    return data;
  }

  function isValidNow(): boolean {
    if (!submitValid) return true;
    if (!formRef.current) return false;

    return typeof submitValid === "function"
      ? submitValid(getFormData(formRef.current))
      : submitValid;
  }

  function handleSubmit(formEl: HTMLFormElement): void {
    if ((submitFunction as unknown as { length: number }).length > 0) {
      (submitFunction as (data: Record<string, FormDataEntryValue>) => unknown)(
        getFormData(formEl),
      );
    } else {
      (submitFunction as () => unknown)();
    }
    setIsSubmitted(true);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formEl = event.currentTarget;

    if (!submit || disabled || isSubmitted) return;
    if (!isValidNow()) return;
    handleSubmit(formEl);
  }

  useEventListener("keydown", (event: globalThis.KeyboardEvent) => {
    if (listen && event.key === "Enter" && submit && formRef.current && isValidNow()) {
      event.preventDefault();
      handleSubmit(formRef.current);
    }
  });

  return (
    <FormStyled
      ref={formRef}
      aria-busy={loading || undefined}
      aria-disabled={disabled || undefined}
      css={css}
      disabled={disabled}
      id={id || name}
      name={name}
      onChange={() => setIsSubmitted(false)}
      onKeyDown={(e: ReactKeyboardEvent<HTMLFormElement>) => {
        const { key } = e;

        if (!listen && key === "Enter") {
          e.preventDefault();
        }
      }}
      onSubmit={(event: FormEvent<HTMLFormElement>) => onSubmit(event)}
      {...rest}>
      {children}

      {submit && (
        <Button
          css={{ marginTop: "$medium" }}
          disabled={disabled || isSubmitted || !isValidNow()}
          loading={loading}
          type="submit">
          {submit}
        </Button>
      )}
      {loading && (
        <div
          aria-live="polite"
          role="status"
          style={{ height: 0, overflow: "hidden", position: "absolute", width: 0 }}>
          Submitting...
        </div>
      )}
    </FormStyled>
  );
}

Form.displayName = "Form";

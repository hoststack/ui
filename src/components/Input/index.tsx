import { ChangeEvent, forwardRef, useState, type JSX } from "react";
import toast from "react-hot-toast";

import {
  ClipboardIcon,
  EyeOpenIcon,
  EyeNoneIcon,
  CrossCircledIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon,
  CheckCircledIcon,
} from "../../icons";
import {
  Badge,
  Button,
  Loading,
  useEventListener,
  useBreakpoints,
  Icon,
  type IInput,
} from "../../index";
import {
  InputAreaStyled,
  InputCallbackStyled,
  InputFunctionStyled,
  InputStyled,
  InputCoreStyled,
} from "./styles";

const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      copy,
      css,
      disabled,
      error,
      errorMessage,
      id,
      listen,
      loading,
      name,
      onChange,
      placeholder,
      reset,
      resetFunction,
      reveal,
      submit,
      submitFunction,
      submitValid,
      success,
      successMessage,
      type,
      value,
      warning,
      warningMessage,
      width,
      ...rest
    }: IInput,
    ref,
  ): JSX.Element => {
    const { isPhone } = useBreakpoints();
    const [inputValue, setInputValue] = useState((value as string) || "");
    const [isCopied, setIsCopied] = useState(false);
    const [isRevealed, setIsRevealed] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const isSubmitDisabled = !submitValid || !submitValid(inputValue) || isSubmitted || disabled;
    const isSubmitValid = submitValid && submitValid(inputValue);
    const hasFunctions = loading || submit || copy || reveal || reset;
    const hasCallback = error || success || warning;

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
      setInputValue(event.target.value);
      setIsSubmitted(false);
      if (onChange) {
        onChange(event);
      }
    }

    function handleCopy(): void {
      if (copy && inputValue) {
        navigator?.clipboard?.writeText(inputValue.toString());
        setIsCopied(true);
        toast("Copied to clipboard");
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } else {
        toast("Nothing to copy");
      }
    }

    function handleReveal(): void {
      setIsRevealed(!isRevealed);
    }

    function handleReset(): void {
      setInputValue("");
      if (resetFunction) {
        resetFunction();
      }
    }

    function handleSubmit(): void {
      if (submitFunction && isSubmitValid) {
        submitFunction(inputValue || "");
        setIsSubmitted(true);
      }
    }

    useEventListener("keydown", (event: KeyboardEvent) => {
      if (listen && event.key === "Enter" && submitFunction && isSubmitValid) {
        handleSubmit();
      }
    });

    return (
      <InputStyled
        css={{
          maxWidth: width || "100%",
          width: width || "100%",
          ...css,
        }}
        disabled={disabled}>
        <InputCoreStyled>
          <InputAreaStyled
            ref={ref}
            aria-busy={loading || undefined}
            aria-describedby={error || success || warning ? `${id || name}-status` : undefined}
            aria-invalid={error || undefined}
            disabled={disabled}
            id={id || name}
            name={name}
            placeholder={placeholder}
            type={isRevealed ? "text" : type || "text"}
            value={inputValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
            {...rest}
          />

          {hasFunctions && (
            <InputFunctionStyled>
              {loading && <Loading />}

              {copy && (
                <Button
                  disabled={isCopied || disabled}
                  icon={!isPhone ? <Icon radix={<ClipboardIcon />} /> : undefined}
                  small
                  onClick={() => handleCopy()}>
                  {!isPhone ? "Copy" : <Icon radix={<ClipboardIcon />} />}
                </Button>
              )}

              {reveal && (
                <Button
                  disabled={disabled}
                  icon={
                    !isPhone ? (
                      !isRevealed ? (
                        <Icon radix={<EyeOpenIcon />} />
                      ) : (
                        <Icon radix={<EyeNoneIcon />} />
                      )
                    ) : undefined
                  }
                  small
                  onClick={() => handleReveal()}>
                  {!isPhone ? (
                    !isRevealed ? (
                      "Reveal"
                    ) : (
                      "Hide"
                    )
                  ) : !isRevealed ? (
                    <Icon radix={<EyeOpenIcon />} />
                  ) : (
                    <Icon radix={<EyeNoneIcon />} />
                  )}
                </Button>
              )}

              {reset && inputValue && (
                <Button disabled={disabled} small onClick={() => handleReset()}>
                  <Icon radix={<CrossCircledIcon />} />
                </Button>
              )}

              {submit && (
                <Button
                  disabled={isSubmitDisabled}
                  icon={!isPhone ? <Icon radix={<ArrowRightIcon />} /> : undefined}
                  iconPosition={!isPhone ? "right" : undefined}
                  small
                  theme={isSubmitValid ? "solid" : "default"}
                  type="submit"
                  onClick={() => handleSubmit()}>
                  {!isPhone ? submit : <Icon radix={<ArrowRightIcon />} />}
                </Button>
              )}
            </InputFunctionStyled>
          )}
        </InputCoreStyled>

        {hasCallback && (
          <InputCallbackStyled aria-live="polite" id={`${id || name}-status`} role="status">
            {error && (
              <Badge icon={<Icon radix={<ExclamationTriangleIcon />} />} theme="yellow">
                {errorMessage || "Error"}
              </Badge>
            )}
            {success && (
              <Badge icon={<Icon radix={<CheckCircledIcon />} />} theme="yellow">
                {successMessage || "Success"}
              </Badge>
            )}
            {warning && (
              <Badge icon={<Icon radix={<ExclamationTriangleIcon />} />} theme="yellow">
                {warningMessage || "Warning"}
              </Badge>
            )}
          </InputCallbackStyled>
        )}
      </InputStyled>
    );
  },
);

Input.displayName = "Input";

export default Input;

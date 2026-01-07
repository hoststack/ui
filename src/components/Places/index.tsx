import { Loader } from "@googlemaps/js-api-loader";
import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useId,
  useState,
  useRef,
  type JSX,
} from "react";

import {
  Input,
  Loading,
  Text,
  useDebounce,
  useOutsideClick,
  useFloatingUI,
  useWindowDimensions,
  type IPlaces,
} from "../../index";
/// <reference types="google.maps" />
import { PlacesStyled, PlacesDropdownStyled, PlacesItemStyled, PlacesEmptyStyled } from "./styles";

declare global {
  interface Window {
    google?: typeof google;
  }
}

interface PlacePrediction {
  description: string;
  place_id: string;
  structured_formatting?: {
    main_text: string;
    secondary_text: string;
  };
  types: string[];
}

interface AutocompleteService {
  getPlacePredictions: (
    request: Record<string, unknown>,
    callback: (results: PlacePrediction[] | null, status: string) => void,
  ) => void;
}

export default function Places({
  apiKey,
  countries,
  css,
  disabled,
  dropdownCSS,
  dropdownHeight,
  dropdownWidth,
  error,
  errorMessage,
  id,
  loading: externalLoading,
  name,
  onChange,
  onPlaceSelect,
  placeholder = "Search for places...",
  success,
  successMessage,
  types,
  value,
  warning,
  warningMessage,
  width,
  ...inputProps
}: IPlaces): JSX.Element {
  const { contentRef, handleClick, handleClose, isMounted, isOpen, triggerRef } = useFloatingUI();
  const { height: windowHeight } = useWindowDimensions();
  const reactId = useId();
  const instanceId = `places-${reactId}`;

  const [inputValue, setInputValue] = useState((value as string) || "");
  const [predictions, setPredictions] = useState<PlacePrediction[]>([]);
  const [loading, setLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<string>("");
  const [selectionKey, setSelectionKey] = useState(0);

  const debouncedValue = useDebounce(inputValue, 300);
  const serviceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!apiKey || isReady) return;

    const initGoogleMaps = async (): Promise<void> => {
      const loader = new Loader({
        apiKey,
        libraries: ["places", "maps"],
        version: "weekly",
      });

      await (loader as { importLibrary: (lib: string) => Promise<unknown> }).importLibrary(
        "places",
      );

      if (window.google?.maps?.places?.AutocompleteService) {
        serviceRef.current = new window.google.maps.places.AutocompleteService();
        setIsReady(true);
      }
    };

    initGoogleMaps();
  }, [apiKey, isReady]);

  useEffect(() => {
    if (!debouncedValue.trim() || !isOpen || !serviceRef.current) {
      setPredictions([]);

      return;
    }

    setLoading(true);
    const request = {
      input: debouncedValue,
      ...(countries && { componentRestrictions: { country: countries } }),
      ...(types && { types }),
    };

    (serviceRef.current as AutocompleteService).getPlacePredictions(
      request,
      (results: PlacePrediction[] | null, status: string) => {
        setLoading(false);
        setPredictions(status === "OK" && results ? results : []);
      },
    );
  }, [debouncedValue, isOpen, countries, types]);

  useEffect(() => {
    if (value !== undefined && !selectedPlace) {
      setInputValue(value as string);
    }
  }, [value, selectedPlace]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value);
    setSelectedPlace("");

    if (!isOpen && event.target.value.trim() && isReady) {
      handleClick();
    }

    if (onChange) onChange(event);
  }

  function handleSelection(prediction: PlacePrediction): void {
    const selectedValue = prediction.description;

    setSelectedPlace(selectedValue);
    setInputValue(selectedValue);
    setSelectionKey((prev) => prev + 1);
    handleClose();

    if (onChange) {
      const syntheticEvent = {
        currentTarget: { name: name, value: selectedValue },
        preventDefault: () => {},
        stopPropagation: () => {},
        target: { name: name, value: selectedValue },
      } as ChangeEvent<HTMLInputElement>;

      onChange(syntheticEvent);
    }

    if (onPlaceSelect) onPlaceSelect(prediction);
  }

  function handleInputFocus(): void {
    if (!disabled && isReady) {
      handleClick();
    }
  }

  function handleInputKeyDown(event: KeyboardEvent): void {
    if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      handleClose();
    }
  }

  const handleItemClick =
    (prediction: PlacePrediction) =>
    (e: MouseEvent): void => {
      e.stopPropagation();
      handleSelection(prediction);
    };

  useOutsideClick(contentRef, handleClose);

  return (
    <PlacesStyled css={css}>
      <div ref={triggerRef}>
        <Input
          key={selectionKey}
          {...inputProps}
          aria-controls={`${instanceId}-listbox`}
          aria-expanded={isOpen}
          css={{ width: width || "100%", ...css }}
          disabled={disabled || !isReady}
          error={error}
          errorMessage={errorMessage}
          id={id || name}
          loading={externalLoading || !isReady}
          name={name}
          placeholder={isReady ? placeholder : "Loading..."}
          success={success}
          successMessage={successMessage}
          value={selectedPlace || inputValue}
          warning={warning}
          warningMessage={warningMessage}
          onChange={(e) => {
            handleInputChange(e);
          }}
          onFocus={() => {
            handleInputFocus();
          }}
          onKeyDown={(e) => {
            handleInputKeyDown(e);
          }}
        />
      </div>

      {isMounted && isOpen && (
        <PlacesDropdownStyled
          ref={contentRef}
          animation={isOpen}
          css={{
            maxHeight: windowHeight < 700 ? "50vh" : "70vh",
            maxWidth: dropdownWidth || "500px",
            minWidth: dropdownWidth || "200px",
            width: dropdownWidth || "100%",
            ...dropdownCSS,
          }}
          id={`${instanceId}-listbox`}
          role="listbox">
          {loading ? (
            <Loading />
          ) : predictions.length > 0 ? (
            predictions.map((prediction) => (
              <PlacesItemStyled
                key={prediction.place_id}
                role="option"
                onClick={handleItemClick(prediction)}>
                {prediction.structured_formatting ? (
                  <div>
                    <Text as="strong">{prediction.structured_formatting.main_text}</Text>
                    <Text as="small">{prediction.structured_formatting.secondary_text}</Text>
                  </div>
                ) : (
                  <Text as="p" css={{ margin: 0 }}>
                    {prediction.description}
                  </Text>
                )}
              </PlacesItemStyled>
            ))
          ) : debouncedValue.trim() ? (
            <PlacesEmptyStyled>No places found</PlacesEmptyStyled>
          ) : (
            <PlacesEmptyStyled>Start typing to search</PlacesEmptyStyled>
          )}
        </PlacesDropdownStyled>
      )}
    </PlacesStyled>
  );
}

Places.displayName = "Places";

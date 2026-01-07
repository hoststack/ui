import { useEffect, useState, type JSX } from "react";

import { MoonIcon, SunIcon, DesktopIcon } from "../../../icons";
import { useMountSSR, Select, Button, useStoopTheme, Icon, type ISelect } from "../../../index";

export default function ProviderToggle(): JSX.Element {
  if (!useStoopTheme) {
    throw new Error(
      "useStoopTheme is not available. Make sure themes config is provided to createStoop.",
    );
  }

  const { setTheme, themeName } = useStoopTheme();
  const isMounted = useMountSSR();
  const [systemPreference, setSystemPreference] = useState<"light" | "dark">("light");
  const [savedThemePreference, setSavedThemePreference] = useState<"light" | "dark" | "system">(
    "system",
  );

  // Detect system preference
  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemPreference = (): void => {
      setSystemPreference(mediaQuery.matches ? "dark" : "light");
    };

    updateSystemPreference();
    mediaQuery.addEventListener("change", updateSystemPreference);

    // Load saved preference from localStorage
    const saved = localStorage.getItem("airindex-ui-theme");

    if (saved === "light" || saved === "dark") {
      setSavedThemePreference(saved);
    } else {
      setSavedThemePreference("system");
    }

    return (): void => {
      mediaQuery.removeEventListener("change", updateSystemPreference);
    };
  }, [isMounted]);

  // Apply system theme when preference is "system"
  useEffect(() => {
    if (savedThemePreference === "system" && themeName !== systemPreference) {
      setTheme(systemPreference);
    }
  }, [systemPreference, savedThemePreference, themeName, setTheme]);

  const options = [
    { icon: <Icon radix={<MoonIcon />} />, iconPosition: "right", label: "Dark", value: "dark" },
    {
      icon: <Icon radix={<SunIcon />} />,
      iconPosition: "right",
      label: "Light",
      value: "light",
    },
    {
      icon: <Icon radix={<DesktopIcon />} />,
      iconPosition: "right",
      label: "System",
      value: "system",
    },
  ] as ISelect["options"];

  const currentTheme = isMounted
    ? savedThemePreference === "system"
      ? "system"
      : themeName
    : "light";
  const currentThemeOption = options.find((option) => option.value === currentTheme);
  const currentThemeIcon = currentThemeOption?.icon;
  const isCurrentTheme = (value: string): boolean => value === currentTheme;

  const handleSelection = (value: string): void => {
    if (isCurrentTheme(value)) {
      return;
    }

    if (value === "system") {
      setSavedThemePreference("system");
      setTheme(systemPreference);
    } else {
      setSavedThemePreference(value as "light" | "dark");
      setTheme(value as "light" | "dark");
    }
  };

  const renderTrigger = (): JSX.Element => (
    <Button
      css={{
        textTransform: "capitalize",
      }}
      small>
      {currentThemeIcon}
    </Button>
  );

  return (
    <Select
      initial={currentTheme}
      options={options}
      trigger={renderTrigger()}
      onSelection={handleSelection}
    />
  );
}

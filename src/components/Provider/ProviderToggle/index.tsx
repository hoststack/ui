import { type JSX } from "react";

import { MoonIcon, SunIcon } from "../../../icons";
import { useMountSSR, Select, Button, useStoopTheme, Icon, type ISelect } from "../../../index";

export default function ProviderToggle(): JSX.Element {
  if (!useStoopTheme) {
    throw new Error(
      "useStoopTheme is not available. Make sure themes config is provided to createStoop.",
    );
  }

  const { setTheme, themeName } = useStoopTheme();
  const isMounted = useMountSSR();

  const options = [
    { icon: <Icon radix={<MoonIcon />} />, iconPosition: "right", label: "Dark", value: "dark" },
    {
      icon: <Icon radix={<SunIcon />} />,
      iconPosition: "right",
      label: "Light",
      value: "light",
    },
  ] as ISelect["options"];

  const currentTheme = isMounted ? themeName : "light";
  const currentThemeOption = options.find((option) => option.value === currentTheme);
  const currentThemeIcon = currentThemeOption?.icon;

  const handleSelection = (value: string): void => {
    if (value === currentTheme) {
      return;
    }

    setTheme(value as "light" | "dark");
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

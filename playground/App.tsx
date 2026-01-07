import { JSX, useEffect, useState } from "react";

import { ChevronDownIcon } from "../src/icons";
import * as C from "../src/index";
import AccordionDemo from "./demos/Accordion";
import AvatarDemo from "./demos/Avatar";
import BadgeDemo from "./demos/Badge";
import BoxDemo from "./demos/Box";
import ButtonDemo from "./demos/Button";
import DividerDemo from "./demos/Divider";
import FieldDemo from "./demos/Field";
import IconDemo from "./demos/Icon";
import InputDemo from "./demos/Input";
import LoadingDemo from "./demos/Loading";
import MapsDemo from "./demos/Maps";
import MenuDemo from "./demos/Menu";
import ModalDemo from "./demos/Modal";
import PlacesDemo from "./demos/Places";
import PopoverDemo from "./demos/Popover";
import SelectDemo from "./demos/Select";
import StackDemo from "./demos/Stack";
import TableDemo from "./demos/Table";
import TextDemo from "./demos/Text";
import ToastDemo from "./demos/Toast";
import UtilsDemo from "./demos/Utils";
import ViewDemo from "./demos/View";

// Proto demo has been stashed to proto-demo-stash.txt

// Demo components map
const DEMOS = {
  Accordion: AccordionDemo,
  Avatar: AvatarDemo,
  Badge: BadgeDemo,
  Box: BoxDemo,
  Button: ButtonDemo,
  Divider: DividerDemo,
  Field: FieldDemo,
  Icon: IconDemo,
  Input: InputDemo,
  Loading: LoadingDemo,
  Maps: MapsDemo,
  Menu: MenuDemo,
  Modal: ModalDemo,
  Places: PlacesDemo,
  Popover: PopoverDemo,
  Select: SelectDemo,
  Stack: StackDemo,
  Table: TableDemo,
  Text: TextDemo,
  Toast: ToastDemo,
  Utils: UtilsDemo,
  View: ViewDemo,
};

// Select options
const DEMO_OPTIONS = Object.keys(DEMOS).map((name) => ({
  label: name,
  value: name.toLowerCase(),
}));

export function App(): JSX.Element {
  const { isDarkTheme } = C.useTheme();

  // Initialize from URL hash or default to "avatar"
  const getInitialDemo = (): string => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.slice(1); // Remove the '#'

      if (hash && DEMO_OPTIONS.some((opt) => opt.value === hash.toLowerCase())) {
        return hash.toLowerCase();
      }
    }

    return "avatar";
  };

  const [selectedDemo, setSelectedDemo] = useState(getInitialDemo);

  // Update URL hash when selectedDemo changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.hash = selectedDemo;
    }
  }, [selectedDemo]);

  // Listen for hash changes (browser back/forward)
  useEffect(() => {
    const handleHashChange = (): void => {
      const hash = window.location.hash.slice(1);

      if (hash && DEMO_OPTIONS.some((opt) => opt.value === hash.toLowerCase())) {
        setSelectedDemo(hash.toLowerCase());
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return (): void => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Get the current demo component
  const key = (Object.keys(DEMOS).find((key) => key.toLowerCase() === selectedDemo) ||
    "Avatar") as keyof typeof DEMOS;
  const DemoComponent = DEMOS[key];

  return (
    <C.Provider dark={isDarkTheme}>
      {/* Header */}
      <C.View
        as="header"
        bottom="medium"
        container
        css={{
          backgroundColor: "$background",
          borderBottom: "1px solid $border",
          position: "sticky",
          zIndex: 10,
        }}
        inverted
        top="medium">
        <C.Stack direction="row" justify="space-between">
          <C.Stack
            onClick={() => {
              setSelectedDemo("avatar");
            }}>
            <C.Text as="h2">UI Library</C.Text>
          </C.Stack>
          <C.Select
            initial={selectedDemo}
            options={DEMO_OPTIONS}
            trigger={
              <C.Button theme="solid">
                <C.Icon radix={<ChevronDownIcon />} />
                {DEMO_OPTIONS.find((opt) => opt.value === selectedDemo)?.label ||
                  "Select Component"}
              </C.Button>
            }
            onSelection={setSelectedDemo}
          />

          <C.ProviderToggle />
        </C.Stack>
      </C.View>
      <C.View bottom="largest" inverted top="largest">
        <C.Stack align="center">
          <C.Text as="h1">
            {DEMO_OPTIONS.find((opt) => opt.value === selectedDemo)?.label || "Select Component"}
          </C.Text>
        </C.Stack>
      </C.View>

      {/* Current Demo */}
      <C.View bottom="largest" container top="largest">
        <C.Stack
          css={{
            minHeight: "90vh",
          }}>
          <DemoComponent />
        </C.Stack>
      </C.View>
    </C.Provider>
  );
}

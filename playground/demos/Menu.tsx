import { JSX, useState } from "react";

import {
  ArrowRightIcon,
  ExclamationTriangleIcon,
  CrossCircledIcon,
  ArrowDownIcon,
  ExitIcon,
} from "../../src/icons";
import * as C from "../../src/index";

export default function MenuDemo(): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<string>();

  const basicOptions = [
    {
      icon: <C.Icon radix={<ArrowRightIcon />} />,
      label: "Dashboard",
      value: "dashboard",
    },
    {
      icon: <C.Icon radix={<ExclamationTriangleIcon />} />,
      label: "Settings",
      value: "settings",
    },
    {
      icon: <C.Icon radix={<CrossCircledIcon />} />,
      label: "Logout",
      value: "logout",
    },
  ];

  return (
    <C.Stack
      css={{
        display: "grid",
        gap: "$large",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}>
      {/* Basic Usage */}
      <C.Box header={<C.Text as="h4">Basic Usage</C.Text>}>
        <C.Stack>
          <C.Menu
            logo={<C.Loading />}
            options={basicOptions}
            trigger={<C.Button>Open Menu</C.Button>}
          />
        </C.Stack>
      </C.Box>

      {/* With Icons */}
      <C.Box header={<C.Text as="h4">With Icons</C.Text>}>
        <C.Stack>
          <C.Menu
            options={basicOptions}
            trigger={<C.Button icon={<C.Icon radix={<ArrowDownIcon />} />}>Actions</C.Button>}
          />
        </C.Stack>
      </C.Box>

      {/* Custom Triggers */}
      <C.Box header={<C.Text as="h4">Custom Triggers</C.Text>}>
        <C.Stack>
          <C.Menu
            options={basicOptions}
            trigger={<C.Button icon={<C.Icon radix={<ExitIcon />} />} small theme="minimal" />}
          />
          <C.Menu options={basicOptions} trigger={<C.Text>Click this text</C.Text>} />
        </C.Stack>
      </C.Box>

      {/* With Callback */}
      <C.Box header={<C.Text as="h4">With Callback</C.Text>}>
        <C.Stack>
          <C.Menu
            options={basicOptions}
            trigger={<C.Button>Select Option</C.Button>}
            onSelection={(value, label) => {
              setSelectedOption(`${label} (${value})`);
            }}
          />
          <C.Text as="small">Selected: {selectedOption || "None"}</C.Text>
        </C.Stack>
      </C.Box>

      {/* With Initial */}
      <C.Box header={<C.Text as="h4">With Initial</C.Text>}>
        <C.Stack>
          <C.Menu
            initial="dashboard"
            options={basicOptions}
            trigger={<C.Button theme="minimal">Pre-selected</C.Button>}
          />
        </C.Stack>
      </C.Box>

      {/* Close from Inside */}
      <C.Box header={<C.Text as="h4">Close from Inside</C.Text>}>
        <C.Stack>
          <C.Menu options={basicOptions} trigger={<C.Button theme="solid">Open Menu</C.Button>}>
            {(close) => (
              <C.Stack css={{ gap: "$small" }}>
                <C.Text as="strong">Custom Actions</C.Text>
                <C.Button
                  small
                  theme="minimal"
                  onClick={() => {
                    close(); // This will close the menu
                  }}>
                  Cancel
                </C.Button>
                <C.Button
                  small
                  theme="solid"
                  onClick={() => {
                    // Do some action first, then close
                    close(); // This will close the menu
                  }}>
                  Save
                </C.Button>
              </C.Stack>
            )}
          </C.Menu>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
}

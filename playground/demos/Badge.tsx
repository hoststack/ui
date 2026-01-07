import { JSX } from "react";

import { CheckCircledIcon, ArrowRightIcon } from "../../src/icons";
import * as C from "../../src/index";

export default function BadgeDemo(): JSX.Element {
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
          <C.Badge>Default Badge</C.Badge>
          <C.Badge copy="123">With Copy</C.Badge>
          <C.Badge small>Small Badge</C.Badge>
        </C.Stack>
      </C.Box>

      {/* Border Variant (Default) */}
      <C.Box header={<C.Text as="h4">Border Variant</C.Text>}>
        <C.Stack>
          <C.Badge theme="default" variant="border">
            Default
          </C.Badge>
          <C.Badge theme="solid" variant="border">
            Solid
          </C.Badge>
          <C.Badge theme="yellow" variant="border">
            Yellow
          </C.Badge>
        </C.Stack>
      </C.Box>

      {/* Theme Variant (Filled) */}
      <C.Box header={<C.Text as="h4">Theme Variant</C.Text>}>
        <C.Stack>
          <C.Badge theme="default" variant="theme">
            Default
          </C.Badge>
          <C.Badge theme="solid" variant="theme">
            Solid
          </C.Badge>
          <C.Badge theme="yellow" variant="theme">
            Yellow
          </C.Badge>
        </C.Stack>
      </C.Box>

      {/* With Icons */}
      <C.Box header={<C.Text as="h4">With Icons</C.Text>}>
        <C.Stack>
          <C.Badge icon={<C.Icon radix={<CheckCircledIcon />} />}>Success</C.Badge>
          <C.Badge icon={<C.Icon radix={<ArrowRightIcon />} />} iconPosition="right" theme="yellow">
            Next
          </C.Badge>
        </C.Stack>
      </C.Box>

      {/* Interactive */}
      <C.Box header={<C.Text as="h4">Interactive</C.Text>}>
        <C.Stack>
          <C.Badge link>Clickable</C.Badge>
          <C.Badge closable theme="yellow">
            Closable
          </C.Badge>
          <C.Badge loading theme="yellow">
            Loading
          </C.Badge>
        </C.Stack>
      </C.Box>

      {/* Layout Options */}
      <C.Box header={<C.Text as="h4">Layout Options</C.Text>}>
        <C.Stack>
          <C.Badge block theme="yellow">
            Full Width
          </C.Badge>
          <C.Text>
            Text with <C.Badge inline="smaller">inline</C.Badge> badge
          </C.Text>
        </C.Stack>
      </C.Box>

      {/* Variant Comparison */}
      <C.Box header={<C.Text as="h4">Variant Comparison</C.Text>}>
        <C.Stack>
          <C.Stack css={{ alignItems: "center", gap: "$small" }} direction="row">
            <C.Badge theme="default" variant="border">
              Border Default
            </C.Badge>
            <C.Badge theme="default" variant="theme">
              Theme Default
            </C.Badge>
          </C.Stack>
          <C.Stack css={{ alignItems: "center", gap: "$small" }} direction="row">
            <C.Badge theme="yellow" variant="border">
              Border Yellow
            </C.Badge>
            <C.Badge theme="yellow" variant="theme">
              Theme Yellow
            </C.Badge>
          </C.Stack>
          <C.Stack css={{ alignItems: "center", gap: "$small" }} direction="row">
            <C.Badge icon={<C.Icon radix={<CheckCircledIcon />} />} theme="yellow" variant="border">
              Border with Icon
            </C.Badge>
            <C.Badge icon={<C.Icon radix={<CheckCircledIcon />} />} theme="yellow" variant="theme">
              Theme with Icon
            </C.Badge>
          </C.Stack>
        </C.Stack>
      </C.Box>

      {/* New Feature Indicator */}
      <C.Box header={<C.Text as="h4">New Feature Indicator</C.Text>}>
        <C.Stack>
          <C.Badge new theme="yellow" variant="border">
            New Update
          </C.Badge>
          <C.Badge new small theme="solid" variant="theme">
            New
          </C.Badge>
          <C.Badge icon={<C.Icon radix={<CheckCircledIcon />} />} new theme="default">
            New Feature
          </C.Badge>
        </C.Stack>
      </C.Box>

      {/* Combinations */}
      <C.Box header={<C.Text as="h4">Combinations</C.Text>}>
        <C.Stack>
          <C.Badge
            icon={<C.Icon radix={<CheckCircledIcon />} />}
            small
            theme="yellow"
            variant="theme">
            Status
          </C.Badge>
          <C.Badge
            closable
            icon={<C.Icon radix={<CheckCircledIcon />} />}
            theme="yellow"
            variant="border">
            Complete
          </C.Badge>
          <C.Badge closable new theme="yellow" variant="theme">
            New & Closable
          </C.Badge>
          <C.Badge copy="v2.1.0" new theme="solid" variant="border">
            New Release
          </C.Badge>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
}

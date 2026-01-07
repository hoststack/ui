import { JSX } from "react";

import { CheckCircledIcon, ArrowRightIcon, ChevronUpIcon } from "../../src/icons";
import * as C from "../../src/index";

export default function ButtonDemo(): JSX.Element {
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
          <C.Button theme="yellow">Default Button</C.Button>
          <C.Button small>Small Button</C.Button>
          <C.Button disabled>Disabled Button</C.Button>
        </C.Stack>
      </C.Box>

      {/* Themes */}
      <C.Box header={<C.Text as="h4">Themes</C.Text>}>
        <C.Stack>
          <C.Button theme="default">Default</C.Button>
          <C.Button theme="solid">Solid</C.Button>
          <C.Button theme="minimal">Minimal</C.Button>
        </C.Stack>
      </C.Box>

      {/* With Icons */}
      <C.Box header={<C.Text as="h4">With Icons</C.Text>}>
        <C.Stack>
          <C.Button icon={<C.Icon radix={<CheckCircledIcon />} />}>Success</C.Button>
          <C.Button icon={<C.Icon radix={<ArrowRightIcon />} />} iconPosition="right">
            Next
          </C.Button>
        </C.Stack>
      </C.Box>

      {/* States */}
      <C.Box header={<C.Text as="h4">States</C.Text>}>
        <C.Stack>
          <C.Button loading>Loading</C.Button>
          <C.Button external>External Link</C.Button>
          <C.Button block>Full Width</C.Button>
        </C.Stack>
      </C.Box>

      {/* Inline Usage */}
      <C.Box header={<C.Text as="h4">Inline Usage</C.Text>}>
        <C.Stack>
          <C.Text>
            Text with{" "}
            <C.Button inline="small" small>
              inline
            </C.Button>{" "}
            button
          </C.Text>
          <C.Button inline="auto" small theme="minimal">
            Auto margin
          </C.Button>
        </C.Stack>
      </C.Box>

      {/* Icon Only vs Text Heights */}
      <C.Box header={<C.Text as="h4">Height Consistency</C.Text>}>
        <C.Stack direction="row">
          <C.Button>Text Button</C.Button>
          <C.Button icon={<C.Icon radix={<CheckCircledIcon />} />} />
          <C.Button small>Small Text</C.Button>
          <C.Button icon={<C.Icon radix={<CheckCircledIcon />} />} small />
        </C.Stack>
      </C.Box>

      {/* New Feature Indicator */}
      <C.Box header={<C.Text as="h4">New Feature Indicator</C.Text>}>
        <C.Stack>
          <C.Button new theme="solid">
            New Feature
          </C.Button>
          <C.Button new small theme="yellow">
            New Small
          </C.Button>
          <C.Button icon={<C.Icon radix={<CheckCircledIcon />} />} new theme="minimal">
            New with Icon
          </C.Button>
        </C.Stack>
      </C.Box>

      {/* Combinations */}
      <C.Box header={<C.Text as="h4">Combinations</C.Text>}>
        <C.Stack>
          <C.Button icon={<C.Icon radix={<CheckCircledIcon />} />} small theme="solid">
            Small Solid
          </C.Button>
          <C.Button icon={<C.Icon radix={<ChevronUpIcon />} />} loading theme="minimal">
            Processing
          </C.Button>
          <C.Button
            icon={<C.Icon radix={<ArrowRightIcon />} />}
            iconPosition="right"
            new
            theme="yellow">
            New Action
          </C.Button>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
}

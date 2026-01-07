import { JSX } from "react";

import * as C from "../../src/index";

export default function DividerDemo(): JSX.Element {
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
          <C.Text>Content above</C.Text>
          <C.Divider />
          <C.Text>Content below</C.Text>
        </C.Stack>
      </C.Box>

      {/* Top Spacing */}
      <C.Box header={<C.Text as="h4">Top Spacing</C.Text>}>
        <C.Stack>
          <C.Text>Content above</C.Text>
          <C.Divider top="large" />
          <C.Text>Content below</C.Text>
        </C.Stack>
      </C.Box>

      {/* Bottom Spacing */}
      <C.Box header={<C.Text as="h4">Bottom Spacing</C.Text>}>
        <C.Stack>
          <C.Text>Content above</C.Text>
          <C.Divider bottom="large" />
          <C.Text>Content below</C.Text>
        </C.Stack>
      </C.Box>

      {/* Both Spacing */}
      <C.Box header={<C.Text as="h4">Both Spacing</C.Text>}>
        <C.Stack>
          <C.Text>Content above</C.Text>
          <C.Divider bottom="medium" top="medium" />
          <C.Text>Content below</C.Text>
        </C.Stack>
      </C.Box>

      {/* In Components */}
      <C.Box header={<C.Text as="h4">In Components</C.Text>}>
        <C.Stack>
          <C.Button block>First Action</C.Button>
          <C.Divider bottom="small" top="small" />
          <C.Button block theme="minimal">
            Second Action
          </C.Button>
        </C.Stack>
      </C.Box>

      {/* Multiple Dividers */}
      <C.Box header={<C.Text as="h4">Multiple Dividers</C.Text>}>
        <C.Stack>
          <C.Text>Section 1</C.Text>
          <C.Divider />
          <C.Text>Section 2</C.Text>
          <C.Divider />
          <C.Text>Section 3</C.Text>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
}

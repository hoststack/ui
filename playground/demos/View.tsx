import { JSX } from "react";

import * as C from "../../src/index";

export default function ViewDemo(): JSX.Element {
  return (
    <C.Stack
      css={{
        display: "grid",
        gap: "$large",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}>
      {/* Basic Usage */}
      <C.Box header={<C.Text as="h4">Basic Usage</C.Text>}>
        <C.View css={{ height: "150px" }}>
          <C.Box css={{ height: "100%", padding: "$medium" }}>
            <C.Text>Default view layout</C.Text>
          </C.Box>
        </C.View>
      </C.Box>

      {/* Hero View */}
      <C.Box header={<C.Text as="h4">Hero View</C.Text>}>
        <C.View
          css={{
            alignItems: "center",
            display: "flex",
            height: "150px",
            justifyContent: "center",
          }}
          inverted>
          <C.Text css={{ color: "$text" }}>Hero section</C.Text>
        </C.View>
      </C.Box>

      {/* Container View */}
      <C.Box header={<C.Text as="h4">Container View</C.Text>}>
        <C.View container css={{ height: "150px" }}>
          <C.Box css={{ height: "100%", padding: "$medium" }}>
            <C.Text>Constrained width container</C.Text>
          </C.Box>
        </C.View>
      </C.Box>

      {/* App View */}
      <C.Box header={<C.Text as="h4">App View</C.Text>}>
        <C.View app css={{ height: "150px" }}>
          <C.Box css={{ height: "100%", padding: "$medium" }}>
            <C.Text>App-level layout</C.Text>
          </C.Box>
        </C.View>
      </C.Box>

      {/* Inverted Theme */}
      <C.Box header={<C.Text as="h4">Inverted Theme</C.Text>}>
        <C.View css={{ height: "150px" }} inverted>
          <C.Box css={{ height: "100%", padding: "$medium" }}>
            <C.Text>Dark theme view</C.Text>
          </C.Box>
        </C.View>
      </C.Box>

      {/* With Spacing */}
      <C.Box header={<C.Text as="h4">With Spacing</C.Text>}>
        <C.View bottom="large" css={{ height: "150px" }} top="large">
          <C.Box css={{ height: "100%", padding: "$medium" }}>
            <C.Text>View with top/bottom spacing</C.Text>
          </C.Box>
        </C.View>
      </C.Box>
    </C.Stack>
  );
}

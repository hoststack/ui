import { JSX, useState } from "react";

import * as C from "../../src/index";

export default function LoadingDemo(): JSX.Element {
  const [showOverlay, setShowOverlay] = useState(false);

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
          <C.Loading />
          <C.Text as="small">Default loading spinner</C.Text>
        </C.Stack>
      </C.Box>

      {/* Themes */}
      <C.Box header={<C.Text as="h4">Themes</C.Text>}>
        <C.Stack>
          <C.Loading />
          <C.Text as="small">Default theme</C.Text>
        </C.Stack>
      </C.Box>

      {/* Sizes */}
      <C.Box header={<C.Text as="h4">Sizes</C.Text>}>
        <C.Stack direction="row">
          <C.Loading css={{ height: "16px", width: "16px" }} />
          <C.Loading css={{ height: "24px", width: "24px" }} />
          <C.Loading css={{ height: "32px", width: "32px" }} />
          <C.Loading css={{ height: "48px", width: "48px" }} />
        </C.Stack>
      </C.Box>

      {/* Custom Colors */}
      <C.Box header={<C.Text as="h4">Custom Colors</C.Text>}>
        <C.Stack direction="row">
          <C.Loading css={{ color: "$text" }} />
          <C.Loading css={{ color: "$border" }} />
          <C.Loading css={{ color: "$borderLight" }} />
          <C.Loading css={{ color: "$yellow" }} />
        </C.Stack>
      </C.Box>

      {/* Loading Overlay */}
      <C.Box header={<C.Text as="h4">Loading Overlay</C.Text>}>
        <C.Stack css={{ height: "120px", position: "relative" }}>
          <C.Button
            theme={showOverlay ? "solid" : "default"}
            onClick={() => setShowOverlay(!showOverlay)}>
            {showOverlay ? "Hide" : "Show"} Overlay
          </C.Button>
          <C.Text>Content behind overlay</C.Text>
          {showOverlay && <C.LoadingOverlay title="Loading..." />}
        </C.Stack>
      </C.Box>

      {/* Combinations */}
      <C.Box header={<C.Text as="h4">Combinations</C.Text>}>
        <C.Stack direction="row">
          <C.Loading css={{ height: "32px", width: "32px" }} />
          <C.Loading
            css={{
              color: "$yellow",
              height: "24px",
              width: "24px",
            }}
          />
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
}

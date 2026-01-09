import { JSX, useState } from "react";

import * as C from "../../src/index";

export default function LoadingDemo(): JSX.Element {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <C.Stack
      css={{
        display: "grid",
        gap: "$large",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}>
      {/* Basic Usage */}
      <C.Box header={<C.Text as="h4">Basic Usage</C.Text>}>
        <C.Stack>
          <C.Loading />
          <C.Text as="small">Default loading spinner</C.Text>
        </C.Stack>
      </C.Box>

      {/* Multiple Instances */}
      <C.Box header={<C.Text as="h4">Multiple Instances</C.Text>}>
        <C.Stack direction="row" gap="small">
          <C.Loading />
          <C.Loading />
          <C.Loading />
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
    </C.Stack>
  );
}

import { JSX } from "react";

import * as C from "../../src/index";

export default function AvatarDemo(): JSX.Element {
  return (
    <C.Stack
      css={{
        display: "grid",
        gap: "$large",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}>
      {/* Basic Usage */}
      <C.Box header={<C.Text as="h4">Basic Usage</C.Text>}>
        <C.Avatar fallback="JD" />
        <C.Avatar alt="Dolmios Avatar" fallback="D" />
      </C.Box>

      {/* Sizes */}
      <C.Box header={<C.Text as="h4">Sizes</C.Text>}>
        <C.Stack>
          <C.Avatar fallback="S" width={20} />
          <C.Avatar fallback="M" />
          <C.Avatar fallback="L" width={32} />
          <C.Avatar fallback="XL" width={48} />
        </C.Stack>
      </C.Box>

      {/* Themes */}
      <C.Box header={<C.Text as="h4">Themes</C.Text>}>
        <C.Stack>
          <C.Avatar fallback="D" />
          <C.Avatar fallback="Y" theme="yellow" />
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
}

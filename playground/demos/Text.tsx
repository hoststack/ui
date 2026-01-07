import { JSX } from "react";

import * as C from "../../src/index";

export default function TextDemo(): JSX.Element {
  return (
    <C.Stack
      css={{
        display: "grid",
        gap: "$large",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}>
      {/* Hero Gradient Text */}
      <C.Box header={<C.Text as="h4">Hero Gradient Text</C.Text>}>
        <C.Stack css={{ gap: "$small" }}>
          <C.Text as="h1" hero>
            Hero Heading 1
          </C.Text>
          <C.Text as="h2" hero>
            Hero Heading 2
          </C.Text>
          <C.Text as="h3" hero>
            Hero Heading 3
          </C.Text>
          <C.Text as="p" hero>
            Hero paragraph text with beautiful gradient
          </C.Text>
        </C.Stack>
      </C.Box>

      {/* Element Types */}
      <C.Box header={<C.Text as="h4">Element Types</C.Text>}>
        <C.Stack css={{ gap: "$small" }}>
          <C.Text as="h1">Heading 1</C.Text>
          <C.Text as="h2">Heading 2</C.Text>
          <C.Text as="h3">Heading 3</C.Text>
          <C.Text as="h4">Heading 4</C.Text>
          <C.Text as="h5">Heading 5</C.Text>
          <C.Text as="h6">Heading 6</C.Text>
          <C.Text as="p">Paragraph text</C.Text>
          <C.Text as="small">Small text</C.Text>
          <C.Text as="strong">Strong text</C.Text>
          <C.Text as="ol">Ordered list</C.Text>
          <C.Text as="ul">Unordered list</C.Text>
          <C.Text as="li">List item</C.Text>
          <C.Text as="label">Label text</C.Text>
          <C.Text as="span">Span text</C.Text>
          <C.Text as="small">Small text</C.Text>
        </C.Stack>
      </C.Box>

      {/* Highlights */}
      <C.Box header={<C.Text as="h4">Highlights</C.Text>}>
        <C.Stack css={{ gap: "$small" }}>
          <C.Text highlight="default">Default highlight</C.Text>
          <C.Text highlight="yellow">Yellow highlight</C.Text>
          <C.Text as="p">Regular text for comparison</C.Text>
        </C.Stack>
      </C.Box>

      {/* Link Styles */}
      <C.Box header={<C.Text as="h4">Link Styles</C.Text>}>
        <C.Stack css={{ gap: "$small" }}>
          <C.Text as="a" href="#" link="default">
            Default link
          </C.Text>
          <C.Text as="a" href="#" link="minimal">
            Minimal link
          </C.Text>
          <C.Text as="a" href="#" target="_blank">
            External link
          </C.Text>
          <C.Text as="p">
            Inline{" "}
            <C.Text as="a" href="#" link="default">
              default
            </C.Text>{" "}
            and{" "}
            <C.Text as="a" href="#" link="minimal">
              minimal
            </C.Text>{" "}
            links
          </C.Text>
        </C.Stack>
      </C.Box>

      {/* Text States */}
      <C.Box header={<C.Text as="h4">Text States</C.Text>}>
        <C.Stack css={{ gap: "$small" }}>
          <C.Text accent>Accent text</C.Text>
          <C.Text muted>Muted text</C.Text>
          <C.Text as="p">Normal text</C.Text>
          <C.Text as="strong">Bold text</C.Text>
        </C.Stack>
      </C.Box>

      {/* Spacing */}
      <C.Box header={<C.Text as="h4">Spacing</C.Text>}>
        <C.Stack css={{ gap: "$smaller" }}>
          <C.Text top="medium">Top spacing</C.Text>
          <C.Text bottom="medium">Bottom spacing</C.Text>
          <C.Stack direction="row">
            <C.Text inline="small">Inline right</C.Text>
            <C.Text inline="auto">Auto margin</C.Text>
          </C.Stack>
        </C.Stack>
      </C.Box>

      {/* Text Truncation */}
      <C.Box header={<C.Text as="h4">Text Truncation</C.Text>}>
        <C.Stack css={{ gap: "$small", maxWidth: "200px" }}>
          <C.Text truncate={1}>This text will be truncated to one line with ellipsis</C.Text>
          <C.Text truncate={2}>
            This longer text will be truncated to two lines with ellipsis
          </C.Text>
          <C.Text truncate={3}>
            This even longer text will be truncated to three lines with ellipsis
          </C.Text>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
}

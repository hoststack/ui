import { JSX } from "react";

import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
  CrossCircledIcon,
  ArrowRightIcon,
  ClipboardIcon,
  ChevronUpIcon,
} from "../../src/icons";
import * as C from "../../src/index";

export default function IconDemo(): JSX.Element {
  return (
    <C.Stack
      css={{
        display: "grid",
        gap: "$large",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}>
      {/* Basic Usage */}
      <C.Box header={<C.Text as="h6">Basic Usage</C.Text>}>
        <C.Stack direction="row">
          <C.Icon radix={<CheckCircledIcon />} />
          <C.Icon radix={<CheckCircledIcon />} />
          <C.Icon radix={<ExclamationTriangleIcon />} />
          <C.Icon radix={<CrossCircledIcon />} />
        </C.Stack>
      </C.Box>

      {/* Sizes */}
      <C.Box header={<C.Text as="h4">Sizes</C.Text>}>
        <C.Stack direction="row">
          <C.Icon forceSize={16} radix={<CheckCircledIcon />} />
          <C.Icon forceSize={24} radix={<CheckCircledIcon />} />
          <C.Icon forceSize={32} radix={<CheckCircledIcon />} />
          <C.Icon forceSize={48} radix={<CheckCircledIcon />} />
        </C.Stack>
      </C.Box>

      {/* Colors */}
      <C.Box header={<C.Text as="h4">Colors</C.Text>}>
        <C.Stack direction="row">
          <C.Icon forceColor="text" radix={<CheckCircledIcon />} />
          <C.Icon forceColor="yellow" radix={<CheckCircledIcon />} />
          <C.Icon forceColor="border" radix={<CheckCircledIcon />} />
          <C.Icon forceColor="borderLight" radix={<CheckCircledIcon />} />
        </C.Stack>
      </C.Box>

      {/* Inline Usage */}
      <C.Box header={<C.Text as="h4">Inline Usage</C.Text>}>
        <C.Stack>
          <C.Text>
            Text with <C.Icon inline="smaller" radix={<CheckCircledIcon />} /> icon
          </C.Text>
          <C.Text>
            <C.Icon inline="small" radix={<ArrowRightIcon />} /> Icon with margin
          </C.Text>
        </C.Stack>
      </C.Box>

      {/* System Icons */}
      <C.Box header={<C.Text as="h4">System Icons</C.Text>}>
        <C.Stack direction="row">
          <C.Icon radix={<ArrowRightIcon />} />
          <C.Icon radix={<ExclamationTriangleIcon />} />
          <C.Icon radix={<ClipboardIcon />} />
          <C.Icon radix={<ChevronUpIcon />} />
        </C.Stack>
      </C.Box>

      {/* Combinations */}
      <C.Box header={<C.Text as="h4">Combinations</C.Text>}>
        <C.Stack direction="row">
          <C.Icon forceColor="yellow" forceSize={32} radix={<CheckCircledIcon />} />
          <C.Icon forceColor="border" forceSize={32} radix={<ExclamationTriangleIcon />} />
          <C.Icon forceColor="text" forceSize={32} radix={<CrossCircledIcon />} />
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
}

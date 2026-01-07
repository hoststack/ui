/* eslint-disable no-console */
import { JSX } from "react";

import {
  InfoCircledIcon,
  ArrowDownIcon,
  ExitIcon,
  CrossCircledIcon,
  ArrowRightIcon,
} from "../../src/icons";
import * as C from "../../src/index";

export default function PopoverDemo(): JSX.Element {
  return (
    <C.Stack
      css={{
        display: "grid",
        gap: "$large",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}>
      {/* Basic Usage */}
      <C.Box header={<C.Text as="h4">Basic Usage</C.Text>}>
        <C.Popover
          trigger={
            <C.Button>
              <C.Icon radix={<InfoCircledIcon />} />
              Basic
            </C.Button>
          }>
          <C.Text>Default popover with automatic positioning.</C.Text>
        </C.Popover>
      </C.Box>

      {/* Small Popover */}
      <C.Box header={<C.Text as="h4">Small Size</C.Text>}>
        <C.Popover
          small
          trigger={
            <C.Button>
              <C.Icon radix={<ArrowDownIcon />} />
              Small
            </C.Button>
          }>
          <C.Text>Compact popover with reduced max-width.</C.Text>
        </C.Popover>
      </C.Box>

      {/* Minimal Popover */}
      <C.Box header={<C.Text as="h4">Minimal Style</C.Text>}>
        <C.Popover
          minimal
          trigger={
            <C.Button>
              <C.Icon radix={<ExitIcon />} />
              Minimal
            </C.Button>
          }>
          <C.Stack css={{ gap: "$small", padding: "$medium" }}>
            <C.Text>No default padding.</C.Text>
            <C.Button small>Custom content</C.Button>
          </C.Stack>
        </C.Popover>
      </C.Box>

      {/* Disabled State */}
      <C.Box header={<C.Text as="h4">Disabled State</C.Text>}>
        <C.Popover
          disabled
          trigger={
            <C.Button disabled>
              <C.Icon radix={<CrossCircledIcon />} />
              Disabled
            </C.Button>
          }>
          <C.Text>This won't show.</C.Text>
        </C.Popover>
      </C.Box>

      {/* Rich Content */}
      <C.Box header={<C.Text as="h4">Rich Content</C.Text>}>
        <C.Popover
          trigger={
            <C.Button>
              <C.Icon radix={<ArrowRightIcon />} />
              Rich
            </C.Button>
          }>
          <C.Stack css={{ gap: "$small" }}>
            <C.Text as="strong">User Profile</C.Text>
            <C.Button small>View Details</C.Button>
          </C.Stack>
        </C.Popover>
      </C.Box>

      {/* Wide Content */}
      <C.Box header={<C.Text as="h4">Wide Content</C.Text>}>
        <C.Popover
          trigger={
            <C.Button>
              <C.Icon radix={<ExitIcon />} />
              Wide
            </C.Button>
          }>
          <C.Stack css={{ gap: "$small" }}>
            <C.Text as="strong">Action Panel</C.Text>
            <C.Stack css={{ flexWrap: "nowrap", gap: "$small" }} direction="row">
              <C.Button small>Save</C.Button>
              <C.Button small>Edit</C.Button>
              <C.Button small>Delete</C.Button>
              <C.Button small>Archive</C.Button>
              <C.Button small>Share</C.Button>
              <C.Button small>Export</C.Button>
            </C.Stack>
            <C.Text css={{ whiteSpace: "nowrap" }}>
              This is a very long line of text that should not wrap and will make the popover quite
              wide to test horizontal constraints
            </C.Text>
          </C.Stack>
        </C.Popover>
      </C.Box>

      {/* Really Long Content */}
      <C.Box header={<C.Text as="h4">Long Content</C.Text>}>
        <C.Popover
          trigger={
            <C.Button>
              <C.Icon radix={<ArrowDownIcon />} />
              Long List
            </C.Button>
          }>
          <C.Stack css={{ gap: "$small" }}>
            <C.Text as="strong">Navigation Menu</C.Text>
            {Array.from({ length: 25 }, (_, i) => (
              <C.Button
                key={i}
                css={{
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
                small>
                <C.Icon radix={<ArrowRightIcon />} />
                Menu Item {i + 1} - This is a longer description
              </C.Button>
            ))}
            <C.Text>
              This popover contains many items that should trigger vertical scrolling when the max
              height is reached. It tests the overflow behavior and ensures proper scrolling
              functionality within the constrained height.
            </C.Text>
          </C.Stack>
        </C.Popover>
      </C.Box>

      {/* Close from Inside */}
      <C.Box header={<C.Text as="h4">Close from Inside</C.Text>}>
        <C.Popover
          trigger={
            <C.Button>
              <C.Icon radix={<InfoCircledIcon />} />
              Close Demo
            </C.Button>
          }>
          {(close) => (
            <C.Stack css={{ gap: "$small" }}>
              <C.Text as="strong">Action Panel</C.Text>
              <C.Text>This popover demonstrates closing from buttons inside the content.</C.Text>
              <C.Stack direction="row" gap="small">
                <C.Button
                  small
                  theme="minimal"
                  onClick={() => {
                    console.log("Cancel button clicked");
                    close(); // This will close the popover
                  }}>
                  Cancel
                </C.Button>
                <C.Button
                  small
                  theme="solid"
                  onClick={() => {
                    console.log("Save button clicked");
                    // Do some action first, then close
                    close(); // This will close the popover
                  }}>
                  Save
                </C.Button>
              </C.Stack>
            </C.Stack>
          )}
        </C.Popover>
      </C.Box>
    </C.Stack>
  );
}

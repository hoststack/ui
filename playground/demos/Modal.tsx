/* eslint-disable no-console */
import { JSX } from "react";

import { ExitIcon } from "../../src/icons";
import * as C from "../../src/index";

export default function ModalDemo(): JSX.Element {
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
          <C.Modal title="Basic Modal" trigger={<C.Button>Open Modal</C.Button>}>
            <C.Text>This is a basic centered modal.</C.Text>
          </C.Modal>
          <C.Modal
            small
            title="Small Modal"
            trigger={<C.Button theme="minimal">Small Modal</C.Button>}>
            <C.Text>This modal uses the small variant.</C.Text>
          </C.Modal>
        </C.Stack>
      </C.Box>

      {/* Custom Triggers */}
      <C.Box header={<C.Text as="h4">Custom Triggers</C.Text>}>
        <C.Stack>
          <C.Modal
            title="Icon Trigger"
            trigger={<C.Button icon={<C.Icon radix={<ExitIcon />} />} small theme="minimal" />}>
            <C.Text>Triggered by an icon button.</C.Text>
          </C.Modal>
          <C.Modal title="Text Trigger" trigger={<C.Text>Click this text</C.Text>}>
            <C.Text>Triggered by custom text element.</C.Text>
          </C.Modal>
        </C.Stack>
      </C.Box>

      {/* Rich Content */}
      <C.Box header={<C.Text as="h4">Rich Content</C.Text>}>
        <C.Stack>
          <C.Modal title="Form Example" trigger={<C.Button theme="solid">Open Form</C.Button>}>
            <C.Stack>
              <C.Input name="name" placeholder="Enter name" />
              <C.Input name="email" placeholder="Enter email" />
              <C.Stack direction="row">
                <C.Button theme="minimal">Cancel</C.Button>
                <C.Button theme="solid">Submit</C.Button>
              </C.Stack>
            </C.Stack>
          </C.Modal>
        </C.Stack>
      </C.Box>

      {/* Long Content (No Forced Height) */}
      <C.Box header={<C.Text as="h4">Long Content (No Forced Height)</C.Text>}>
        <C.Stack>
          <C.Modal
            title="Very Long Content"
            trigger={<C.Button theme="solid">Open Long Modal</C.Button>}>
            <C.Stack>
              <C.Text>
                This modal intentionally contains excessive content to test dynamic viewport
                maxHeight without forceHeight.
              </C.Text>
              {Array.from({ length: 40 }).map((_, i) => (
                <C.Text key={i}>
                  Line {i + 1}: More content to force scrolling and exercise svh/dvh behavior.
                </C.Text>
              ))}
            </C.Stack>
          </C.Modal>
        </C.Stack>
      </C.Box>

      {/* Forced Height */}
      <C.Box header={<C.Text as="h4">Forced Height</C.Text>}>
        <C.Stack>
          <C.Modal
            forceHeight={50}
            title="Scrollable Content"
            trigger={<C.Button>Long Content</C.Button>}>
            <C.Stack>
              <C.Text>This content is forced to a specific height and will scroll.</C.Text>
              <C.Text>
                Additional content that demonstrates the scrolling behavior when the modal height is
                constrained.
              </C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
              <C.Text>More content to show scrolling...</C.Text>
            </C.Stack>
          </C.Modal>
        </C.Stack>
      </C.Box>

      {/* Disabled State */}
      <C.Box header={<C.Text as="h4">Disabled State</C.Text>}>
        <C.Stack>
          <C.Modal
            disabled
            title="Disabled Modal"
            trigger={<C.Button disabled>Can't Open</C.Button>}>
            <C.Text>This content won't be shown.</C.Text>
          </C.Modal>
        </C.Stack>
      </C.Box>

      {/* Confirmation */}
      <C.Box header={<C.Text as="h4">Confirmation</C.Text>}>
        <C.Stack>
          <C.Modal
            small
            title="Confirm Action"
            trigger={<C.Button theme="solid">Delete Item</C.Button>}>
            <C.Stack>
              <C.Text>Are you sure you want to delete this item?</C.Text>
              <C.Stack direction="row">
                <C.Button theme="minimal">Cancel</C.Button>
                <C.Button theme="solid">Delete</C.Button>
              </C.Stack>
            </C.Stack>
          </C.Modal>
        </C.Stack>
      </C.Box>

      {/* Close from Inside */}
      <C.Box header={<C.Text as="h4">Close from Inside</C.Text>}>
        <C.Stack>
          <C.Modal
            title="Close from Inside Demo"
            trigger={<C.Button theme="solid">Open Demo</C.Button>}>
            {(close) => (
              <C.Stack>
                <C.Text>This modal demonstrates closing from buttons inside the content.</C.Text>
                <C.Stack direction="row" gap="small">
                  <C.Button
                    theme="minimal"
                    onClick={() => {
                      console.log("Cancel button clicked");
                      close(); // This will close the modal
                    }}>
                    Cancel
                  </C.Button>
                  <C.Button
                    theme="solid"
                    onClick={() => {
                      console.log("Save button clicked");
                      // Do some action first, then close
                      close(); // This will close the modal
                    }}>
                    Save
                  </C.Button>
                </C.Stack>
              </C.Stack>
            )}
          </C.Modal>
        </C.Stack>
      </C.Box>

      {/* Footer */}
      <C.Box header={<C.Text as="h4">Footer</C.Text>}>
        <C.Stack>
          <C.Modal
            footer={
              <C.Stack direction="row" gap="small">
                <C.Button
                  theme="minimal"
                  onClick={() => {
                    console.log("Cancel button clicked");
                  }}>
                  Cancel
                </C.Button>
                <C.Button
                  theme="solid"
                  onClick={() => {
                    console.log("Confirm button clicked");
                  }}>
                  Confirm
                </C.Button>
              </C.Stack>
            }
            title="Modal with Footer"
            trigger={<C.Button theme="solid">Open with Footer</C.Button>}>
            <C.Stack>
              <C.Text>This modal has a footer that stays visible at the bottom.</C.Text>
              <C.Text>
                The footer is perfect for action buttons that should always be accessible.
              </C.Text>
            </C.Stack>
          </C.Modal>
          <C.Modal
            footer={
              <C.Stack direction="row" gap="small">
                <C.Button theme="minimal">Cancel</C.Button>
                <C.Button theme="solid">Delete</C.Button>
              </C.Stack>
            }
            small
            title="Confirmation with Footer"
            trigger={<C.Button theme="solid">Delete Item</C.Button>}>
            <C.Text>
              Are you sure you want to delete this item? This action cannot be undone.
            </C.Text>
          </C.Modal>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
}

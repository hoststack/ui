import { JSX } from "react";
import { toast } from "react-hot-toast";

import {
  InfoCircledIcon,
  ArrowUpIcon,
  CrossCircledIcon,
  ExitIcon,
  ArrowRightIcon,
  ArrowDownIcon,
} from "../../src/icons";
import * as C from "../../src/index";

export default function ToastDemo(): JSX.Element {
  return (
    <C.Stack
      css={{
        alignItems: "center",
        display: "grid",
        gap: "$large",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}>
      {/* Default Toast */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">
          Default
        </C.Text>
        <C.Button onClick={() => toast("This is a default toast message")}>
          <C.Icon radix={<InfoCircledIcon />} />
          Show Toast
        </C.Button>
      </C.Stack>

      {/* Success Toast */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">
          Success
        </C.Text>
        <C.Button onClick={() => toast.success("Operation completed successfully!")}>
          <C.Icon radix={<ArrowUpIcon />} />
          Success Toast
        </C.Button>
      </C.Stack>

      {/* Error Toast */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">
          Error
        </C.Text>
        <C.Button onClick={() => toast.error("Something went wrong!")}>
          <C.Icon radix={<CrossCircledIcon />} />
          Error Toast
        </C.Button>
      </C.Stack>

      {/* Custom Duration */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">
          Long Duration
        </C.Text>
        <C.Button
          onClick={() =>
            toast("This toast will stay for 5 seconds", {
              duration: 5000,
            })
          }>
          <C.Icon radix={<ExitIcon />} />
          Long Toast
        </C.Button>
      </C.Stack>

      {/* Multiple Toasts */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">
          Multiple
        </C.Text>
        <C.Button
          onClick={() => {
            toast("First toast");
            setTimeout(() => toast.success("Second toast"), 500);
            setTimeout(() => toast.error("Third toast"), 1000);
          }}>
          <C.Icon radix={<ArrowRightIcon />} />
          Multiple Toasts
        </C.Button>
      </C.Stack>

      {/* Dismiss All */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">
          Dismiss All
        </C.Text>
        <C.Button onClick={() => toast.dismiss()}>
          <C.Icon radix={<ArrowDownIcon />} />
          Clear All
        </C.Button>
      </C.Stack>
    </C.Stack>
  );
}

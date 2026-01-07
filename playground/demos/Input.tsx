import { JSX } from "react";

import * as C from "../../src/index";

export default function InputDemo(): JSX.Element {
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
          <C.Input name="basic" placeholder="Basic input" />
          <C.Input name="email" placeholder="Email input" type="email" />
        </C.Stack>
      </C.Box>

      {/* States */}
      <C.Box header={<C.Text as="h4">States</C.Text>}>
        <C.Stack>
          <C.Input
            error
            errorMessage="This field has an error"
            name="error"
            placeholder="Error state"
          />
          <C.Input
            name="success"
            placeholder="Success state"
            success
            successMessage="Success message"
          />
          <C.Input
            name="warning"
            placeholder="Warning state"
            warning
            warningMessage="Warning message"
          />
        </C.Stack>
      </C.Box>

      {/* Interactive */}
      <C.Box header={<C.Text as="h4">Interactive</C.Text>}>
        <C.Stack>
          <C.Input loading name="loading" placeholder="Loading state" />
          <C.Input copy name="actions" placeholder="Type something" reset />
        </C.Stack>
      </C.Box>

      {/* Special Types */}
      <C.Box header={<C.Text as="h4">Special Types</C.Text>}>
        <C.Stack>
          <C.Input name="password" placeholder="Password input" reveal type="password" />
          <C.Input name="width" placeholder="Custom width" width="80%" />
        </C.Stack>
      </C.Box>

      {/* With Submit */}
      <C.Box header={<C.Text as="h4">With Submit</C.Text>}>
        <C.Stack>
          <C.Input
            name="submit"
            placeholder="Type and submit"
            submit="Send"
            submitFunction={(value) => {
              // eslint-disable-next-line no-console
              console.log("Submitted:", value);
            }}
            submitValid={(value) => value.length > 0}
          />
          <C.Input
            listen
            name="listen"
            placeholder="Press Enter to submit"
            submit="Submit"
            submitFunction={(value) => {
              // eslint-disable-next-line no-console
              console.log("Listen submit:", value);
            }}
          />
        </C.Stack>
      </C.Box>

      {/* Advanced */}
      <C.Box header={<C.Text as="h4">Advanced</C.Text>}>
        <C.Stack>
          <C.Input
            copy
            name="advanced"
            placeholder="All features"
            reset
            reveal
            submit="Submit"
            submitFunction={(value) => {
              // eslint-disable-next-line no-console
              console.log("Advanced submit:", value);
            }}
            submitValid={(value) => value.length > 2}
          />
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
}

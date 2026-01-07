import { JSX } from "react";

import * as C from "../../src/index";

export default function FieldDemo(): JSX.Element {
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
          <C.Field name="basic" placeholder="Basic field" />
          <C.Field name="multiline" placeholder="Multiline field" rows={3} />
        </C.Stack>
      </C.Box>

      {/* States */}
      <C.Box header={<C.Text as="h4">States</C.Text>}>
        <C.Stack>
          <C.Field
            error
            errorMessage="This field has an error"
            name="error"
            placeholder="Error state"
          />
          <C.Field
            name="success"
            placeholder="Success state"
            success
            successMessage="Success message"
          />
          <C.Field
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
          <C.Field loading name="loading" placeholder="Loading state" />
          <C.Field copy name="actions" placeholder="Type something" reset />
        </C.Stack>
      </C.Box>

      {/* With Submit */}
      <C.Box header={<C.Text as="h4">With Submit</C.Text>}>
        <C.Stack>
          <C.Field
            name="submit"
            placeholder="Type and submit"
            submit="Send"
            submitFunction={(value) => {
              // eslint-disable-next-line no-console
              console.log("Submitted:", value);
            }}
            submitValid={(value) => value.length > 0}
          />
        </C.Stack>
      </C.Box>

      {/* Custom Width */}
      <C.Box header={<C.Text as="h4">Custom Width</C.Text>}>
        <C.Stack>
          <C.Field name="width" placeholder="Custom width field" width="80%" />
        </C.Stack>
      </C.Box>

      {/* Advanced */}
      <C.Box header={<C.Text as="h4">Advanced</C.Text>}>
        <C.Stack>
          <C.Field
            copy
            name="advanced"
            placeholder="Reset and submit"
            reset
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

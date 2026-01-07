import { JSX, useState } from "react";

import {
  ArrowRightIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  InfoCircledIcon,
  ExitIcon,
  CrossCircledIcon,
} from "../../src/icons";
import * as C from "../../src/index";

export default function SelectDemo(): JSX.Element {
  const [singleValue, setSingleValue] = useState<string>();
  const [multiValue, setMultiValue] = useState<Array<{ label: string; value: string }>>([]);
  const [filteredValue, setFilteredValue] = useState<string>();
  const [controlledValue, setControlledValue] = useState<string>("option1");

  const options = [
    {
      icon: <C.Icon radix={<ArrowRightIcon />} />,
      iconPosition: "left" as const,
      label: "Option 1",
      value: "option1",
    },
    {
      icon: <C.Icon radix={<ArrowDownIcon />} />,
      iconPosition: "left" as const,
      label: "Option 2",
      value: "option2",
    },
    {
      icon: <C.Icon radix={<ArrowUpIcon />} />,
      iconPosition: "left" as const,
      label: "Option 3",
      value: "option3",
    },
    {
      icon: <C.Icon radix={<CheckCircledIcon />} />,
      iconPosition: "left" as const,
      label: "Option 4",
      value: "option4",
    },
  ];

  const manyOptions = Array.from({ length: 10 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: `option${i + 1}`,
  }));

  return (
    <C.Stack
      css={{
        display: "grid",
        gap: "$large",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}>
      {/* Controlled Demo */}
      <C.Box css={{ gridColumn: "1 / -1" }} header={<C.Text as="h4">Controlled Value</C.Text>}>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Stack css={{ gap: "$small" }} direction="row">
            <C.Button small onClick={() => setControlledValue("option1")}>
              Set Option 1
            </C.Button>
            <C.Button small onClick={() => setControlledValue("option2")}>
              Set Option 2
            </C.Button>
            <C.Button small onClick={() => setControlledValue("option3")}>
              Set Option 3
            </C.Button>
          </C.Stack>
          <C.Select
            initial={controlledValue}
            label="Choose an option"
            options={options.slice(0, 3)}
            trigger={
              <C.Button>
                <C.Icon radix={<ArrowDownIcon />} />
                {controlledValue
                  ? options.find((o) => o.value === controlledValue)?.label
                  : "Select"}
              </C.Button>
            }
            onSelection={(value) => setControlledValue(value)}
          />
          <C.Text accent>External control: {controlledValue}</C.Text>
        </C.Stack>
      </C.Box>

      {/* Basic Select */}
      <C.Box header={<C.Text as="h4">Basic Select</C.Text>}>
        <C.Select
          label="Choose an option"
          options={options.slice(0, 3)}
          trigger={
            <C.Button>
              <C.Icon radix={<ArrowDownIcon />} />
              {singleValue ? options.find((o) => o.value === singleValue)?.label : "Select"}
            </C.Button>
          }
          onSelection={(value) => setSingleValue(value)}
        />
        <C.Text accent>{singleValue || "None selected"}</C.Text>
      </C.Box>

      {/* With Filter */}
      <C.Box header={<C.Text as="h4">With Filter</C.Text>}>
        <C.Select
          filter
          label="Search options"
          options={manyOptions}
          trigger={
            <C.Button>
              <C.Icon radix={<InfoCircledIcon />} />
              {filteredValue || "Search"}
            </C.Button>
          }
          onSelection={(value) => setFilteredValue(value)}
        />
        <C.Text accent>{filteredValue || "Search to select"}</C.Text>
      </C.Box>

      {/* Multi Select */}
      <C.Box header={<C.Text as="h4">Multi Select</C.Text>}>
        <C.SelectMulti
          label="Multiple selection"
          options={options}
          trigger={
            <C.Button>
              <C.Icon radix={<ExitIcon />} />
              Multi ({multiValue.length})
            </C.Button>
          }
          onSelection={(values) => setMultiValue(values)}
        />
        <C.Text accent>
          {multiValue.length ? multiValue.map((v) => v.label).join(", ") : "None selected"}
        </C.Text>
      </C.Box>

      {/* Disabled Select */}
      <C.Box header={<C.Text as="h4">Disabled State</C.Text>}>
        <C.Select
          disabled
          label="Cannot select"
          options={options.slice(0, 2)}
          trigger={
            <C.Button disabled>
              <C.Icon radix={<CrossCircledIcon />} />
              Disabled
            </C.Button>
          }
        />
        <C.Text accent>Interaction disabled</C.Text>
      </C.Box>

      {/* With Limit */}
      <C.Box header={<C.Text as="h4">Limited Multi</C.Text>}>
        <C.SelectMulti
          label="Max 2 selections"
          limit={2}
          options={options}
          trigger={
            <C.Button>
              <C.Icon radix={<InfoCircledIcon />} />
              Limited (2 max)
            </C.Button>
          }
          onSelection={(values) => setMultiValue(values)}
        />
        <C.Text accent>{multiValue.length}/2 selected</C.Text>
      </C.Box>

      {/* No Reset Multi */}
      <C.Box header={<C.Text as="h4">No Reset</C.Text>}>
        <C.SelectMulti
          label="No reset button"
          options={options.slice(0, 3)}
          reset={false}
          trigger={
            <C.Button>
              <C.Icon radix={<CrossCircledIcon />} />
              No reset
            </C.Button>
          }
          onSelection={(values) => setMultiValue(values)}
        />
        <C.Text accent>Reset button hidden</C.Text>
      </C.Box>
    </C.Stack>
  );
}

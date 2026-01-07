import { JSX, useState } from "react";

import type { ITable } from "../../src/index";

import { ArrowTopRightIcon, ChevronUpIcon, ExclamationTriangleIcon } from "../../src/icons";
import * as C from "../../src/index";

// Sample data generator
const generateData = (count: number): ITable["rows"] => {
  return Array.from({ length: count }, (_, i) => ({
    cells: {
      actions: (
        <C.Button small theme="minimal">
          <C.Icon radix={<ArrowTopRightIcon />} />
        </C.Button>
      ),
      name: `Item ${i + 1}`,
      status: Math.random() > 0.5 ? "Active" : "Inactive",
      value: Math.floor(Math.random() * 1000),
    },
    id: `row-${i + 1}`,
    ...(i % 3 === 0 && {
      subRows: [
        {
          cells: {
            details: <C.Text>Sub-row for Item {i + 1}</C.Text>,
          },
          id: `row-${i + 1}-sub-1`,
        },
      ],
    }),
  }));
};

export default function TableDemo(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  // Column definitions
  const columns = [
    { key: "name", label: "Name", sortable: true },
    { key: "status", label: "Status", width: "120px" },
    { align: "right" as const, key: "value", label: "Value", sortable: true, width: "100px" },
    { key: "actions", label: "Actions", width: "80px" },
  ];

  // Generate sample data
  const rows = generateData(20);

  // Loading simulation
  const simulateLoading = (): void => {
    setLoading(true);
    setError(undefined);
    setTimeout(() => setLoading(false), 2000);
  };

  // Error simulation
  const simulateError = (): void => {
    setError("Failed to load data");
    setLoading(false);
  };

  return (
    <C.Stack
      css={{
        display: "grid",
        gap: "$large",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}>
      {/* Basic Table */}
      <C.Box header={<C.Text as="h4">Basic Table</C.Text>}>
        <C.Table columns={columns} rows={rows.slice(0, 3)} />
      </C.Box>

      {/* With Pagination */}
      <C.Box header={<C.Text as="h4">With Pagination</C.Text>}>
        <C.Table columns={columns} pagination rows={rows} />
      </C.Box>

      {/* Keyboard Navigation */}
      <C.Box header={<C.Text as="h4">Keyboard Navigation</C.Text>}>
        <C.Table columns={columns} kbd rows={rows.slice(0, 4)} />
        <C.Text accent>Use arrow keys to navigate</C.Text>
      </C.Box>

      {/* Loading State */}
      <C.Box header={<C.Text as="h4">Loading State</C.Text>}>
        <C.Stack css={{ gap: "$small" }}>
          <C.Button small onClick={simulateLoading}>
            <C.Icon radix={<ChevronUpIcon />} />
            Load
          </C.Button>
          <C.Table columns={columns} loading={loading} rows={rows.slice(0, 3)} />
        </C.Stack>
      </C.Box>

      {/* Error State */}
      <C.Box header={<C.Text as="h4">Error State</C.Text>}>
        <C.Stack css={{ gap: "$small" }}>
          <C.Button small onClick={simulateError}>
            <C.Icon radix={<ExclamationTriangleIcon />} />
            Error
          </C.Button>
          <C.Table columns={columns} error={error} rows={rows.slice(0, 3)} />
        </C.Stack>
      </C.Box>

      {/* Expandable Rows */}
      <C.Box header={<C.Text as="h4">Expandable Rows</C.Text>}>
        <C.Table columns={columns} rows={rows.slice(0, 6)} />
        <C.Text accent>Every 3rd row expands</C.Text>
      </C.Box>
    </C.Stack>
  );
}

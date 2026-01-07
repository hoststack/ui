import { sort } from "fast-sort";
import { useState, useCallback, useMemo, Fragment, useRef, useEffect, type JSX } from "react";

import {
  ExclamationTriangleIcon,
  CaretDownIcon,
  CaretRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "../../icons";
import { Loading, Stack, Text, Button, Badge, Box, Icon, type ITable } from "../../index";
import {
  TableStyles,
  TableCoreStyles,
  TableRowStyles,
  TableCellStyles,
  TableHeaderCellStyles,
  AnimatedTableRow,
  TablePaginationBlock,
  TableCellBlock,
  TableSubRowStyles,
  TableSubCellStyles,
  TableMobileView,
  TableMobileRow,
  TableMobileLabel,
  TableMobileValue,
  TableEmptyStateCell,
} from "./styles";

export default function Table({
  columns,
  css,
  error,
  kbd = false,
  loading,
  pagination = false,
  rows,
}: ITable): JSX.Element {
  const tableRef = useRef<HTMLTableElement>(null);
  const tableHeaderRef = useRef<HTMLTableRowElement>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState(new Set<string>());
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const itemsPerPage = 25;
  const memoizedColumns = useMemo(() => columns, [columns]);
  const memoizedRows = useMemo(() => rows, [rows]);
  const hasData = !loading && !error && memoizedRows.length > 0;
  const isFirstPage = currentPage === 1;
  const showPagination = pagination && memoizedRows.length > itemsPerPage;

  const sortedRows = useMemo(() => {
    if (!sortColumn) return memoizedRows;

    return sortDirection === "asc"
      ? sort(memoizedRows).asc((row) => row.cells[sortColumn])
      : sort(memoizedRows).desc((row) => row.cells[sortColumn]);
  }, [memoizedRows, sortColumn, sortDirection]);

  const totalPages = useMemo(
    () => Math.ceil(sortedRows.length / itemsPerPage),
    [sortedRows.length],
  );

  const paginatedRows = useMemo(() => {
    if (!pagination || sortedRows.length <= itemsPerPage) return sortedRows;

    const startIndex = (currentPage - 1) * itemsPerPage;

    return sortedRows.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedRows, currentPage, pagination]);

  const isLastPage = currentPage === totalPages;

  const scrollToTop = useCallback(() => {
    if (tableHeaderRef.current) {
      tableHeaderRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
    scrollToTop();
  }, [scrollToTop]);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
    scrollToTop();
  }, [totalPages, scrollToTop]);

  const toggleRow = useCallback((id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        const row = document.getElementById(id);

        row?.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      return next;
    });
  }, []);

  const handleSort = useCallback((columnKey: string) => {
    setSortColumn((prev) => {
      if (prev === columnKey) {
        setSortDirection((d) => (d === "asc" ? "desc" : "asc"));

        return columnKey;
      }
      setSortDirection("asc");

      return columnKey;
    });
  }, []);

  const getSortButtonOpacity = useCallback(
    (colKey: string): string => {
      return sortColumn === colKey ? "$default" : "$light";
    },
    [sortColumn],
  );

  const renderLoadingState = useCallback((): JSX.Element => {
    return (
      <Stack css={{ alignItems: "center", gap: "$medium" }}>
        <Loading />
        <Text as="small" css={{ opacity: "$light" }}>
          Loading data...
        </Text>
      </Stack>
    );
  }, []);

  const renderErrorState = useCallback((): JSX.Element => {
    return (
      <Stack css={{ alignItems: "center", gap: "$small" }}>
        <Badge icon={<Icon radix={<ExclamationTriangleIcon />} />} theme="yellow">
          {error}
        </Badge>
      </Stack>
    );
  }, [error]);

  const renderEmptyState = useCallback((): JSX.Element => {
    return (
      <Text as="small" css={{ opacity: "$light" }}>
        No data available
      </Text>
    );
  }, []);

  useEffect(() => {
    if (!kbd || !pagination) return;

    function handleKeyDown(event: KeyboardEvent): void {
      if ((event.ctrlKey || event.metaKey) && event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrevPage();
      } else if ((event.ctrlKey || event.metaKey) && event.key === "ArrowRight") {
        event.preventDefault();
        handleNextPage();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return (): void => document.removeEventListener("keydown", handleKeyDown);
  }, [kbd, pagination, handlePrevPage, handleNextPage]);

  const renderDesktopRow = useCallback(
    (row: ITable["rows"][0], isSubRow = false) => {
      const hasSubRows = Boolean(row.subRows?.length);
      const isExpanded = expanded.has(row.id);
      const isFullWidth = Object.keys(row.cells).length === 1;
      const RowComponent = isSubRow ? TableSubRowStyles : AnimatedTableRow;
      const CellComponent = isSubRow ? TableSubCellStyles : TableCellStyles;

      return (
        <Fragment key={row.id}>
          <RowComponent id={row.id}>
            {isFullWidth ? (
              <CellComponent colSpan={memoizedColumns.length} isFullWidth>
                {row.cells[Object.keys(row.cells)[0]]}
              </CellComponent>
            ) : (
              memoizedColumns.map((col) => (
                <CellComponent
                  key={`${row.id}-${col.key}`}
                  align={col.align}
                  css={{ width: col.width || `calc(100% / ${memoizedColumns.length})` }}
                  isAction={col.key === "actions"}>
                  <TableCellBlock
                    css={{
                      justifyContent: col.key === "actions" ? "flex-end" : "flex-start",
                    }}>
                    {col.key === "actions" && hasSubRows && !isSubRow && (
                      <Button
                        small
                        theme="minimal"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleRow(row.id);
                        }}>
                        {isExpanded ? (
                          <Icon radix={<CaretDownIcon />} />
                        ) : (
                          <Icon radix={<CaretRightIcon />} />
                        )}
                      </Button>
                    )}
                    {row.cells[col.key]}
                  </TableCellBlock>
                </CellComponent>
              ))
            )}
          </RowComponent>
          {isExpanded && hasSubRows && row.subRows?.map((subRow) => renderDesktopRow(subRow, true))}
        </Fragment>
      );
    },
    [expanded, memoizedColumns, toggleRow],
  );

  const renderMobileCard = useCallback(
    (row: ITable["rows"][0], isSubRow = false) => {
      const hasSubRows = Boolean(row.subRows?.length);
      const isExpanded = expanded.has(row.id);
      const isFullWidth = Object.keys(row.cells).length === 1;

      return (
        <Fragment key={row.id}>
          <Box theme={isSubRow ? "fill" : "default"}>
            {isFullWidth ? (
              <div>{row.cells[Object.keys(row.cells)[0]]}</div>
            ) : (
              <>
                {memoizedColumns
                  .filter((col) => col.key !== "actions")
                  .map((col) => (
                    <TableMobileRow key={`${row.id}-${col.key}`}>
                      <TableMobileLabel>{col.label}</TableMobileLabel>
                      <TableMobileValue>{row.cells[col.key]}</TableMobileValue>
                    </TableMobileRow>
                  ))}

                {(row.cells.actions || (hasSubRows && !isSubRow)) && (
                  <TableMobileRow isActions>
                    <TableMobileValue isActions>
                      {hasSubRows && !isSubRow && (
                        <Button
                          small
                          theme="minimal"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleRow(row.id);
                          }}>
                          {isExpanded ? (
                            <Icon radix={<CaretDownIcon />} />
                          ) : (
                            <Icon radix={<CaretRightIcon />} />
                          )}
                        </Button>
                      )}
                      {row.cells.actions}
                    </TableMobileValue>
                  </TableMobileRow>
                )}
              </>
            )}
          </Box>
          {isExpanded && hasSubRows && row.subRows?.map((subRow) => renderMobileCard(subRow, true))}
        </Fragment>
      );
    },
    [expanded, memoizedColumns, toggleRow],
  );

  return (
    <TableStyles css={css}>
      <TableCoreStyles ref={tableRef} aria-busy={loading || undefined}>
        <thead>
          <TableRowStyles ref={tableHeaderRef}>
            {memoizedColumns.map((col) => (
              <TableHeaderCellStyles
                key={col.key}
                align={col.align}
                css={{
                  width: col.width || `calc(100% / ${memoizedColumns.length})`,
                }}
                scope="col">
                <div
                  aria-sort={
                    col.sortable && sortColumn === col.key
                      ? sortDirection === "asc"
                        ? "ascending"
                        : "descending"
                      : undefined
                  }>
                  {col.label}
                  {col.sortable && (
                    <Button
                      css={{
                        "&:hover": {
                          backgroundColor: "$surface",
                          opacity: 1,
                        },
                        opacity: getSortButtonOpacity(col.key),
                        transition: "$default",
                      }}
                      small
                      theme="minimal"
                      onClick={() => handleSort(col.key)}>
                      {sortColumn === col.key ? (
                        sortDirection === "asc" ? (
                          <Icon radix={<ArrowUpIcon />} />
                        ) : (
                          <Icon radix={<ArrowDownIcon />} />
                        )
                      ) : (
                        <Icon radix={<ArrowUpIcon />} />
                      )}
                    </Button>
                  )}
                </div>
              </TableHeaderCellStyles>
            ))}
          </TableRowStyles>
        </thead>
        <tbody>
          {error ? (
            <tr>
              <TableEmptyStateCell colSpan={columns.length}>
                {renderErrorState()}
              </TableEmptyStateCell>
            </tr>
          ) : loading ? (
            <tr>
              <TableEmptyStateCell colSpan={columns.length}>
                {renderLoadingState()}
              </TableEmptyStateCell>
            </tr>
          ) : hasData ? (
            paginatedRows.map((row) => renderDesktopRow(row))
          ) : (
            <tr>
              <TableEmptyStateCell colSpan={columns.length}>
                {renderEmptyState()}
              </TableEmptyStateCell>
            </tr>
          )}
        </tbody>
      </TableCoreStyles>

      <TableMobileView>
        {error ? (
          <Box>
            <Stack css={{ alignItems: "center", gap: "$small", textAlign: "center" }}>
              {renderErrorState()}
            </Stack>
          </Box>
        ) : loading ? (
          <Box>
            <Stack css={{ alignItems: "center", gap: "$medium", textAlign: "center" }}>
              {renderLoadingState()}
            </Stack>
          </Box>
        ) : hasData ? (
          paginatedRows.map((row) => renderMobileCard(row))
        ) : (
          <Box>
            <Stack css={{ alignItems: "center", gap: "$medium", textAlign: "center" }}>
              {renderEmptyState()}
            </Stack>
          </Box>
        )}
      </TableMobileView>

      {showPagination && (
        <TablePaginationBlock>
          <Text as="small">
            Page {currentPage} of {totalPages} ({sortedRows.length} total)
          </Text>
          <Stack>
            <Button
              disabled={isFirstPage}
              icon={<Icon radix={<ArrowLeftIcon />} />}
              inline="small"
              small
              onClick={handlePrevPage}>
              Previous
            </Button>
            <Button
              disabled={isLastPage}
              icon={<Icon radix={<ArrowRightIcon />} />}
              iconPosition="right"
              small
              onClick={handleNextPage}>
              Next
            </Button>
          </Stack>
        </TablePaginationBlock>
      )}
    </TableStyles>
  );
}

Table.displayName = "Table";

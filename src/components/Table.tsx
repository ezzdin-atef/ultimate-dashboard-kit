import {
  Column,
  ColumnFiltersState,
  createColumnHelper,
  FilterFn,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  Header,
  SortingState,
  Table,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
import { isUrl } from "../utils/isUrl";
import { FaSort, FaSortAmountDown, FaSortAmountUp, FaSortAmountUpAlt } from "react-icons/fa";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export default function CustomTable({ data, columns, isFilterableByField }: CusomTableProps) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns: columns.map((el) => ({
      accessorKey: el.accessor,
      cell: (info) => info.getValue(),
      enableSorting: el.enableSorting === undefined ? true : el.enableSorting,
    })),
    state: {
      sorting,
      columnFilters,
    },
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
  });

  return (
    <div>
      <div className="relative my-2">
        {isFilterableByField && (
          <div className="my-3 flex flex-wrap gap-2">
            {table
              .getHeaderGroups()
              .map((headerGroup) =>
                headerGroup.headers.map((header) =>
                  header.column.getCanFilter() ? (
                    <Filter column={header.column} table={table} header={header} key={header.id} />
                  ) : null
                )
              )}
          </div>
        )}
        {/* For desktop view */}
        <table className="min-w-full table-fixed dark:divide-gray-600 text-sm hidden md:table">
          <thead className="bg-gray-100 dark:bg-gray-700 text-xs uppercase text-slate-700">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={`py-4 select-none ${header.column.getCanSort() ? "cursor-pointer" : ""}`}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center justify-center">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      <span className="mx-3 text-xs text-slate-600">
                        {/* {{
                          asc: <FaSortAmountUpAlt />,
                          desc: <FaSortAmountDown />,
                        }[header.column.getIsSorted() as string] ?? null} */}

                        {header.column.getIsSorted() && <FaSort />}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className="border-b bg-white text-gray-600">
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td className="py-5 px-6 text-center" key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* For mobile view */}
        <div className="mt-3 grid grid-cols-1 gap-5 md:hidden  divide-gray-200">
          {table.getRowModel().rows.map((row) => {
            return (
              <div
                key={row.id}
                className="flex flex-col justify-center divide-y divide-gray-200 border border-gray-200 rounded bg-white px-3 py-2 overflow-x-auto"
              >
                {table.getHeaderGroups().map((headerGroup) => {
                  return headerGroup.headers.map((header) => (
                    <div className="grid grid-cols-2 py-3 items-center justify-center">
                      <p className="select-none text-gray-600">
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </p>
                      <p>{row.getValue(header.column.id)}</p>
                    </div>
                  ));
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Filter({
  column,
  table,
  header,
}: {
  column: Column<any, unknown>;
  header: Header<any, unknown>;
  table: Table<any>;
}) {
  const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = React.useMemo(
    () => (typeof firstValue === "number" ? [] : Array.from(column.getFacetedUniqueValues().keys()).sort()),
    [column.getFacetedUniqueValues()]
  );

  if (typeof firstValue === "string" && !isUrl(firstValue))
    return (
      <>
        <datalist id={column.id + "list"}>
          {sortedUniqueValues.slice(0, 5000).map((value: any, index) => (
            <option value={value} key={index} />
          ))}
        </datalist>
        <DebouncedInput
          type="text"
          value={(columnFilterValue ?? "") as string}
          onChange={(value) => column.setFilterValue(value)}
          placeholder={`ابحث في ${
            typeof column.columnDef.header === "function" && (column.columnDef.header(header.getContext()) as string)
          }... (${column.getFacetedUniqueValues().size})`}
          className="w-52 rounded border px-1 py-1 text-sm focus:outline-none"
          list={column.id + "list"}
        />
      </>
    );

  return null;
}

// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return <input {...props} value={value} onChange={(e) => setValue(e.target.value)} />;
}

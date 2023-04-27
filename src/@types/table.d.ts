interface CusomTableProps {
  data: any;
  columns: { accessor: string; name: string; enableSorting?: boolean }[];
  isFilterableByField?: boolean;
}

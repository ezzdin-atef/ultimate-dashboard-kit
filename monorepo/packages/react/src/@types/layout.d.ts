interface CrudTableLayoutProps {
  table: CusomTableProps;
  title: string;
  name?: string;
  description?: string;
  disableSearch?: boolean;
  disableAddingRecords?: boolean;
  AddingIconButton?: React.ReactNode;
  newButtonLink?: string;
}

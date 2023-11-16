export interface paginationProps {
  itemsPerPage: number;
  currentPage: number;
  handleSetCurrentPage: (
    page: number,
    event: React.ChangeEvent<unknown>
  ) => void;
}

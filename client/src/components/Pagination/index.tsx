import { Box, Pagination, Stack } from "@mui/material";

import { useTypeSelector } from "@/hooks/redux";

import { paginationProps } from "./interfaces";
import paginationBarStyle from "./styled";

export const PaginationBar = ({
  itemsPerPage,
  currentPage,
  handleSetCurrentPage,
}: paginationProps) => {
  const pallete = useTypeSelector((state) => state.appSlice.Pallete);
  const users = useTypeSelector((state) => state.adminSlice.users);
  const usePaginationBarStyle = paginationBarStyle({ Pallete: pallete });
  return (
    <Box>
      <Stack className={usePaginationBarStyle.classes.pagination} spacing={2}>
        <Pagination
          count={Math.ceil(users.length / itemsPerPage)}
          page={currentPage}
          shape="rounded"
          onChange={(event, page) => handleSetCurrentPage(page, event)}
        />
      </Stack>
    </Box>
  );
};

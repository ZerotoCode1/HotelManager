import { Pagination as PaginationMui } from "@mui/material";

interface PaginationProps {
  totalPage: number;
  currentPage: number;
  handleChangePage?: (value: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const { totalPage, currentPage, handleChangePage } = props;
  return (
    <div>
      <PaginationMui
        defaultPage={currentPage ?? 1}
        count={totalPage}
        variant="outlined"
        shape="rounded"
        onChange={(e, value) => {
          handleChangePage && handleChangePage(value);
          console.log(value, "value");
        }}
      />
    </div>
  );
};

export default Pagination;

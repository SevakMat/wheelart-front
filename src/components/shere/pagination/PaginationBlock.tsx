import { Pagination } from "@mui/material";
import * as React from "react";

function PaginationBlock() {
  const [page, setPage] = React.useState(1);
  const handlePageChange = (e: any, value: any) => {
    console.log(e, value);
    setPage(value);
  };

  return (
    <center>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pagination
          count={20}
          onChange={handlePageChange}
          sx={{ color: "black" }}
        />
      </div>
    </center>
  );
}

export default PaginationBlock;

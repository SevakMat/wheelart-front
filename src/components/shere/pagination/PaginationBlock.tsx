import * as React from "react";
import { Pagination } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState, useAppSelector } from "../../../store";
import { useParamsHook } from "../../../hook/useParams";

interface PaginationBlockProp {
  count: number,
  list: any |null
}

function PaginationBlock({ count, list =[]}: PaginationBlockProp) {

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = React.useMemo(() => new URLSearchParams(location.search), [
    location.search,
  ]);
  const { page: pageValue } = useParamsHook()

  const handlePageChange = (e: any, value: any) => {

    queryParams.set('page', value);

    navigate(`?${queryParams.toString()}`);

  };

  const paginationCount = Math.ceil(count / 12)

  return (
    <center>
      {list?.length > 0 && <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pagination
          count={paginationCount}
          onChange={handlePageChange}
          sx={{ color: "black" }}
          page={pageValue ? +pageValue : 1}
        />
      </div>}
    </center>
  );
}

export default PaginationBlock;

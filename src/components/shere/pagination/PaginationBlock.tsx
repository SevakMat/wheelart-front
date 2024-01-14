import * as React from "react";
import { Pagination } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState, useAppSelector } from "../../../store";

function PaginationBlock() {
  const { rimsCount, rimList } = useAppSelector((state: RootState) => state.rim)

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = React.useMemo(() => new URLSearchParams(location.search), [
    location.search,
  ]);
  const makeValue = queryParams.get("page") ?? undefined;


  const handlePageChange = (e: any, value: any) => {

    queryParams.set('page', value);

    navigate(`?${queryParams.toString()}`);

  };

  const paginationCount = Math.ceil(rimsCount / 12)

  return (
    <center>
      {rimList.length > 0 && <div
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
          page={makeValue ? +makeValue : 1}
        />
      </div>}
    </center>
  );
}

export default PaginationBlock;

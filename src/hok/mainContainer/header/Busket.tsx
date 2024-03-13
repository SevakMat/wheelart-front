import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { RootState, useAppSelector } from "../../../store";

const HeaderBusket = () => {
  const navigate = useNavigate();
  const { rimShopList, tireShopList } = useAppSelector(
    (state: RootState) => state.shopBusket
  );
  const totalBusketCount = rimShopList?.length + tireShopList?.length;

  return (
    <IconButton
      onClick={() => navigate("/shop-basket")}
      sx={{ alignItems: "end" }}
    >
      <LocalMallIcon style={{ color: "white" }} />
      <Box
        sx={{
          color: "white",
          fontSize: "12px",
        }}
      >
        {totalBusketCount}
      </Box>
    </IconButton>
  );
};

export default HeaderBusket;

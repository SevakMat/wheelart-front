import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material"
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { RootState, useAppSelector } from "../../../store";

const HeaderBusket = () => {
  const navigate = useNavigate();
  const { rimShopList, tireShopList } = useAppSelector((state: RootState) => state.shopBusket)
  const totalBusketCount = rimShopList?.length + tireShopList?.length

  return (
    <IconButton onClick={() => navigate("/shop-basket")}>
      <Box sx={{ color: "white" }}>
        {totalBusketCount}
      </Box>
      <LocalMallIcon style={{ color: "white" }} />
    </IconButton>
  )
}

export default HeaderBusket
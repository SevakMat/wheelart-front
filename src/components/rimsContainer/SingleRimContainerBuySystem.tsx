import { Box, Button } from "@mui/material"
import QuantityInput from "../shere/quantityInput/QuantityInput"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { TireType } from "../../store/types/tire/tire";
import { useState } from "react";
import Popup from "../../shared/popups/Popup";
import ShopBasketItemList from "../shopBasketContainer/ShopBasketItemList";
import { setShopBusketItemEffect } from "../../store/effects/shopBusket/shopBusket.effect";
import { RimType } from "../../store/types/rim/rim";

type SingleRimContainerBuySystemProps = {
  rim: RimType
}

const SingleRimContainerBuySystem = ({ rim }: SingleRimContainerBuySystemProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 2, padding: 3 }}>
        <Box>
          <QuantityInput setCount={setCount} count={count} />
        </Box>
        <Button
          variant="contained"
          disableElevation
          onClick={() => {
            dispatch(setShopBusketItemEffect({ ...rim, count: count, type: 'RIM' } as RimType, "rim"))
            setOpen(true)
          }}
          sx={{
            background: "#293239",
            "&:hover": { background: "#314554" },
          }}
        >
          Add to card
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{
            background: "#FF5500",
            "&:hover": { background: "#C84300" },
          }}
        >
          Buy Now
        </Button>
      </Box>
      <Popup open={open} onClose={handleClose}
        content={
          <div>
            <ShopBasketItemList />
          </div>
        } />
    </Box>
  )
}

export default SingleRimContainerBuySystem
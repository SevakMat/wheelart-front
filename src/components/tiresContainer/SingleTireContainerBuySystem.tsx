import { Box, Button } from "@mui/material"
import QuantityInput from "../shere/quantityInput/QuantityInput"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setShopBusketItemEffect } from "../../store/effects/shopBusket/shopBusket.effect";
import { TireType } from "../../store/types/tire/tire";
import { useState } from "react";

type SingleTireContainerBuySystemProps = {
  tire: TireType
}

const SingleTireContainerBuySystem = ({ tire }: SingleTireContainerBuySystemProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [count, setCount] = useState(1);

  return (
    <Box sx={{ display: "flex", gap: 2, padding: 3 }}>
      <Box>
        <QuantityInput setCount={setCount} count={count} />
      </Box>
      <Button
        variant="contained"
        disableElevation
        sx={{
          background: "#293239",
          "&:hover": { background: "#314554" },
        }}
        onClick={() => { dispatch(setShopBusketItemEffect({ ...tire, count: count, type:"TIRE" } as TireType, "tire")) }}
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
  )
}

export default SingleTireContainerBuySystem
import { Box } from "@mui/system";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { Button, Rating, Typography } from "@mui/material";
import QuantityInput from "../shere/quantityInput/QuantityInput";
import { setShopBusketItemEffect } from "../../store/effects/shopBusket/shopBusket.effect";
import { TireType } from "../../store/types/tire/tire";

const SingleTireMainInfo = (tireInfo: any) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Set of 4 {tireInfo?.marka}</Typography>
      <Box>
        <Typography sx={{ fontSize: 12, color: "#C0C0C0" }}>
          Rate product
        </Typography>
        <Rating name="simple-controlled" value={1} />
      </Box>
      <Typography variant="h5" component="p">
        €{"rim?.price"}
      </Typography>
      <Typography
        sx={{ maxWidth: 500, textAlign: "center", padding: "0 10px" }}
      >
        Before each purchase, we advise you to check the parameters of your
        vehicle very carefully . For any other questions or information, do not
        hesitate to contact us by telephone, via the “ contact ” section of the
        website or on our social networks. Our blog remains available for more
        details.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          padding: 3,
          justifyContent: "center",
          "@media (max-width: 1000px)": { flexDirection: "column" },
        }}
      >
        <Box>
          <QuantityInput />
        </Box>
        <Button
          variant="contained"
          disableElevation
          sx={{
            background: "#293239",
            "&:hover": { background: "#314554" },
          }}
          onClick={() => {
            dispatch(setShopBusketItemEffect(tireInfo as TireType, "tire"));
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
    </Box>
  );
};

export default SingleTireMainInfo;

import { Box, Button, Rating, Typography } from "@mui/material";
import QuantityInput from "../shere/quantityInput/QuantityInput";
import { useState } from "react";

const SingleAccsMainInfo = (accsInfo: any) => {
  const [count, setCount] = useState(1);
 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">
        Set of 4 {accsInfo?.sizeR}″ {accsInfo?.rimModel} Pneus
      </Typography>
      <Box>
        <Typography sx={{ fontSize: 12, color: "#C0C0C0" }}>
          Rate product
        </Typography>
        <Rating name="simple-controlled" value={accsInfo?.score} />
      </Box>
      <Typography variant="h5" component="p">
        €{accsInfo?.price}
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
          <QuantityInput count={count} setCount={setCount}/>
        </Box>
        <Button
          variant="contained"
          disableElevation
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
    </Box>
  );
};

export default SingleAccsMainInfo;

import { Box, Rating, Typography } from "@mui/material";
import SingleRimContainerBuySystem from "./SingleRimContainerBuySystem";

const SingleRimMainInfo = (rimInfo: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">
        Set of 4 {rimInfo?.sizeR}″ {rimInfo?.rimModel} Pneus
      </Typography>
      <Box>
        <Typography sx={{ fontSize: 12, color: "#C0C0C0" }}>
          Rate product
        </Typography>
        <Rating name="simple-controlled" value={rimInfo?.score} />
      </Box>
      <Typography variant="h5" component="p">
        €{rimInfo?.price}
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
      <SingleRimContainerBuySystem rim={rimInfo} />
    </Box>
  );
};

export default SingleRimMainInfo;

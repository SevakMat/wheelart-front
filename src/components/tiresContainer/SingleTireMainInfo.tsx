import { Box } from "@mui/system";
import { Rating, Typography } from "@mui/material";
import SingleTireContainerBuySystem from "./SingleTireContainerBuySystem";

const SingleTireMainInfo = (tireInfo: any) => {

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
      <SingleTireContainerBuySystem tire={tireInfo} />
    </Box>
  );
};

export default SingleTireMainInfo;

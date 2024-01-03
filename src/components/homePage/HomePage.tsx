import { Box } from "@mui/system";

import { RootState, useAppSelector } from "../../store";

import Carousel from "./Carousel/Carousel";
import ShortInfo from "./ShortInfo";
import Products from "./products/Products";
import BlogCards from "./BlogCards";

const HomePage = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "0px auto",
        width: "100%",

        maxWidth: "1920px",
        position: "relative",
      }}
    >
      <Box>
        <Carousel />
        <ShortInfo />
        <Products />
        <BlogCards />
      </Box>

      {/* <Box>1 mobile 2 mobile 3 mobile</Box> */}
    </Box>
  );
};

export default HomePage;

import { Box } from "@mui/system";

import Carousel from "./carousel/Carousel";
import ShortInfo from "./ShortInfo";
import PopularProducts from "./PopularProducts/PopularProducts";
import About from "./About";
import BlogsHome from "./blogs/BlogsHome";

const HomePage = () => {
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
        {/* <PopularProducts />
        <About />
        <BlogsHome /> */}
      </Box>
    </Box>
  );
};

export default HomePage;

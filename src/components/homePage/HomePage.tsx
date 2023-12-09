import { Box } from "@mui/system";

import { RootState, useAppSelector } from "../../store";

import MainCarousel from "./MainCarousel";
import Products from "./Products";
import BlogCards from "./BlogCards";

const HomePage = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        width: "92%",
      }}
    >
      <Box>
        <MainCarousel />
        <Products />
        <BlogCards />
      </Box>

      {/* <Box>1 mobile 2 mobile 3 mobile</Box> */}
    </Box>
  );
};

export default HomePage;

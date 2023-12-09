import { Box } from "@mui/system";

import { RootState, useAppSelector } from "../../store";

import HomeCarousel from "./HomeCarousel";

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
        <HomeCarousel />
      </Box>

      <Box>1 mobile 2 mobile 3 mobile</Box>
    </Box>
  );
};

export default HomePage;

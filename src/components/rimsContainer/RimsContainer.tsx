import { Box, Typography } from "@mui/material";

import RimFilter from "./RimFilter";

import "../../fonts/monsterrat.css";
import RimsList from "./RimsList";
import PaginationBlock from "../shere/pagination/PaginationBlock";

const RimsContainer = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/alloy-wheel-shape-star_114160-964.jpg?w=1060)",

          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          textAlign: "center",
          width: "100%",
          padding: "80px 0",
        }}
      >
        <Typography
          variant="h3"
          textTransform="uppercase"
          sx={{
            color: "white",
            fontWeight: "bold",
            textAlign: "left",
            paddingLeft: 15,
            letterSpacing: 30,
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Janets
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <RimFilter />
          <RimsList />
        </Box>
        <Box sx={{ paddingLeft: 40, marginBottom: 5 }}>
          <PaginationBlock />
        </Box>
      </Box>
    </Box>
  );
};

export default RimsContainer;

import { Box, Typography } from "@mui/material";

import RimFilter from "./RimFilter";

import "../../fonts/monsterrat.css";
import RimsList from "./RimsList";
import PaginationBlock from "../shere/pagination/PaginationBlock";
import ModalRimFilter from "./ModalRimFilter";

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

            "@media(max-width: 500px)": {
              fontSize: 30,
              paddingLeft: 0,
              textAlign: "center",
            },
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
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <RimFilter />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <ModalRimFilter />
            </Box>
            <RimsList />
          </Box>
        </Box>
        <Box sx={{ paddingLeft: 40, marginBottom: 5 }}>
          <PaginationBlock />
        </Box>
      </Box>
    </Box>
  );
};

export default RimsContainer;

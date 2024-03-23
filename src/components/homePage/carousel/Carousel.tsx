import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import SearchCars from "../searchFeilds/SearchCars";
import "../../../fonts/monsterrat.css";
import Slider from "./Slider";
import { customBreakpoints } from "../../../customBreakpoints";
import ModalSearchCars from "../searchFeilds/ModalSearchCars";

function SwipeableTextMobileStepper() {
  const [t] = useTranslation("home");
  const isSmallScreen = useMediaQuery('(max-width:1000px)');

  return (
    <ThemeProvider theme={customBreakpoints}>
      <Box
        sx={{
          maxWidth: "100%",
          flexGrow: 1,
          position: "relative",
          display: "flex",
          userSelect: "none",
        }}
      >
        <Slider />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            position: "absolute",
            maxWidth: 800,

            justifyContent: "center",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            bottom: "60%",
            padding: "1px 30px",
            borderRadius: 5,
            backdropFilter: "blur(5px)",
            background:
              "radial-gradient(circle, rgba(65,0,0,0.8101365546218487) 0%, rgba(0,0,0,0) 100%)",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 60,
              fontWeight: "bold",
              letterSpacing: 8,
            }}
          >
            {t("content.findYourRim")}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10,
              paddingBottom: 1,
            }}
          >
            {t("content.TheLargestAssortmentInFrance")}
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            display: "flex",
            bottom: "45%",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            justifyContent: "center",

            "@media(max-width: 1000px)": {
              bottom: "15%",
            },
          }}
        >
        {
          isSmallScreen?
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <ModalSearchCars />
        </Box>
        :
          <Box
            sx={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 100%)",
              padding: "0 10px",
              borderRadius: 20,
              marginLeft: 0,
              marginRight: 0,
              left: 0,
              right: 0,
              backdropFilter: "blur(2px)",
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              maxWidth: "800px",
              width: "70%",
            }}
          >
            <SearchCars />
          </Box>
        }
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default SwipeableTextMobileStepper;

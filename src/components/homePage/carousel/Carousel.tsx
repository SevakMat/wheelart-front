import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchCars from "../searchFeilds/SearchCars";

import "../../../fonts/monsterrat.css";
import Slider from "./Slider";
import { useTranslation } from "react-i18next";


function SwipeableTextMobileStepper() {
  const [t] = useTranslation("home")

  return (
    <Box
      sx={{
        maxWidth: "100%",
        flexGrow: 1,
        position: "relative",
        justifyContent: "flex-end",
        display: "flex",
      }}
    >
      <Slider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          width: 500,
          justifyContent: "center",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          bottom: 100,
          padding: "1px 30px",
          borderRadius: 5,
          backdropFilter: "blur(5px)",
          background:
            " radial-gradient(circle, rgba(65,0,0,0.8101365546218487) 0%, rgba(0,0,0,0) 100%)",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 50,
            fontWeight: "bold",
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
          bottom: 30,
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            // background:
            //   "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3617822128851541) 16%, rgba(0,0,0,0.7) 100%)",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 100%)",
            padding: "0 10px",
            borderRadius: 20,
            // borderTopRightRadius: 0,
            // borderBottomRightRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            left: 0,
            right: 0,
            backdropFilter: "blur(2px)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SearchCars />
        </Box>
      </Box>
    </Box>
  );
}

export default SwipeableTextMobileStepper;

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { CaruselItemInfoF } from "./constants/caruselItemInfo";

import "../../../fonts/monsterrat.css";
import { ThemeProvider } from "@emotion/react";
import { customBreakpoints } from "../../../customBreakpoints";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = CaruselItemInfoF().length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <ThemeProvider theme={customBreakpoints}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        interval={7000}
        enableMouseEvents
      >
        {CaruselItemInfoF().map((item, index) => (
          <div key={index}>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                component="img"
                sx={{
                  maxHeight: "calc(100vh - 65px)",
                  height: "100%",

                  // height: "100%",
                  display: "block",
                  objectFit: "cover",
                  overflow: "hidden",
                  width: "100%",

                  "@media (max-width: 400px)": {
                    height: "45vh",
                  },
                  // "@media (max-width: 600px)": {
                  //   height: "60vh",
                  // },
                  // "@media (max-width: 1025px)": {
                  //   height: "70vh",
                  // },
                }}
                src={item.imgPath}
              />
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  height: 40,
                  bottom: "30%", // Changed from top to bottom
                  position: "absolute",
                  zIndex: 1,
                  left: "50%", // Keep it centered horizontally
                  transform: "translateX(-50%)", // This will center the box correctly
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    height: "100px",
                    flexWrap: "nowrap",
                    color: "white",
                    borderRadius: 10,
                    padding: "20px 50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(90deg, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.8) 100%)",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>

              {/* responsive */}
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  height: 40,
                  bottom: "80%", // Changed from top to bottom
                  position: "absolute",
                  zIndex: 1,
                  width: "75%",
                  justifyContent: "center",
                  left: "50%", // Keep it centered horizontally
                  transform: "translateX(-50%)", // This will center the box correctly
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    height: "100px",
                    flexWrap: "nowrap",
                    color: "white",
                    borderRadius: 10,
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(90deg, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.8) 100%)",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Box>
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <Box
        sx={{
          position: "absolute",
          right: 1,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          zIndex: 4,
        }}
      >
        <Button
          disableRipple
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          sx={{
            zIndex: 4,
            display: { xs: "none", sm: "flex" },
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight
              sx={{
                fontSize: 60,
                color: activeStep === 3 ? "transparent" : "white",
              }}
            />
          )}
        </Button>
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: 1,
          top: "50%",
          transform: "translateY(-50%)",
          display: { xs: "none", sm: "flex" },
          zIndex: 4,
        }}
      >
        <Button
          disableRipple
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={{
            zIndex: 4,
            display: "flex",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft
              sx={{
                fontSize: 60,
                color: activeStep === 0 ? "transparent" : "white",
              }}
            />
          )}
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default Slider;

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { caruselItemInfo } from "./constants/caruselItemInfo";

import "../../../fonts/monsterrat.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = caruselItemInfo.length;

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
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        interval={7000}
        enableMouseEvents
      >
        {caruselItemInfo.map((item) => (
          <div>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: "calc(100vh - 65px)",
                  display: "block",
                  objectFit: "cover",
                  overflow: "hidden",
                  width: "100%",

                  "@media (max-width: 500px)": {
                    height: "50vh",
                  },
                  "@media (max-width: 600px)": {
                    height: "60vh",
                  },
                  "@media (max-width: 1025px)": {
                    height: "70vh",
                  },
                }}
                src={item.imgPath}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: 50,
                  pl: 2,
                  top: "20%",
                  position: "absolute",
                  zIndex: 1,
                  left: "5%",
                }}
              >
                <Typography
                  sx={{
                    width: "550px",
                    fontFamily: "'Montserrat', sans-serif",
                    height: "150px",
                    color: "white",
                    borderRadius: 10,
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    background:
                      "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6756827731092436) 56%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Box>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
    </Box>
  );
}

export default SwipeableTextMobileStepper;

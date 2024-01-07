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
    <>
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
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
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

      <Box
        sx={{
          position: "absolute",
          right: 1,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
        }}
      >
        <Button
          disableRipple
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          sx={{
            display: "flex",
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
                fontSize: 80,
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
          display: "flex",
        }}
      >
        <Button
          disableRipple
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={{
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
                fontSize: 80,
                color: activeStep === 0 ? "transparent" : "white",
              }}
            />
          )}
        </Button>
      </Box>
    </>
  );
}

export default Slider;

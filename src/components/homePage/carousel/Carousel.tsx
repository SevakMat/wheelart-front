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
import SearchModule from "../searchFeilds/SearchModule";

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
    <Box
      sx={{
        maxWidth: "100%",
        flexGrow: 1,
        position: "relative",
        justifyContent: "flex-end",
        display: "flex",
      }}
    >
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

          // borderTopRightRadius: 0,
          // borderBottomRightRadius: 0,
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
          Trouvez votre jante
        </Typography>

        <Typography
          sx={{
            color: "white",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10,
            paddingBottom: 1,
          }}
        >
          Le plus grand assortiment de France
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
          <SearchModule />
        </Box>
      </Box>

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
    </Box>
  );
}

export default SwipeableTextMobileStepper;

import { Box, Typography, useMediaQuery } from "@mui/material";
import PaginationBlock from "../shere/pagination/PaginationBlock";
import { ThemeProvider } from "@emotion/react";
import TiresList from "./TiresList";
import TireFilter from "./TireFilter";

import { customBreakpoints } from "../../customBreakpoints";
import ModalTireFilter from "./ModalTireFilter";
import { RootState, useAppSelector } from "../../store";

const TiresContainer = () => {
  const { tiresCount, tireList } = useAppSelector((state: RootState) => state.tire)

  const isSmallScreen = useMediaQuery('(max-width:1000px)');


  return (
    <ThemeProvider theme={customBreakpoints}>
      <Box>
        <Box
          sx={{
            backgroundImage:
              "url(https://img.freepik.com/premium-photo/auto-repair-tires-sale_118124-97488.jpg?w=1060)",

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
            Pneus
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
            {!isSmallScreen &&
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <TireFilter />
              </Box>
            }
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {isSmallScreen &&
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                    justifyContent: "center",
                  }}
                >
                  <ModalTireFilter />
                </Box>
              }
              <TiresList />
            </Box>
          </Box>
          <Box sx={{ paddingLeft: 40, marginBottom: 5 }}>
            <PaginationBlock count={tiresCount} list={tireList} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default TiresContainer;

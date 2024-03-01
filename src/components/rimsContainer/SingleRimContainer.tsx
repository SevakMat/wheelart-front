import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { AppDispatch, RootState, useAppSelector } from "../../store";
import { getRimEffect } from "../../store/effects/rim/rim.effect";

import { ThemeProvider } from "@mui/material/styles";
import { customBreakpoints } from "../../customBreakpoints";

import {
  Box,
  Button,
  List,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

import QuantityInput from "../shere/quantityInput/QuantityInput";
import RimCard from "../shere/rims/RimCard";
import Slideshow from "../shere/slideshow/Slideshow";
import { useParamsHook } from "../../hook/useParams";
import TireCard from "../shere/tires/TireCard";
import { RimType } from "../../store/types/rim/rim";

import CreateAccordion from "../shere/accordion/CreateAccordion";
import { setShopBusketItemEffect } from "../../store/effects/shopBusket/shopBusket.effect";
import SingleRimDetails from "./SingleRimDetails";
import SingleRimMainInfo from "./SingleRimMianInfo";

const SingleRim = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  const {
    make: makeValue,
    model: modelValue,
    generation: generationValue,
    modification: modificationValue,
  } = useParamsHook();

  const { rim, recommendedRims } = useAppSelector(
    (state: RootState) => state.rim
  );
  const { recommendedTires } = useAppSelector((state: RootState) => state.tire);

  useEffect(() => {
    dispatch(
      getRimEffect(
        id,
        makeValue,
        modelValue,
        generationValue,
        modificationValue
      )
    );
  }, [id]);

  const images = rim?.imageUrl
    .split(";")
    .filter((item: any) => item !== "undefined");

  return (
    <ThemeProvider theme={customBreakpoints}>
      <Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={5}
            sx={{ justifyContent: "center", alignItems: "flex-start" }}
          >
            {images && <Slideshow images={images} />}
            <Stack direction="column" spacing={2} sx={{ paddingTop: 5 }}>
              <SingleRimMainInfo rimInfo={rim} />
              <SingleRimDetails info={rim} />
            </Stack>
          </Stack>
        </Box>

        {/* responsive */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
          }}
        >
          <Stack direction="column" sx={{ justifyContent: "center" }}>
            {images && <Slideshow images={images} />}
            <Stack
              direction="column"
              sx={{
                paddingTop: 5,
                justifyContent: "center",
              }}
            >
              <SingleRimMainInfo rimInfo={rim} />
              <SingleRimDetails info={rim} />
            </Stack>
          </Stack>
        </Box>

        <Stack direction="column" spacing={5}>
          <Box>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",

                "@media (max-width: 1000px)": { fontSize: 38 },
              }}
            >
              Recommended Tires
            </Typography>
            <List
              sx={{
                display: "flex",
                flexWrap: "no-wrap",
                gap: 3,
                justifyContent: "center",
                alignItems: "flex-start",
                overflow: "hidden",
                listStyle: "none",
                "@media (max-width: 1200px)": {
                  overflowX: "scroll",
                  justifyContent: "flex-start",

                  scrollbarWidth: "thin",

                  padding: "0 0 0 1rem",
                  gap: 3,
                },
              }}
            >
              {recommendedTires.length > 0 &&
                recommendedTires.map((tire) => {
                  return (
                    <li>
                      <TireCard
                        isPopular={true}
                        image={tire.imageUrl}
                        price={100}
                        tireWidth={tire.tireWidth}
                        marka={tire.marka}
                        tireAspectRatio={tire.tireAspectRatio}
                        tireDiameter={tire.rimDiameter}
                        tireId={tire.id}
                        color="black"
                      />
                    </li>
                  );
                })}
            </List>
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                "@media (max-width: 1000px)": { fontSize: 38 },
              }}
            >
              Products you might like
            </Typography>
            <List
              sx={{
                display: "flex",
                flexWrap: "no-wrap",
                gap: 3,
                justifyContent: "center",
                alignItems: "flex-start",
                overflow: "hidden",
                listStyle: "none",
                "@media (max-width: 1200px)": {
                  overflowX: "scroll",
                  justifyContent: "flex-start",

                  scrollbarWidth: "thin",

                  padding: "0 0 0 1rem",
                  gap: 3,
                },
              }}
            >
              {recommendedRims.length > 0 &&
                recommendedRims.map((rim: RimType) => {
                  return (
                    <li>
                      <RimCard
                        isPopular={false}
                        image={rim.imageUrl}
                        price={rim.price}
                        rimWidth={100}
                        color="Grey"
                        name={rim.rimModel}
                        size={rim.sizeR}
                        rimId={rim.id}
                      />
                    </li>
                  );
                })}
            </List>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default SingleRim;

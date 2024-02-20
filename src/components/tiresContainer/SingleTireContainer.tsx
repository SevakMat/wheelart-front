import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { AppDispatch, RootState, useAppSelector } from "../../store";
import { getRimEffect } from "../../store/effects/rim/rim.effect";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  List,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

import QuantityInput from "../shere/quantityInput/QuantityInput";
import RimCard from "../shere/rims/RimCard";
import Slideshow from "../shere/slideshow/Slideshow";
import { useParamsHook } from "../../hook/useParams";
import TireCard from "../shere/tires/TireCard";
import { RimType } from "../../store/types/rim/rim";
import { setShopBusketItemEffect } from "../../store/effects/shopBusket/shopBusket.effect";
import { getTireEffect } from "../../store/effects/tire/tire.effect";
import { TireType } from "../../store/types/tire/tire";

const SingleTireContanier = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  const {
    make: makeValue,
    model: modelValue,
    generation: generationValue,
    modification: modificationValue,
  } = useParamsHook();

  const { recommendedRims } = useAppSelector((state: RootState) => state.rim);
  const { recommendedTires, tire } = useAppSelector((state: RootState) => state.tire);

  useEffect(() => {
    dispatch(
      getTireEffect(id)
    );
  }, [id]);

  // const images = rim?.imageUrl
  //   .split(";")
  //   .filter((item: any) => item !== "undefined");

  const images = [
    "https://armstrongtire.com/app/themes/armstrongtire/assets/images/home/passenger/1510/tire.png",
  ];

  console.log(1111, tire);

  return (
    <Box sx={{ margin: "30px 20px" }}>
      <Box>
        <Stack direction="row" spacing={5}>
          {images && <Slideshow images={images} />}
          <Stack direction="column" spacing={2} sx={{ paddingTop: 5 }}>
            <Typography variant="h4">
              Set of 4 {tire?.marka}
            </Typography>
            <Box>
              <Typography sx={{ fontSize: 12, color: "#C0C0C0" }}>
                Rate product
              </Typography>
              <Rating name="simple-controlled" value={1} />
            </Box>
            <Typography variant="h5" component="p">
              €{"rim?.price"}
            </Typography>
            <Typography sx={{ maxWidth: 500 }}>
              Before each purchase, we advise you to check the parameters of
              your vehicle very carefully . For any other questions or
              information, do not hesitate to contact us by telephone, via the “
              contact ” section of the website or on our social networks. Our
              blog remains available for more details.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, padding: 3 }}>
              <Box>
                <QuantityInput />
              </Box>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  background: "#293239",
                  "&:hover": { background: "#314554" },
                }}
                onClick={() => { dispatch(setShopBusketItemEffect(tire as TireType, "tire")) }}
              >
                Add to card
              </Button>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  background: "#FF5500",
                  "&:hover": { background: "#C84300" },
                }}
              >
                Buy Now
              </Button>
            </Box>
            {/* <Box>
              <Button>Add to favorites</Button>
            </Box> */}

            <Box sx={{ width: "100%", paddingBottom: 5 }}>
              <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
                Details
              </Typography>
              <Table>
                <TableRow>
                  <TableCell variant="head">Model</TableCell>
                  <TableCell>{tire?.marka}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">Diameter</TableCell>
                  <TableCell>{tire?.rimDiameter}"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">Tire Aspect Ratio</TableCell>
                  <TableCell>
                    {tire?.tireAspectRatio}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">Width</TableCell>
                  <TableCell> {tire?.tireWidth}J</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">Stock</TableCell>
                  <TableCell>{tire?.stock}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">ET offset</TableCell>
                  <TableCell>50</TableCell>
                </TableRow>
              </Table>
            </Box>
          </Stack>
        </Stack>

        <Stack direction="column" spacing={5}>
          <Box>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              Recommended Tires
            </Typography>
            <List
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                justifyContent: "center",
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
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              Products you might like
            </Typography>
            <List
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                justifyContent: "center",
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
    </Box>
  );
};

export default SingleTireContanier;

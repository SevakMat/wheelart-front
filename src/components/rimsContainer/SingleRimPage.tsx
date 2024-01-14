import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import { AppDispatch, RootState, useAppSelector } from "../../store";
import { getWheelEffect } from "../../store/effects/wheel/wheel.effect";

import {
  Box,
  Button,
  List,
  ListItem,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

import TiresContent from "../shere/tires/TiresContent";
import QuantityInput from "../shere/quantityInput/QuantityInput";
import RimCard from "../shere/rims/RimCard";
import Slideshow from "../shere/slideshow/Slideshow";
const SingleRim = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const makeValue = queryParams.get("make");
  const modelValue = queryParams.get("model");
  const yearValue = queryParams.get("year");
  const modificationValue = queryParams.get("modification");

  const { wheel } = useAppSelector((state: RootState) => state.wheel);
  const { tireList } = useAppSelector((state: RootState) => state.tire);

  useEffect(() => {
    dispatch(
      getWheelEffect(id, makeValue, modelValue, yearValue, modificationValue)
    );
  }, []);

  const [value, setValue] = useState<number | null>(0);

  const suggestions = [
    {
      image:
        "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
      info: {
        name: "DY1417-01",
        size: '17"',
        width: 255,
        color: "Grey",
      },
      price: `€${850.0}`,
    },
    {
      image:
        "https://wheelart.fr/cdn/shop/products/DY989-01_02.jpg?v=1680618516&width=990",
      info: {
        name: "DY1417-01",
        size: '17"',
        width: 255,
        color: "Grey",
      },
      price: `€${850.0}`,
    },
    {
      image:
        "https://wheelart.fr/cdn/shop/products/DY768-01BG.jpg?v=1689760271&width=990",
      info: {
        name: "DY1417-01",
        size: '17"',
        width: 255,
        color: "Grey",
      },
      price: `€${850.0}`,
    },
    {
      image:
        "https://wheelart.fr/cdn/shop/products/DY989-01_02_8c93b44c-8593-4daf-8f01-e4b1d2d60e82.jpg?v=1680616563&width=990",
      info: {
        name: "DY1417-01",
        size: '17"',
        width: 255,
        color: "Grey",
      },
      price: `€${850.0}`,
    },
    {
      image:
        "https://wheelart.fr/cdn/shop/products/ARC19141-5354.jpg?v=1702657110&width=990",
      info: {
        name: "DY1417-01",
        size: '17"',
        width: 255,
        color: "Black",
      },
      price: `€${850.0}`,
    },
  ];

  const images = [
    "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
    "https://wheelart.fr/cdn/shop/products/ARC19141-5354.jpg?v=1702657110&width=990",
    "https://wheelart.fr/cdn/shop/products/DY768-01BG.jpg?v=1689760271&width=990",
  ];

  return (
    <Box sx={{ margin: "30px 20px" }}>
      <Box>
        <Stack direction="row" spacing={5}>
          <Slideshow images={images} />
          <Stack direction="column" spacing={2} sx={{ paddingTop: 5 }}>
            <Typography variant="h4">
              Set of 4 18″ DY768-01 Aluminum Rims
            </Typography>
            <Box>
              <Typography sx={{ fontSize: 12, color: "#C0C0C0" }}>
                Rate product
              </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <Typography variant="h5" component="p">
              €850
            </Typography>
            <Typography sx={{ maxWidth: 500 }}>
              Before each purchase, we advise you to check the parameters of
              your vehicle very carefully . For any other questions or
              information, do not hesitate to contact us by telephone, via the “
              contact ” section of the website or on our social networks. Our
              blog remains available for more details.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, paddingTop: 3 }}>
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
          </Stack>
        </Stack>

        <Stack direction="column" spacing={5}>
          <Box sx={{ width: "50%", paddingTop: 5 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: 30, fontWeight: "bold" }}>
                    Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableRow>
                <TableCell variant="head">Model</TableCell>
                <TableCell>DY768-01</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Size</TableCell>
                <TableCell>18"</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Center distance</TableCell>
                <TableCell>5x120</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Width</TableCell>
                <TableCell> 8.0J</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Bore</TableCell>
                <TableCell>65.1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">ET offset</TableCell>
                <TableCell>50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Color</TableCell>
                <TableCell>Glossy Black Polished Face</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">EAN</TableCell>
                <TableCell>9830727110529</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">GRAM(4)</TableCell>
                <TableCell>50000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">The pack includes</TableCell>
                <TableCell>
                  4x RIMS DY768-01 4 X LOGOS 4 X VALVES TR413
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">TPMs compatible</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">State</TableCell>
                <TableCell>Nine</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Look Style (Not OEM)</TableCell>
                <TableCell>Palmerstone</TableCell>
              </TableRow>
            </Table>
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
              {suggestions.map((rim) => {
                return (
                  <li>
                    <RimCard
                      isPopular={false}
                      image={rim.image}
                      info={rim.info}
                      price={rim.price}
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

export default SingleRim;

import { useState } from "react";
import { Box, Button, Link } from "@mui/material";
import ProductCard from "./ProductCard";

const Products = () => {
  const [wheelList, setWheelList] = useState([
    {
      image:
        "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
      info: 'Set of 4 18" WheelArt special',
      price: `${850.0} EUR`,
    },
    {
      image:
        "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
      info: 'Set of 4 18" WheelArt special',
      price: `${850.0} EUR`,
    },
    {
      image:
        "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
      info: 'Set of 4 18" WheelArt special',
      price: `${850.0} EUR`,
    },
    {
      image:
        "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
      info: 'Set of 4 18" WheelArt special',
      price: `${850.0} EUR`,
    },
    {
      image:
        "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
      info: 'Set of 4 18" WheelArt special',
      price: `${850.0} EUR`,
    },
    {
      image:
        "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
      info: 'Set of 4 18" WheelArt special',
      price: `${850.0} EUR`,
    },
    {
      image:
        "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
      info: 'Set of 4 18" WheelArt special',
      price: `${850.0} EUR`,
    },
    {
      image:
        "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
      info: 'Set of 4 18" WheelArt special',
      price: `${850.0} EUR`,
    },
  ]);

  return (
    <>
      <h2>Retrouvez nos produits les plus populaires ci-dessous:</h2>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          rowGap: 3,
        }}
      >
        {wheelList.map((wheel) => {
          return (
            <ProductCard
              image={wheel.image}
              info={wheel.info}
              price={wheel.price}
            />
          );
        })}
      </Box>
      <Box
        sx={{
          margin: "50px",
          textAlign: "center",
        }}
      >
        <Button
          size="large"
          variant="contained"
          sx={{
            backgroundColor: "black",
            "&:hover": { background: "grey" },
            borderRadius: 1,
            textTransform: "none",
          }}
        >
          Tout afficher
        </Button>
      </Box>
    </>
  );
};

export default Products;

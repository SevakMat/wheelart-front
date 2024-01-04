import { useState } from "react";
import { Box, Button, List, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

const Products = () => {
  const [wheelList, setWheelList] = useState([
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
        color: "Grey",
      },
      price: `€${850.0}`,
    },
    {
      image:
        "https://wheelart.fr/cdn/shop/files/XFE6919_c0937298-746c-413a-8ad6-eb7add7de43f.jpg?v=1697017120&width=990",
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
        "https://wheelart.fr/cdn/shop/products/Rubin_59407_08_52fd6a7a-e5fb-43f1-97b4-2eaabf74e7fa.jpg?v=1680618592&width=990",
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
        "https://wheelart.fr/cdn/shop/products/DY1417-01.jpg?v=1692454085&width=990",
      info: {
        name: "DY1417-01",
        size: '17"',
        width: 255,
        color: "Grey",
      },
      price: `€${850.0}`,
    },
  ]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // paddingTop: "5%",
        left: 0,
        right: 0,
        // background: "#848884",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        {/* Black transparent layer */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 1)",
          }}
        />

        <Box
          sx={{
            backgroundImage:
              "url(https://img.freepik.com/premium-photo/black-tire-with-red-light-background_7023-3335.jpg?w=900)",
            opacity: "0.8",
            height: "100%",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            textAlign: "center",
            width: "100%",
            padding: "100px 0",
            position: "relative",
          }}
        >
          <Typography
            variant="h3"
            textTransform="uppercase"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            Produits populaires
          </Typography>
        </Box>
      </Box>

      <Box sx={{ margin: "0 100px", paddingTop: 4 }}>
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            rowGap: 3,

            "@media (max-width: 1090px)": {
              alignItems: "flex-start",
              display: "flex",
              flexWrap: "nowrap",
              listStyle: "none",
              margin: "1rem 0",
              overflowX: "scroll",
              padding: "0 0 0 1rem",
              gap: 3,
            },
          }}
        >
          {wheelList.map((wheel) => {
            return (
              <li>
                <ProductCard
                  image={wheel.image}
                  info={wheel.info}
                  price={wheel.price}
                />
              </li>
            );
          })}
        </List>
      </Box>
      <Box
        sx={{
          margin: "50px",
        }}
      >
        <Button
          size="large"
          variant="contained"
          sx={{
            backgroundColor: "#00A70D",
            "&:hover": { background: "#00DE11", boxShadow: "none" },
            borderRadius: 2,
            textTransform: "none",
            boxShadow: "none",
            padding: "10px 50px",
          }}
        >
          Tout afficher
        </Button>
      </Box>
    </Box>
  );
};

export default Products;

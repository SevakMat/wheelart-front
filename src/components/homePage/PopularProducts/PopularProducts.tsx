import { useState } from "react";
import { Box, Button, List, Typography } from "@mui/material";
import RimCard from "../../shere/rims/RimCard";
import { useTranslation } from "react-i18next";
import Link from "@mui/material/Link";

const PopularProducts = () => {
  const [rimList, setRimList] = useState([
    {
      imageUrl:
        "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
      rimModel: "DY1417-01",
      sizeR: '17"',
      width: 255,
      color: "Grey",
      price: 850,
      id: "1",
    },
    {
      imageUrl:
        "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
      rimModel: "DY1417-01",
      sizeR: '17"',
      width: 255,
      color: "Grey",
      price: 850,
      id: "2",
    },
    {
      imageUrl:
        "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
      rimModel: "DY1417-01",
      sizeR: '17"',
      width: 255,
      color: "Grey",
      price: 850,
      id: "1",
    },
    {
      imageUrl:
        "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
      rimModel: "DY1417-01",
      sizeR: '17"',
      width: 255,
      color: "Grey",
      price: 850,
      id: "2",
    },
    {
      imageUrl:
        "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
      rimModel: "DY1417-01",
      sizeR: '17"',
      width: 255,
      color: "Grey",
      price: 850,
      id: "1",
    },
    {
      imageUrl:
        "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
      rimModel: "DY1417-01",
      sizeR: '17"',
      width: 255,
      color: "Grey",
      price: 850,
      id: "2",
    },
    {
      imageUrl:
        "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
      rimModel: "DY1417-01",
      sizeR: '17"',
      width: 255,
      color: "Grey",
      price: 850,
      id: "1",
    },
    {
      imageUrl:
        "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
      rimModel: "DY1417-01",
      sizeR: '17"',
      width: 255,
      color: "Grey",
      price: 850,
      id: "2",
    },
  ]);
  const [t] = useTranslation("home");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        left: 0,
        right: 0,
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
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
            {t("content.popularProducts")}
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
            maxWidth: 1100,
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
          {rimList.map((rim) => {
            return (
              <li>
                <RimCard
                  isPopular={true}
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
      <Box
        sx={{
          margin: "50px",
        }}
      >
        <Button
          size="large"
          variant="contained"
          href="/rims"
          sx={{
            backgroundColor: "#00A70D",
            "&:hover": { background: "#00DE11", boxShadow: "none" },
            borderRadius: 2,
            textTransform: "none",
            boxShadow: "none",
            padding: "10px 50px",
          }}
        >
          {t("buttons.showAll")}
        </Button>
      </Box>
    </Box>
  );
};

export default PopularProducts;

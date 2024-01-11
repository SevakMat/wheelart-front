import { Box, List } from "@mui/material";

import RimCard from "../shere/rims/RimCard";
import { useState } from "react";

const RimsList = () => {
  const [rimList, setRimList] = useState([
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
    {
      image:
        "https://wheelart.fr/cdn/shop/products/DY1417-01.jpg?v=1692454085&width=990",
      info: {
        name: "DY1417-01",
        size: '17"',
        width: 255,
        color: "Orange",
      },
      price: `€${1850.0}`,
    },
    {
      image:
        "https://wheelart.fr/cdn/shop/products/DY1417-01.jpg?v=1692454085&width=990",
      info: {
        name: "DY1417-01",
        size: '17"',
        width: 255,
        color: "Black",
      },
      price: `€${850.0}`,
    },
  ]);

  return (
    <Box>
      <Box sx={{ margin: "30px 10px" }}>
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {rimList.map((rim) => {
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
    </Box>
  );
};

export default RimsList;

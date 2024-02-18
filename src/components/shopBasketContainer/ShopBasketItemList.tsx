import { Box, List } from "@mui/material";
import { RootState, useAppSelector } from "../../store";
import ShopBasketCard from "./ShopBasketCard";

const ShopBasketItemList = () => {
  const itemList: any = [
    {
      imageUrl: "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
      price: 120,
      rimWidth: 100,
      color: "Grey",
      name: "DY768-01",
      size: "1",
      rimId: 1
    },
    {
      imageUrl: "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
      price: 120,
      rimWidth: 100,
      color: "Grey",
      name: "DY768-01",
      size: "1",
      rimId: 1
    }
  ];

  const { rimShopList, tireShopList } = useAppSelector((state: RootState) => state.shopBusket)

  const shopItems = [...rimShopList, ...tireShopList]
  console.log(1111, rimShopList);
  console.log(2222, tireShopList);


  return (
    <Box>
      <Box sx={{ margin: "30px 10px" }}>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {shopItems.map((item: any, index: number) => {
            return <li key={index}>
              <ShopBasketCard
                image={item.imageUrl}
                price={200}
                itemWidth={300}
                color={item.color}
                name={"name"}
                size={"250"}
                itemId={item.id}
              />
            </li>;
          })}
        </List>
      </Box>
    </Box>
  );
};

export default ShopBasketItemList;

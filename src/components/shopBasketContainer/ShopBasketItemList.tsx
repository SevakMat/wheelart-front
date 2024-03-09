import { Box, List } from "@mui/material";
import { RootState, useAppSelector } from "../../store";
import ShopBasketCard from "./ShopBasketCard";

const ShopBasketItemList = () => {

  const { rimShopList, tireShopList } = useAppSelector((state: RootState) => state.shopBusket)

  const shopItems = [...rimShopList, ...tireShopList]
  console.log(1111, shopItems);


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
                count={item.count}
                type={item.type}
              />
            </li>;
          })}
        </List>
      </Box>
    </Box>
  );
};

export default ShopBasketItemList;

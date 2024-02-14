import { Box, List } from "@mui/material";
import ShopBasketCard from "./ShopBasketCard";

const ShopBasketItemList = () => {
  const itemList: any = [
    <ShopBasketCard
      image={"rim.imageUrl"}
      price={12}
      rimWidth={100}
      color="Grey"
      name={"DY768-01"}
      size={"1"}
      rimId={"1"}
    />,
  ];

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
          {itemList.map((item: any) => {
            return <li>{item}</li>;
          })}
        </List>
      </Box>
    </Box>
  );
};

export default ShopBasketItemList;

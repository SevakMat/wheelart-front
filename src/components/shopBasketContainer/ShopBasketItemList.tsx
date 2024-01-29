import { Box, List } from "@mui/material";

const ShopBasketItemList = () => {
  const itemList: any = [];

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

import { Box, Typography } from "@mui/material";
import PaginationBlock from "../shere/pagination/PaginationBlock";
import ShopBasketItemList from "./ShopBasketItemList";

const ShopBasketContainer = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/empty-shopping-basket-pink-background-3d-rendering-illustration_379823-2367.jpg?w=1060)",

          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          textAlign: "center",
          width: "100%",
          padding: "80px 0",
        }}
      >
        <Typography
          variant="h3"
          textTransform="uppercase"
          sx={{
            color: "white",
            fontWeight: "bold",
            textAlign: "left",
            paddingLeft: 15,
            letterSpacing: 30,
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          My Basket
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ShopBasketItemList />
        <Box sx={{ paddingLeft: 40, marginBottom: 5 }}>
          <PaginationBlock />
        </Box>
      </Box>
    </Box>
  );
};

export default ShopBasketContainer;

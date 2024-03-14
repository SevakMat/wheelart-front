import { Box, Button, Typography } from "@mui/material";
import PaginationBlock from "../shere/pagination/PaginationBlock";
import ShopBasketItemList from "./ShopBasketItemList";
import { AppDispatch, RootState, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { createOrderEffect } from "../../store/effects/orders/order.effect";

const ShopBasketContainer = () => {
  const dispatch: AppDispatch = useDispatch();
  const { rimShopList,tireShopList } = useAppSelector((state: RootState) => state.shopBusket);
  const { user } = useAppSelector((state: RootState) => state.auth);

  const CreateOrder = () => {
    dispatch(
      createOrderEffect([...rimShopList,...tireShopList],user?.id)
    );
  }
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/3d-rendering-shopping-cart-abstract-geometric-composition_172660-465.jpg?w=1060)",

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
          Mon Panier
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
          <PaginationBlock count={30} list={null} />

          <Button
            onClick={CreateOrder}
          >
            Create order
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ShopBasketContainer;

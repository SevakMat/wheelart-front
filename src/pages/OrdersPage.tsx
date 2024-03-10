import { useState } from "react";
import OrdersContainer from "../components/orders/OrdersContainer";
import MainContainer from "../hok/mainContainer/MainContainer";
import Popup from "../shared/popups/Popup";

const OrdersPage = (): JSX.Element => {



  return (
    <MainContainer>
        <OrdersContainer />
    </MainContainer>
  );
};
export default OrdersPage;

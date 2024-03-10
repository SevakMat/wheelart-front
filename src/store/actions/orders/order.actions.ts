import { GetOrderListSuccess, OrderServerTypes, OrderType } from "../../types/order/order";

export const getOrderListSuccess = (orderList: OrderType[]): GetOrderListSuccess => ({
    type: OrderServerTypes.GET_ORDER_LIST_SUCCESS,
    orderList,
  });
  
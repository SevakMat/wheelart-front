import { AppDispatch } from "../..";
import { CreateOrderServide, GetOrderListServide } from "../../../services/order.service";
import { getOrderListSuccess } from "../../actions/orders/order.actions";

export const createOrderEffect = (order: any, id?: string ): any => {
  return async (dispatch: AppDispatch) => {
    try {
      console.log(order);

      const filteredOrders = order.length ? order.map((item: any) => {
        return {
          itemId: item.id,
          type: item.type,
          count: item.count,
          status: 'CREATED'
        }
      }) : []
      console.log(4444,id);
      
      const result = await CreateOrderServide(filteredOrders, id);
      // const {
      //   data: { data: { rims, tires, rimsCount, wheelDetails } }
      // } = result;

    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };
};

export const orderOrderListEffect = (id: any): any => {
  return async (dispatch: AppDispatch) => {
    try {

      const result = await GetOrderListServide(id);

      const {
        data: { data: { orderList } }
      } = result;

      dispatch(getOrderListSuccess(orderList))

    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };
};
import { AppDispatch } from "../..";
import { CreateOrderServide } from "../../../services/order.service";

export const createOrderEffect = (order: any): any => {
  return async (dispatch: AppDispatch) => {
    try {

      const filteredOrders = order.length ? order.map((item: any) => {
        return {
          itemId: item.id,
          type: item.type,
          count: item.count,
          status:'CREATED'
        }
      }) : []

      const result = await CreateOrderServide(filteredOrders);
      // const {
      //   data: { data: { rims, tires, rimsCount, wheelDetails } }
      // } = result;



    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };
};
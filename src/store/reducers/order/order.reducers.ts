import { Reducer } from "redux";
import { OrderActionTypes, OrderServerTypes, OrderState } from "../../types/order/order";

const initialState: OrderState = {
  OrderList: [],
}

type ReducerType = Reducer<OrderState, OrderActionTypes>

const reducer: ReducerType = (state = initialState, action: OrderActionTypes) => {
  switch (action.type) {
    case OrderServerTypes.GET_ORDER_LIST_SUCCESS:
      return {
        ...state,
        OrderList: action.orderList,
      };
    default:
      return state;
  }
};

export default reducer;
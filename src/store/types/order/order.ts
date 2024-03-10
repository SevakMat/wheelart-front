export enum OrderServerTypes {
    GET_ORDER_LIST_SUCCESS = "GET_ORDER_LIST_SUCCESS",
  }
  
  export interface OrderType {
    id:string,
    itemCount:number,
    itemId:number,
    orderType:string,
    status:string,
    price:number
  }
  
  export interface OrderState {
    OrderList: OrderType[];
  }
  
  export interface GetOrderListSuccess {
    type: OrderServerTypes.GET_ORDER_LIST_SUCCESS;
    orderList: OrderType[];
  }
  
  export type OrderActionTypes =
    | GetOrderListSuccess
  
import axios from "../config/axios"

export const CreateOrderServide = async (orderData: any, id?: string): Promise<any> => {
  console.log(222222,orderData, id);
  
  return axios.post("api/orders/create", { orderData, id })
}

export const GetOrderListServide = async (id: any): Promise<any> => {
  return axios.get(`api/orders/orders/${id}`)
}

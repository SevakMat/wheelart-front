import axios from "../config/axios"

export const CreateOrderServide = async (orderData:any): Promise<any> => {
  return axios.post("api/orders/create", { orderData })
}

export const GetOrderListServide = async (id:any): Promise<any> => {
  return axios.get(`api/orders/orders/${id}`)
}

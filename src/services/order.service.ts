import axios from "../config/axios"

export const CreateOrderServide = async (orderData:any): Promise<any> => {
  return axios.post("api/orders/create", { orderData })
}

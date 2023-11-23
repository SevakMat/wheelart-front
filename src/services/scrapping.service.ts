import axios from "../config/axios"

export const SendCarData = async (searchForm: any, userId: string): Promise<any> => {
  return axios.post("api/v1/scrapping/add-car", { "filterInfo": searchForm, "userId": userId })
}
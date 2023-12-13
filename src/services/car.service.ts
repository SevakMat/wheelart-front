import axios from "../config/axios"

export const GetCarData = async (): Promise<any> => {
  return axios.get("api/rims/all-cars")
}
export const GetModelByCarData = async (car: string): Promise<any> => {
  return axios.get("api/rims/all-models")
}


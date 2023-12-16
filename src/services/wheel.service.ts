
import axios from "../config/axios"

export const getWheelsListByCarDateService = async (make: string, model: string, year: string, modification: string): Promise<any> => {
  const url = `api/rims/by-car`

  return axios.post(url, { where: { make, model, year, modification } })
}
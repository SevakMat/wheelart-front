
import axios from "../config/axios"

export const getRimsListByCarDateService = async (make?: string | null, model?: string | null, year?: string | null, modification?: string | null): Promise<any> => {
  const url = `api/rims/by-car`
  console.log(make, model, year, modification);

  return axios.post(url, { where: { make, model, year, modification } })
}

export const getSingleRimService = async (id?: string, make?: string | null, model?: string | null, year?: string | null, modification?: string | null): Promise<any> => {
  const url = `api/rims/rim/${id}`
  // es make, model, year, modification drel em vor akeri masin info stananq
  return axios.post(url, { make, model, year, modification })
}

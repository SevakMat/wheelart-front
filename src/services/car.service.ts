import axios from "../config/axios"

export const GetCarData = async (): Promise<any> => {
  return axios.get("api/rims/all-cars")
}
export const GetModelByCarData = async (make: string): Promise<any> => {
  return axios.get(`api/rims/all-models?make=${make}`)
}

export const GetYearByCarData = async (make: string, model: string): Promise<any> => {
  const url = `api/rims/all-years?make=${make}&model=${model}`

  return axios.get(url)
}


export const GetModificationsByCarData = async (make: string, model: string, year: string): Promise<any> => {
  const url = `api/rims/all-modifications?make=${make}&model=${model}&year=${year}`

  return axios.get(url)
}
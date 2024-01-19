import axios from "../config/axios"

export const GetCarData = async (): Promise<any> => {
  return axios.get("api/rims/makes")
}
export const GetModelByCarData = async (make: string): Promise<any> => {
  return axios.get(`api/rims/models?make=${make}`)
}

export const GetYearByCarData = async (make: string, model: string): Promise<any> => {
  const url = `api/rims/years?make=${make}&model=${model}`
  return axios.get(url)
}

export const GetModificationsByCarData = async (make: string, model: string, year: string): Promise<any> => {
  const url = `api/rims/modifications?make=${make}&model=${model}&year=${year}`

  return axios.get(url)
}



export const getCarDetailsService = async (make?: string | null, model?: string | null, year?: string | null, modification?: string | null): Promise<any> => {
  const url = `api/rims/car-details`
  console.log(make, model, year, modification);

  return axios.post(url, { where: { make, model, year, modification } })
}

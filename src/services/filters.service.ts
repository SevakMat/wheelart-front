import axios from "../config/axios"

export const GetAllFilters = async (selectedFilters: any): Promise<any> => {
  const url = `api/filters/all-filters`
  return axios.post(url, selectedFilters)
}
import axios from "../config/axios"

export const GetAllRimFilters = async (selectedFilters: any): Promise<any> => {
  const url = `api/filters/all-rim-filters`
  return axios.post(url, selectedFilters)
}

export const GetAllTireFilters = async (selectedFilters: any): Promise<any> => {
  const url = `api/filters/all-tire-filters`
  return axios.post(url, selectedFilters)
}
import axios from "../config/axios";

export const getRimsListByCarDateService = async (make?: string | null, model?: string | null, generationValue?: string | null, modification?: string | null, pagination?: number): Promise<any> => {
  const url = `api/rims/by-car`
  return axios.post(url, { where: { make, model, generationValue, modification, pagination } })
}
export const getSingleRimService = async (
  id?: string,
  make?: string | null,
  model?: string | null,
  generationValue?: string | null,
  modification?: string | null
): Promise<any> => {
  const url = `api/rims/rim/${id}`;
  // es make, model, year, modification drel em vor akeri masin info stananq
  return axios.post(url, { make, model, generationValue, modification });
};

export const getPopularRimsService = async (): Promise<any> => {
  const url = `api/rims/rim/popular-rims`
  return axios.get(url)
};

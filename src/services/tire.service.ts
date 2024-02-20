import axios from "../config/axios";

export const getSingleTireService = async (
  id?: string,
): Promise<any> => {
  const url = `api/tires/tire/${id}`;
  return axios.get(url);
};

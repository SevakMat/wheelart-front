import { GetTireListSuccess, TireServerTypes, TireType } from "../../types/tire/tire";

export const getTiresListByCarDateAction = (tireList: TireType[]): GetTireListSuccess => ({
  type: TireServerTypes.GET_TIRE_LIST_SUCCESS,
  tireList
})
import { GetWheelListSuccess, WheelServerTypes, WheelType } from "../../types/wheel/wheel";

export const getWheelsListByCarDateAction = (wheelList: WheelType[]): GetWheelListSuccess => ({
  type: WheelServerTypes.GET_WHEEL_LIST_SUCCESS,
  wheelList
})
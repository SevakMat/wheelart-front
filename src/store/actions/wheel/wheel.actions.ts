import { GetWheelListSuccess, GetWheelSuccess, WheelServerTypes, WheelType } from "../../types/wheel/wheel";

export const getWheelsListByCarDateAction = (wheelList: WheelType[]): GetWheelListSuccess => ({
  type: WheelServerTypes.GET_WHEEL_LIST_SUCCESS,
  wheelList
})

export const getWheelAction = (wheel: WheelType): GetWheelSuccess => ({
  type: WheelServerTypes.GET_WHEEL_SUCCESS,
  wheel
})
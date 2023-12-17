export enum WheelServerTypes {
  GET_WHEEL_LIST_SUCCESS = "GET_WHEEL_LIST_SUCCESS",
}

export interface WheelType {
  price: string,
  sizeR: string,
  rimModel: string,
  imageUrl: string,
}

export interface WheelState {
  WheelList: WheelType[];
}


export interface GetWheelListSuccess {
  type: WheelServerTypes.GET_WHEEL_LIST_SUCCESS;
  wheelList: WheelType[];
}


export type WheelActionTypes = GetWheelListSuccess;

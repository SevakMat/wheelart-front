export enum WheelServerTypes {
  GET_WHEEL_LIST_SUCCESS = "GET_WHEEL_LIST_SUCCESS",
  GET_WHEEL_SUCCESS = "GET_WHEEL_SUCCESS",
  GET_RIMS_COUNT_SUCCESS = "GET_RIMS_COUNT_SUCCESS",
}

export interface WheelType {
  id: string,
  price: string,
  sizeR: string,
  rimModel: string,
  imageUrl: string,
  centerBore: string,
  pcd: string,
  studHoles: string
}

export interface WheelState {
  wheelList: WheelType[];
  wheel: WheelType | null;
  rimsCount: number
}


export interface GetWheelListSuccess {
  type: WheelServerTypes.GET_WHEEL_LIST_SUCCESS;
  wheelList: WheelType[];
}

export interface GetWheelSuccess {
  type: WheelServerTypes.GET_WHEEL_SUCCESS;
  wheel: WheelType;
}

export interface GetRimsCountSuccess {
  type: WheelServerTypes.GET_RIMS_COUNT_SUCCESS;
  rimsCount: number;
}


export type WheelActionTypes = GetWheelListSuccess | GetWheelSuccess | GetRimsCountSuccess;

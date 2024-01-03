export enum WheelServerTypes {
  GET_WHEEL_LIST_SUCCESS = "GET_WHEEL_LIST_SUCCESS",
  GET_WHEEL_SUCCESS = "GET_WHEEL_SUCCESS",

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

}


export interface GetWheelListSuccess {
  type: WheelServerTypes.GET_WHEEL_LIST_SUCCESS;
  wheelList: WheelType[];
}

export interface GetWheelSuccess {
  type: WheelServerTypes.GET_WHEEL_SUCCESS;
  wheel: WheelType;
}



export type WheelActionTypes = GetWheelListSuccess | GetWheelSuccess;

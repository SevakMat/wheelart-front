export enum TireServerTypes {
  GET_TIRE_LIST_SUCCESS = "GET_TIRE_LIST_SUCCESS",
}

export interface TireType {
  id: string,
  tireWidth: number,
  tireAspectRatio: number,
  rimDiameter: number,
  marka: string,
  stock: number,
  imageUrl: string
}

export interface TireState {
  tireList: TireType[];
}


export interface GetTireListSuccess {
  type: TireServerTypes.GET_TIRE_LIST_SUCCESS;
  tireList: TireType[];
}


export type TireActionTypes = GetTireListSuccess;

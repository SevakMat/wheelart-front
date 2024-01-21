export enum TireServerTypes {
  GET_TIRE_LIST_SUCCESS = "GET_TIRE_LIST_SUCCESS",
  GET_REQOMMENDED_TIRES_SUCCESS = "GET_REQOMMENDED_TIRES_SUCCESS",

}

export interface TireType {
  id: number,
  tireWidth: number,
  tireAspectRatio: number,
  rimDiameter: number,
  marka: string,
  stock: number,
  imageUrl: string
}

export interface TireState {
  tireList: TireType[];
  recommendedTires: TireType[]
}


export interface GetTireListSuccess {
  type: TireServerTypes.GET_TIRE_LIST_SUCCESS;
  tireList: TireType[];
}
export interface GetRecommededTiresSuccess {
  type: TireServerTypes.GET_REQOMMENDED_TIRES_SUCCESS;
  recommendedTires: TireType[];
}

export type TireActionTypes = GetTireListSuccess | GetRecommededTiresSuccess;

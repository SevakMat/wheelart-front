export enum RimServerTypes {
  GET_RIM_LIST_SUCCESS = "GET_RIM_LIST_SUCCESS",
  GET_RIM_SUCCESS = "GET_RIM_SUCCESS",
  GET_RIMS_COUNT_SUCCESS = "GET_RIMS_COUNT_SUCCESS",
  GET_POPULAR_RIMS_SUCCESS = "GET_POPULAR_RIMS_SUCCESS",
}

export interface RimType {
  id: string;
  price: string;
  sizeR: string;
  rimModel: string;
  imageUrl: string;
  centerBore: string;
  pcd: string;
  studHoles: string;
  width: number;
  color: string;
  gram: number;
}

export interface RimState {
  rimList: RimType[];
  rim: RimType | null;
  rimsCount: number;
  popularRims: RimType[];
}

export interface GetRimListSuccess {
  type: RimServerTypes.GET_RIM_LIST_SUCCESS;
  rimList: RimType[];
}

export interface GetRimSuccess {
  type: RimServerTypes.GET_RIM_SUCCESS;
  rim: RimType;
}

export interface GetRimsCountSuccess {
  type: RimServerTypes.GET_RIMS_COUNT_SUCCESS;
  rimsCount: number;
}

export interface GetPopularRimsSuccess {
  type: RimServerTypes.GET_POPULAR_RIMS_SUCCESS;
  popularRims: RimType[];
}

export type RimActionTypes =
  | GetRimListSuccess
  | GetRimSuccess
  | GetRimsCountSuccess
  | GetPopularRimsSuccess;
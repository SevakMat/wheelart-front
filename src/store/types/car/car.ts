export enum CarTypes {
  GET_CAR_LIST_SUCCESS = "GET_CAR_LIST_SUCCESS",
  GET_MODEL_LIST_SUCCESS = "GET_MODEL_LIST_SUCCESS",

}

export interface CarType {
  name: string,
  imageUrl: string
}

export interface ModelType {
  name: string,
  imageUrl: string
}


export interface CarState {
  selectedCarType: string
  CarTypeList: CarType[];

  selectedModelType: string
  ModelList: CarType[];

  selectedYearType: string
  YearList: CarType[];

  selectedModificationType: string
  ModificationList: CarType[];
}

export interface GetCarListSuccess {
  type: CarTypes.GET_CAR_LIST_SUCCESS;
  carList: CarType[];
}

export interface GetModelListSuccess {
  type: CarTypes.GET_MODEL_LIST_SUCCESS;
  modelList: ModelType[];
}

export type CarActionTypes = GetCarListSuccess | GetModelListSuccess;

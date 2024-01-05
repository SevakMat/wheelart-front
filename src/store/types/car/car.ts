export enum CarTypes {
  GET_CAR_LIST_SUCCESS = "GET_CAR_LIST_SUCCESS",
  GET_MODEL_LIST_SUCCESS = "GET_MODEL_LIST_SUCCESS",
  GET_YEAR_LIST_SUCCESS = "GET_YEAR_LIST_SUCCESS",
  GET_MODIFICATIONS_LIST_SUCCESS = "GET_MODIFICATIONS_LIST_SUCCESS",
}

export interface CarType {
  name: string,
  imageUrl: string
}

export interface ModelType {
  name: string,
  imageUrl: string
}
export interface YearType {
  name: string,
  imageUrl: string
}

export interface ModificationsType {
  name: string,
  imageUrl: string
}

export interface CarState {
  selectedCarType: string
  CarTypeList: CarType[];

  selectedModelType: string
  ModelList: ModelType[];

  selectedYearType: string
  YearList: YearType[];

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
  carType: string
}

export interface GetYearListSuccess {
  type: CarTypes.GET_YEAR_LIST_SUCCESS;
  yearList: YearType[];
  modelType: string
}
export interface GetModificationListSuccess {
  type: CarTypes.GET_MODIFICATIONS_LIST_SUCCESS;
  modificationList: ModificationsType[];
  year: string
}



export type CarActionTypes = GetCarListSuccess | GetModelListSuccess | GetYearListSuccess | GetModificationListSuccess;

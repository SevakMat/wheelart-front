export enum CarTypes {
  GET_CAR_LIST_SUCCESS = "GET_CAR_LIST_SUCCESS",
  GET_MODEL_LIST_SUCCESS = "GET_MODEL_LIST_SUCCESS",
  GET_YEAR_LIST_SUCCESS = "GET_YEAR_LIST_SUCCESS",
  GET_MODIFICATIONS_LIST_SUCCESS = "GET_MODIFICATIONS_LIST_SUCCESS",
  GET_TEST_LIST_SUCCESS = "GET_TEST_LIST_SUCCESS",
}

export interface CarDetailsType {
  name: string,
  logo: string,
  slug: string
}

export interface CarState {
  selectedCarType: string
  CarTypeList: CarDetailsType[];

  selectedModelType: string
  ModelList: CarDetailsType[];

  selectedGenerationType: string
  GenerationList: CarDetailsType[];

  selectedModificationType: string
  ModificationList: CarDetailsType[];
}

export interface GetCarListSuccess {
  type: CarTypes.GET_CAR_LIST_SUCCESS;
  carList: CarDetailsType[];
}

export interface GetModelListSuccess {
  type: CarTypes.GET_MODEL_LIST_SUCCESS;
  modelList: CarDetailsType[];
  carType: string
}

export interface GetYearListSuccess {
  type: CarTypes.GET_YEAR_LIST_SUCCESS;
  yearList: CarDetailsType[];
  modelType: string
}
export interface GetModificationListSuccess {
  type: CarTypes.GET_MODIFICATIONS_LIST_SUCCESS;
  modificationList: CarDetailsType[];
  year: string
}

export interface GetTestListSuccess {
  type: CarTypes.GET_TEST_LIST_SUCCESS;
  ModelList?: CarDetailsType[];
  GenerationList?: CarDetailsType[];
  ModificationList?: CarDetailsType[];
}


export type CarActionTypes = GetCarListSuccess | GetModelListSuccess | GetYearListSuccess | GetModificationListSuccess | GetTestListSuccess;

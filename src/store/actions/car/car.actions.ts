import {
  CarTypes,
  CarType,
  GetCarListSuccess,
  ModelType,
  GetModelListSuccess,
  YearType,
  GetYearListSuccess,
  ModificationsType,
  GetModificationListSuccess,
  GetTestListSuccess,
} from "../../types/car/car";

export const getCarListSuccess = (carList: CarType[]): GetCarListSuccess => ({
  type: CarTypes.GET_CAR_LIST_SUCCESS,
  carList,
});

export const getModelListSuccess = (
  modelList: ModelType[],
  make: string
): GetModelListSuccess => ({
  type: CarTypes.GET_MODEL_LIST_SUCCESS,
  modelList,
  carType: make,
});

export const getYearListSuccess = (
  yearList: YearType[],
  model: string
): GetYearListSuccess => ({
  type: CarTypes.GET_YEAR_LIST_SUCCESS,
  yearList,
  modelType: model,
});

export const getModificationsListSuccess = (
  modificationList: ModificationsType[],
  year: string
): GetModificationListSuccess => ({
  type: CarTypes.GET_MODIFICATIONS_LIST_SUCCESS,
  modificationList,
  year,
});

export const getTestListSuccess = (
  ModelList?: ModelType[],
  YearList?: YearType[],
  ModificationList?: ModificationsType[]
): GetTestListSuccess => ({
  type: CarTypes.GET_TEST_LIST_SUCCESS,
  ModelList,
  YearList,
  ModificationList,
});

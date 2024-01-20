import { CarTypes, CarDetailsType, GetCarListSuccess, GetModelListSuccess, GetYearListSuccess, GetModificationListSuccess, GetTestListSuccess } from "../../types/car/car";

export const getCarListSuccess = (carList: CarDetailsType[]): GetCarListSuccess => ({
  type: CarTypes.GET_CAR_LIST_SUCCESS,
  carList,
});

export const getModelListSuccess = (modelList: CarDetailsType[], make: string): GetModelListSuccess => ({
  type: CarTypes.GET_MODEL_LIST_SUCCESS,
  modelList,
  carType: make,
});

export const getYearListSuccess = (yearList: CarDetailsType[], model: string): GetYearListSuccess => ({
  type: CarTypes.GET_YEAR_LIST_SUCCESS,
  yearList,
  modelType: model,
});

export const getModificationsListSuccess = (modificationList: CarDetailsType[], year: string): GetModificationListSuccess => ({
  type: CarTypes.GET_MODIFICATIONS_LIST_SUCCESS,
  modificationList,
  year,
});


export const getTestListSuccess = (ModelList?: CarDetailsType[], YearList?: CarDetailsType[], ModificationList?: CarDetailsType[]): GetTestListSuccess => ({
  type: CarTypes.GET_TEST_LIST_SUCCESS,
  ModelList,
  YearList,
  ModificationList,
});

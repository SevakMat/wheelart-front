import { CarTypes, CarType, GetCarListSuccess, ModelType, GetModelListSuccess, YearType, GetYearListSuccess, ModificationsType, GetModificationListSuccess } from "../../types/car/car";

export const getCarListSuccess = (carList: CarType[]): GetCarListSuccess => ({
  type: CarTypes.GET_CAR_LIST_SUCCESS,
  carList
})

export const getModelListSuccess = (modelList: ModelType[]): GetModelListSuccess => ({
  type: CarTypes.GET_MODEL_LIST_SUCCESS,
  modelList
})

export const getYearListSuccess = (yearList: YearType[]): GetYearListSuccess => ({
  type: CarTypes.GET_YEAR_LIST_SUCCESS,
  yearList
})

export const getModificationsListSuccess = (modificationList: ModificationsType[]): GetModificationListSuccess => ({
  type: CarTypes.GET_MODIFICATIONS_LIST_SUCCESS,
  modificationList
})

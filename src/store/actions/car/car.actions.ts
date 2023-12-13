import { CarTypes, CarType, GetCarListSuccess, ModelType, GetModelListSuccess } from "../../types/car/car";

export const getCarListSuccess = (carList: CarType[]): GetCarListSuccess => ({
  type: CarTypes.GET_CAR_LIST_SUCCESS,
  carList
})

export const getModelListSuccess = (modelList: ModelType[]): GetModelListSuccess => ({
  type: CarTypes.GET_MODEL_LIST_SUCCESS,
  modelList
})

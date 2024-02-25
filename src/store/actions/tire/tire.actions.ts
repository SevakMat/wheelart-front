import { GetRecommededTiresSuccess, GetTireListSuccess, GetTireSuccess, GetTiresCountSuccess, TireServerTypes, TireType } from "../../types/tire/tire";

export const getTiresListByCarDateAction = (tireList: TireType[]): GetTireListSuccess => ({
  type: TireServerTypes.GET_TIRE_LIST_SUCCESS,
  tireList
})

export const getRecommendedTiresAction = (recommendedTires: TireType[]): GetRecommededTiresSuccess => ({
  type: TireServerTypes.GET_REQOMMENDED_TIRES_SUCCESS,
  recommendedTires
})

export const getTireAction = (tire: TireType): GetTireSuccess => ({
  type: TireServerTypes.GET_TIRE_SUCCESS,
  tire,
});


export const getTiresListCountAction = (
  tiresCount: number
): GetTiresCountSuccess => ({
  type: TireServerTypes.GET_TIRES_COUNT_SUCCESS,
  tiresCount,
});


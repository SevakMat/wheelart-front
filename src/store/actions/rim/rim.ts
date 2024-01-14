import { GetRimsCountSuccess, GetRimListSuccess, GetRimSuccess, RimServerTypes, RimType } from "../../types/rim/rim";

export const getRimsListByCarDateAction = (rimList: RimType[]): GetRimListSuccess => ({
  type: RimServerTypes.GET_RIM_LIST_SUCCESS,
  rimList
})

export const getRimAction = (rim: RimType): GetRimSuccess => ({
  type: RimServerTypes.GET_RIM_SUCCESS,
  rim
})

export const getRimsListCountAction = (rimsCount: number): GetRimsCountSuccess => ({
  type: RimServerTypes.GET_RIMS_COUNT_SUCCESS,
  rimsCount
})
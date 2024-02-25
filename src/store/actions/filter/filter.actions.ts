import { RimFilters, FilterServerTypes, GetRimFilterListSuccess, GetRimSelectedFilterListSuccess, SelectedRimFilters, TireFilters, GetTireFilterListSuccess, GetTireSelectedFilterListSuccess, SelectedTireFilters } from "../../types/filters/filters";

export const getRimFiltersListSuccess = (rimFilters: RimFilters): GetRimFilterListSuccess => ({
  type: FilterServerTypes.GET_RIM_FILTER_LIST_SUCCESS,
  rimFilters
})

export const getSelectedRimFiltersListSuccess = (selectedRimFilters: SelectedRimFilters): GetRimSelectedFilterListSuccess => ({
  type: FilterServerTypes.GET_RIM_SELECTED_FILTER_LIST_SUCCESS,
  selectedRimFilters
})

export const getTireFiltersListSuccess = (tireFilters: TireFilters): GetTireFilterListSuccess => ({
  type: FilterServerTypes.GET_TIRE_FILTER_LIST_SUCCESS,
  tireFilters
})

export const getSelectedTireFiltersListSuccess = (selectedTireFilters: SelectedTireFilters): GetTireSelectedFilterListSuccess => ({
  type: FilterServerTypes.GET_TIRE_SELECTED_FILTER_LIST_SUCCESS,
  selectedTireFilters
})
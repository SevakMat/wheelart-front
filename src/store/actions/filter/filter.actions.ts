import { Filters, FilterServerTypes, GetFilterListSuccess, GetSelectedFilterListSuccess, SelectedFilters } from "../../types/filters/filters";

export const getFiltersListSuccess = (filters: Filters): GetFilterListSuccess => ({
  type: FilterServerTypes.GET_FILTER_LIST_SUCCESS,
  filters
})

export const getSelectedFiltersListSuccess = (selectedFilters: SelectedFilters): GetSelectedFilterListSuccess => ({
  type: FilterServerTypes.GET_SELECTED_FILTER_LIST_SUCCESS,
  selectedFilters
})
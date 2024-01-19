export enum FilterServerTypes {
  GET_FILTER_LIST_SUCCESS = "GET_FILTER_LIST_SUCCESS",
  GET_SELECTED_FILTER_LIST_SUCCESS = "GET_SELECTED_FILTER_LIST_SUCCESS",
}
export type FilterName = "sizeR" | "pcd" | "centerBore" | "studHoles"

export interface FilterType {
  count: number,
  filterName: FilterName
}

export interface Filters {
  sizeR: FilterType[],
  pcd: FilterType[],
  studHoles: FilterType[],
  centerBore: FilterType[],
}
export interface SelectedFilters {
  sizeR?: number[],
  pcd?: number[],
  studHoles?: number[],
  centerBore?: number[],
  pagination?: number
}


export interface FilterState {
  filters: Filters,
  selectedFilters: SelectedFilters
}


export interface GetFilterListSuccess {
  type: FilterServerTypes.GET_FILTER_LIST_SUCCESS;
  filters: Filters;
}


export interface GetSelectedFilterListSuccess {
  type: FilterServerTypes.GET_SELECTED_FILTER_LIST_SUCCESS;
  selectedFilters: SelectedFilters;
}

export type FilterActionTypes = GetFilterListSuccess | GetSelectedFilterListSuccess;
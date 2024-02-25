export enum FilterServerTypes {
  GET_RIM_FILTER_LIST_SUCCESS = "GET_RIM_FILTER_LIST_SUCCESS",
  GET_RIM_SELECTED_FILTER_LIST_SUCCESS = "GET_RIM_SELECTED_FILTER_LIST_SUCCESS",
  GET_TIRE_FILTER_LIST_SUCCESS = "GET_TIRE_FILTER_LIST_SUCCESS",
  GET_TIRE_SELECTED_FILTER_LIST_SUCCESS = "GET_TIRE_SELECTED_FILTER_LIST_SUCCESS",
}

export type RimFilterName = "sizeR" | "pcd" | "centerBore" | "studHoles"

export type TireFilterName = "tireWidth" | "tireAspectRatio" | "rimDiameter" | "marka" | "marka"

export interface RimFilterType {
  count: number,
  filterName: RimFilterName
}
export interface TireFilterType {
  count: number,
  filterName: TireFilterName
}

export interface RimFilters {
  sizeR: RimFilterType[],
  pcd: RimFilterType[],
  studHoles: RimFilterType[],
  centerBore: RimFilterType[],
  color: RimFilterType[],
  width: RimFilterType[],
  price: RimFilterType[],
}

export interface TireFilters {
  tireWidth: TireFilterName[];
  tireAspectRatio: TireFilterName[];
  rimDiameter: TireFilterName[];
  marka: TireFilterName[];
  stock: TireFilterName[];
}

export interface SelectedRimFilters {
  sizeR?: number[],
  pcd?: number[],
  studHoles?: number[],
  centerBore?: number[],
  width?: number[],
  color?: number[],
  price?: TireFilterName[],
  pagination?: number
}

export interface SelectedTireFilters {
  tireWidth?: number[];
  tireAspectRatio?: number[];
  rimDiameter?: number[];
  marka?: number[];
  stock?: number[];
}

export interface FilterState {
  rimFilters: RimFilters,
  selectedRimFilters: SelectedRimFilters,
  tireFilters: TireFilters,
  selectedTireFilters: SelectedTireFilters,
}


export interface GetRimFilterListSuccess {
  type: FilterServerTypes.GET_RIM_FILTER_LIST_SUCCESS;
  rimFilters: RimFilters;
}


export interface GetRimSelectedFilterListSuccess {
  type: FilterServerTypes.GET_RIM_SELECTED_FILTER_LIST_SUCCESS;
  selectedRimFilters: SelectedRimFilters;
}


export interface GetTireFilterListSuccess {
  type: FilterServerTypes.GET_TIRE_FILTER_LIST_SUCCESS;
  tireFilters: TireFilters;
}


export interface GetTireSelectedFilterListSuccess {
  type: FilterServerTypes.GET_TIRE_SELECTED_FILTER_LIST_SUCCESS;
  selectedTireFilters: SelectedTireFilters;
}


export type FilterActionTypes = GetRimFilterListSuccess | GetRimSelectedFilterListSuccess | GetTireFilterListSuccess | GetTireSelectedFilterListSuccess;
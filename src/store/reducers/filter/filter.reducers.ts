import { Reducer } from "redux";
import { FilterActionTypes, FilterServerTypes, FilterState } from "../../types/filters/filters";

const initialState = {
  rimFilters: {
    sizeR: [],
    pcd: [],
    studHoles: [],
    centerBore: [],
    color: [],
    width: [],
    price: [],
  },
  selectedRimFilters: {
    sizeR: [],
    pcd: [],
    studHoles: [],
    centerBore: [],
    color: [],
    width: [],
    price: [],
  },
  tireFilters: {
    tireWidth: [],
    tireAspectRatio: [],
    rimDiameter: [],
    marka: [],
    stock: [],
  },
  selectedTireFilters: {
    tireWidth: [],
    tireAspectRatio: [],
    rimDiameter: [],
    marka: [],
    stock: [],
  },
}

type ReducerType = Reducer<FilterState, FilterActionTypes>

const reducer: ReducerType = (state = initialState, action: FilterActionTypes) => {
  switch (action.type) {
    case FilterServerTypes.GET_RIM_FILTER_LIST_SUCCESS:
      return {
        ...state,
        rimFilters: action.rimFilters
      };
    case FilterServerTypes.GET_RIM_SELECTED_FILTER_LIST_SUCCESS:
      return {
        ...state,
        selectedRimFilters: action.selectedRimFilters
      };

    case FilterServerTypes.GET_TIRE_FILTER_LIST_SUCCESS:
      return {
        ...state,
        tireFilters: action.tireFilters
      };
    case FilterServerTypes.GET_TIRE_SELECTED_FILTER_LIST_SUCCESS:
      return {
        ...state,
        selectedTireFilters: action.selectedTireFilters
      };


    default:
      return state;
  }
};

export default reducer;

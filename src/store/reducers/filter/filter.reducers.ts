import { Reducer } from "redux";
import { FilterActionTypes, FilterServerTypes, FilterState } from "../../types/filters/filters";

const initialState = {
  filters: {
    sizeR: [],
    pcd: [],
    studHoles: [],
    centerBore: [],
    color: [],
    width: [],
  },
  selectedFilters: {
    sizeR: [],
    pcd: [],
    studHoles: [],
    centerBore: [],
    color: [],
    width: [],
  }
}

type ReducerType = Reducer<FilterState, FilterActionTypes>

const reducer: ReducerType = (state = initialState, action: FilterActionTypes) => {
  switch (action.type) {
    case FilterServerTypes.GET_FILTER_LIST_SUCCESS:
      return {
        ...state,
        filters: action.filters
      };
    case FilterServerTypes.GET_SELECTED_FILTER_LIST_SUCCESS:
      return {
        ...state,
        selectedFilters: action.selectedFilters
      };
    default:
      return state;
  }
};

export default reducer;

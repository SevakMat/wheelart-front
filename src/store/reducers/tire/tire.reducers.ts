import { Reducer } from "redux";
import { TireActionTypes, TireServerTypes, TireState } from "../../types/tire/tire";

const initialState: TireState = {
  tireList: [],
  recommendedTires: []
}

type ReducerType = Reducer<TireState, TireActionTypes>

const reducer: ReducerType = (state = initialState, action: TireActionTypes) => {

  switch (action.type) {
    case TireServerTypes.GET_TIRE_LIST_SUCCESS:
      return {
        ...state,
        tireList: action.tireList,
      };
    case TireServerTypes.GET_REQOMMENDED_TIRES_SUCCESS:
      return {
        ...state,
        recommendedTires: action.recommendedTires,
      };

    default:
      return state;
  }
};

export default reducer;
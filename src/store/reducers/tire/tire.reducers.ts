import { Reducer } from "redux";
import { GetTireListSuccess, TireActionTypes, TireServerTypes, TireState } from "../../types/tire/tire";

const initialState: TireState = {
  tireList: [],
}

type ReducerType = Reducer<TireState, TireActionTypes>

const reducer: ReducerType = (state = initialState, action: GetTireListSuccess) => {

  switch (action.type) {
    case TireServerTypes.GET_TIRE_LIST_SUCCESS:
      return {
        ...state,
        tireList: action.tireList,
      };

    default:
      return state;
  }
};

export default reducer;
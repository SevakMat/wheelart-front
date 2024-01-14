import { Reducer } from "redux";
import { RimActionTypes, RimServerTypes, RimState } from "../../types/rim/rim";

const initialState: RimState = {
  rimList: [],
  rim: null,
  rimsCount: 0

}

type ReducerType = Reducer<RimState, RimActionTypes>


const reducer: ReducerType = (state = initialState, action: RimActionTypes) => {

  switch (action.type) {
    case RimServerTypes.GET_RIM_LIST_SUCCESS:
      return {
        ...state,
        rimList: action.rimList,
      };
    case RimServerTypes.GET_RIM_SUCCESS:
      return {
        ...state,
        rim: action.rim,
      };

    case RimServerTypes.GET_RIMS_COUNT_SUCCESS: return {
      ...state,
      rimsCount: action.rimsCount,
    };

    // case AuthTypes.LOGOUT_REQUEST_SUCCESS:
    //   return {
    //     ...state,
    //     authLoading: false,
    //     isLoggedIn: false,
    //     user: null,
    //   };
    // case AuthTypes.SET_LOADING:
    //   return {
    //     ...state,
    //     authLoading: action.loading,
    //   };

    default:
      return state;
  }
};


export default reducer;

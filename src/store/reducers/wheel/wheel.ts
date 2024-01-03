import { Reducer } from "redux";
import { GetWheelListSuccess, WheelActionTypes, WheelServerTypes, WheelState } from "../../types/wheel/wheel";

const initialState: WheelState = {
  wheelList: [],
  wheel: null

}

type ReducerType = Reducer<WheelState, WheelActionTypes>


const reducer: ReducerType = (state = initialState, action: WheelActionTypes) => {

  switch (action.type) {
    case WheelServerTypes.GET_WHEEL_LIST_SUCCESS:
      return {
        ...state,
        wheelList: action.wheelList,
      };
    case WheelServerTypes.GET_WHEEL_SUCCESS:
      return {
        ...state,
        wheel: action.wheel,
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

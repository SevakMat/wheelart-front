import { Reducer } from "redux";
import { AuthActionTypes, AuthState, AuthTypes } from "../../types/auth/auth";
import { CarActionTypes, CarState, CarTypes } from "../../types/car/car";

const initialState: CarState = {
  selectedCarType: "",
  CarTypeList: [],
  selectedModelType: "",
  ModelList: [],
  selectedYearType: "",
  YearList: [],
  selectedModificationType: "",
  ModificationList: []
}

type ReducerType = Reducer<CarState, CarActionTypes>


const reducer: ReducerType = (state = initialState, action: CarActionTypes) => {
  switch (action.type) {


    case CarTypes.GET_CAR_LIST_SUCCESS:
      return {
        ...state,
        CarTypeList: action.carList,
      };

    case CarTypes.GET_MODEL_LIST_SUCCESS:
      return {
        ...state,
        ModelList: action.modelList,
      };

    case CarTypes.GET_YEAR_LIST_SUCCESS:
      return {
        ...state,
        YearList: action.yearList,
      };

    case CarTypes.GET_MODIFICATIONS_LIST_SUCCESS:
      return {
        ...state,
        ModificationList: action.modificationList,
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

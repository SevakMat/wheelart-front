import { Reducer } from "redux";
import { CarActionTypes, CarState, CarTypes } from "../../types/car/car";

const initialState: CarState = {
  CarTypeList: [],
  ModelList: [],
  GenerationList: [],
  ModificationList: [],

  selectedCarType: "",
  selectedModelType: "",
  selectedYearType: "",
  selectedModificationType: "",
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
        selectedCarType: action.carType,
        // YearList: [],
        // ModificationList: [],
        // selectedYearType: "",
        // selectedModificationType: "",

      };

    case CarTypes.GET_YEAR_LIST_SUCCESS:
      return {
        ...state,
        YearList: action.yearList,
        selectedModelType: action.modelType,
        // ModificationList: [],
        // selectedModificationType: "",

      };

    case CarTypes.GET_MODIFICATIONS_LIST_SUCCESS:
      return {
        ...state,
        ModificationList: action.modificationList,
        selectedYearType: action.year
      };

    case CarTypes.GET_TEST_LIST_SUCCESS:
      return {
        ...state,
        ModelList: action.ModelList?.length ? action.ModelList : [],
        GenerationList: action.GenerationList?.length ? action.GenerationList : [],
        ModificationList: action.ModificationList?.length ? action.ModificationList : [],
      };
    default:
      return state;
  }
};

export default reducer;
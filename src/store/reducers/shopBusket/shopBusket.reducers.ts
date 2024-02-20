import { Reducer } from "redux";
import { ShopBusketActionTypes, ShopBusketServerTypes, ShopBusketState } from "../../types/shopBusket/shopBusket";

const initialState: ShopBusketState = {
  rimShopList: [],
  tireShopList: []
}

type ReducerType = Reducer<ShopBusketState, ShopBusketActionTypes>

const reducer: ReducerType = (state = initialState, action: ShopBusketActionTypes) => {

  switch (action.type) {

    case ShopBusketServerTypes.SET_SHOP_BUSKET_RIM_ACTION:
      return {
        ...state,
        rimShopList: [
          ...state.rimShopList,
          action.rim
        ],
      };
    case ShopBusketServerTypes.SET_SHOP_BUSKET_TIRE_ACTION:
      return {
        ...state,
        tireShopList: [
          ...state.tireShopList,
          action.tire
        ],
      };


    default:
      return state;
  }
};

export default reducer;
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
      const existingRimIndex = state.rimShopList.findIndex(rim => rim.id === action.rim.id);

      if (existingRimIndex !== -1) {
        const updatedRimShopList = state.rimShopList.map((rim, index) => {
          if (index === existingRimIndex) {

            return {
              ...rim,
              count: rim.count + action.rim.count
            };
          }
          return rim;
        });
        return {
          ...state,
          rimShopList: updatedRimShopList
        };
      } else {
        return {
          ...state,
          rimShopList: [...state.rimShopList, action.rim]
        };
      }

    case ShopBusketServerTypes.SET_SHOP_BUSKET_TIRE_ACTION:{
      const existingTIirendex = state.tireShopList.findIndex(tire => tire.id === action.tire.id);

      if (existingTIirendex !== -1) {
        const updatedTireShopList = state.tireShopList.map((tire, index) => {
          if (index === existingRimIndex) {

            return {
              ...tire,
              count: tire.count + action.tire.count
            };
          }
          return tire;
        });
        return {
          ...state,
          rimShopList: updatedTireShopList
        };
      } else {
        return {
          ...state,
          rimShopList: [...state.tireShopList, action.tire]
        };
      }

    }
      

    case ShopBusketServerTypes.REMOVE_SHOP_BUSKET_TIRE_ACTION:
      return {
        ...state,
        tireShopList: state.tireShopList.filter(item => item.id != action.tireId)
      };

    case ShopBusketServerTypes.REMOVE_SHOP_BUSKET_RIM_ACTION:
      return {
        ...state,
        rimShopList: state.rimShopList.filter(item => item.id != action.rimId)
      };

    default:
      return state;
  }
};

export default reducer;

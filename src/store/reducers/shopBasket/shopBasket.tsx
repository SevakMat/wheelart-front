import { Reducer } from "redux";
import {
  ShopBasketServerType,
  ShopBasketState,
  ShopBasketActioType,
} from "../../types/shopBasket/shopBasket";

const initialState: ShopBasketState = {
  ShopBasketItemList: [],
};

type ReducerType = Reducer<ShopBasketState, ShopBasketActioType>;

const reducer: ReducerType = (
  state = initialState,
  action: ShopBasketActioType
) => {
  switch (action.type) {
    case ShopBasketServerType.GET_SHOP_BASKET_ITEM_SUCCESS:
      return {
        ...state,
        ShopCartItemList: action.shopBasketItemList,
      };
  }
};

export default reducer;

import {
  ShopBasketServerType,
  ShopBasketType,
} from "../../types/shopBasket/shopBasket";

const getBasketItemInfo = (shopBasketItemList: ShopBasketType) => ({
  type: ShopBasketServerType.GET_SHOP_BASKET_ITEM_SUCCESS,
  shopBasketItemList,
});

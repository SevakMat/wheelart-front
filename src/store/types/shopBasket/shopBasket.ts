export enum ShopBasketServerType {
  GET_SHOP_BASKET_ITEM_SUCCESS = "GET_SHOP_BASKET_ITEM_SUCCESS",
}

export interface ShopBasketType {
  // itemLink: string;
  // itemInfo: (string | number)[];
  rims: [];
  tires: [];
  accss: [];
}

export interface ShopBasketState {
  ShopBasketItemList: ShopBasketType[];
}

export interface GetShopBasketItemSuccess {
  type: ShopBasketServerType.GET_SHOP_BASKET_ITEM_SUCCESS;
  shopBasketItemList: ShopBasketType[];
}

export type ShopBasketActioType = GetShopBasketItemSuccess;

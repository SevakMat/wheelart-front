import { RimType } from "../rim/rim";
import { TireType } from "../tire/tire";

export enum ShopBusketServerTypes {
  SET_SHOP_BUSKET_RIM_ACTION = "SET_SHOP_BUSKET_RIM_ACTION",
  SET_SHOP_BUSKET_TIRE_ACTION = "SET_SHOP_BUSKET_TIRE_ACTION",
}


export interface ShopBusketState {
  tireShopList: any[];
  rimShopList: any[];
}


export interface SetShopBusketRimAction {
  type: ShopBusketServerTypes.SET_SHOP_BUSKET_RIM_ACTION;
  rim: RimType;
}

export interface SetShopBusketTireAction {
  type: ShopBusketServerTypes.SET_SHOP_BUSKET_TIRE_ACTION;
  tire: TireType;
}

export type ShopBusketActionTypes = SetShopBusketRimAction | SetShopBusketTireAction;

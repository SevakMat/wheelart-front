import { RimType } from "../rim/rim";
import { TireType } from "../tire/tire";

export enum ShopBusketServerTypes {
  SET_SHOP_BUSKET_RIM_ACTION = "SET_SHOP_BUSKET_RIM_ACTION",
  SET_SHOP_BUSKET_TIRE_ACTION = "SET_SHOP_BUSKET_TIRE_ACTION",
  REMOVE_SHOP_BUSKET_TIRE_ACTION = 'REMOVE_SHOP_BUSKET_TIRE_ACTION',
  REMOVE_SHOP_BUSKET_RIM_ACTION = 'REMOVE_SHOP_BUSKET_RIM_ACTION'
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

export interface RemoveShopBusketTireAction {
  type: ShopBusketServerTypes.REMOVE_SHOP_BUSKET_TIRE_ACTION;
  tireId: string;
}

export interface RemoveShopBusketRimAction {
  type: ShopBusketServerTypes.REMOVE_SHOP_BUSKET_RIM_ACTION;
  rimId: string;
}




export type ShopBusketActionTypes = SetShopBusketRimAction | SetShopBusketTireAction | RemoveShopBusketTireAction | RemoveShopBusketRimAction;

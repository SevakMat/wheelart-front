import { RimType } from "../../types/rim/rim";
import { RemoveShopBusketRimAction, RemoveShopBusketTireAction, SetShopBusketRimAction, SetShopBusketTireAction, ShopBusketServerTypes } from "../../types/shopBusket/shopBusket";
import { TireType } from "../../types/tire/tire";

export const setShopBusketRimAction = (rim: RimType): SetShopBusketRimAction => ({
  type: ShopBusketServerTypes.SET_SHOP_BUSKET_RIM_ACTION,
  rim,
});

export const setShopBusketTireAction = (tire: TireType): SetShopBusketTireAction => ({
  type: ShopBusketServerTypes.SET_SHOP_BUSKET_TIRE_ACTION,
  tire,
});

export const removeShopBusketTireAction = (tireId: string): RemoveShopBusketTireAction => ({
  type: ShopBusketServerTypes.REMOVE_SHOP_BUSKET_TIRE_ACTION,
  tireId,
});

export const removeShopBusketRimAction = (rimId: string): RemoveShopBusketRimAction => ({
  type: ShopBusketServerTypes.REMOVE_SHOP_BUSKET_RIM_ACTION,
  rimId,
});

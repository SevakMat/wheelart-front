import { AppDispatch } from "../..";
import { removeShopBusketRimAction, removeShopBusketTireAction, setShopBusketRimAction, setShopBusketTireAction } from "../../actions/shopBuslet/shopBusket.action";
import { RimType } from "../../types/rim/rim";
import { TireType } from "../../types/tire/tire";

export const setShopBusketItemEffect = (item: RimType | TireType, type: any): any => {
  return async (dispatch: AppDispatch) => {
    try {
      if (type === "rim") {
        dispatch(setShopBusketRimAction(item as RimType));
      } else {
        dispatch(setShopBusketTireAction(item as TireType));
      }
    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };
};

export const removeBusketItemEffect = (itemId:string,type:string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      if (type === "RIM") {
        dispatch(removeShopBusketRimAction(itemId));
      } else {
        dispatch(removeShopBusketTireAction(itemId));
      }
    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };
};

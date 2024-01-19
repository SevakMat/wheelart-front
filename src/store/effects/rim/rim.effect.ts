import { AppDispatch } from "../..";
import {
  getSingleRimService,
  getRimsListByCarDateService,
  getPopularRimsService,
} from "../../../services/rim.service";
import { getTiresListByCarDateAction } from "../../actions/tire/tire.actions";
import { getPopularRimsAction, getRimAction, getRimsListByCarDateAction, getRimsListCountAction } from "../../actions/rim/rim";

interface getRimsByCarDetailsEffectProps {

}

export const getRimsByCarDetailsEffect = (make?: string | null, model?: string | null, year?: string | null, modification?: string | null, pagination?: number): any => {
  return async (dispatch: AppDispatch) => {
    try {

      const result = await getRimsListByCarDateService(make, model, year, modification, pagination);
      const {
        data: { data: { rims, tires, rimsCount } }
      } = result;

      dispatch(getRimsListByCarDateAction(rims));
      dispatch(getTiresListByCarDateAction(tires));
      dispatch(getRimsListCountAction(rimsCount));


    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };
};

export const getRimEffect = (
  id?: string,
  makeValue?: string | null,
  modelValue?: string | null,
  yearValue?: string | null,
  modificationValue?: string | null
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await getSingleRimService(
        id,
        makeValue,
        modelValue,
        yearValue,
        modificationValue
      );
      const {
        data: { singleRim, tires },
      } = result;
      dispatch(getRimAction(singleRim));
      dispatch(getTiresListByCarDateAction(tires));
    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };
};

export const getPopularRimsEffect = (): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await getPopularRimsService();
      const {
        data: { popularRims },
      } = result;
      dispatch(getPopularRimsAction(popularRims));
    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };
};

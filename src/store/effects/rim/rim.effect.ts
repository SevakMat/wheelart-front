import { AppDispatch } from "../..";
import {
  getSingleRimService,
  getRimsListByCarDateService,
  getPopularRimsService,
} from "../../../services/rim.service";
import { getRecommendedTiresAction, getTiresListByCarDateAction } from "../../actions/tire/tire.actions";
import { getPopularRimsAction, getRecommendedRimsAction, getRimAction, getRimsListByCarDateAction, getRimsListCountAction } from "../../actions/rim/rim";
import { Location, NavigateFunction } from "react-router-dom";

export const getRimsByCarDetailsEffect = (location: Location<any>, navigate: NavigateFunction, make?: string | null, model?: string | null, generation?: string | null, modification?: string | null, pagination?: number): any => {
  return async (dispatch: AppDispatch) => {
    try {
      console.log(234234);

      const result = await getRimsListByCarDateService(make, model, generation, modification, pagination);
      const {
        data: { data: { rims, tires, rimsCount, wheelDetails } }
      } = result;

      dispatch(getRimsListByCarDateAction(rims));
      dispatch(getTiresListByCarDateAction(tires));
      dispatch(getRimsListCountAction(rimsCount));
      pushRouthEffect(wheelDetails, location, navigate)

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
  generationValue?: string | null,
  modificationValue?: string | null
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await getSingleRimService(
        id,
        makeValue,
        modelValue,
        generationValue,
        modificationValue
      );
      const {
        data: { singleRim, recommendedRims, recommendedTires },
      } = result;
      dispatch(getRimAction(singleRim));
      dispatch(getRecommendedTiresAction(recommendedTires));
      dispatch(getRecommendedRimsAction(recommendedRims));

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

export const pushRouthEffect = (wheelDetails: any, location: Location<any>, navigate: NavigateFunction): any => {

  const queryParams = new URLSearchParams(location.search)

  for (const key in wheelDetails) {
    if (Object.prototype.hasOwnProperty.call(wheelDetails, key)) {
      queryParams.set(key, wheelDetails[key]);
    }
  }

  navigate(`${location.pathname}?${queryParams.toString()}`, {
    replace: true,
  })

};


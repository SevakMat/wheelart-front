import { log } from "console";
import { AppDispatch } from "../..";
import { getSingleRimService, getWheelsListByCarDateService } from "../../../services/wheel.service";
import { getTiresListByCarDateAction } from "../../actions/tire/tire.actions";
import { getWheelAction, getWheelsListByCarDateAction } from "../../actions/wheel/wheel.actions";

export const getWheelsListByCarDateEffect = (make: string, model: string, year: string, modification: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      // dispatch(setLoadingEffect(true));
      // Get user


      const result = await getWheelsListByCarDateService(make, model, year, modification);
      const {
        data: { data: { rims, tires } }
      } = result;


      dispatch(getWheelsListByCarDateAction(rims));
      // dispatch(getTiresListByCarDateAction(tires));


      // dispatch(setLoadingEffect(false));
    } catch (error: any) {
      // dispatch(setLoadingEffect(false));
      // toast.error("Logined faild");
      console.log(error);

    } finally {
      // dispatch(setLoadingEffect(false));
    }
  };
};


export const getWheelEffect = (id?: string, makeValue?: string | null, modelValue?: string | null, yearValue?: string | null, modificationValue?: string | null): any => {
  return async (dispatch: AppDispatch) => {
    try {

      const result = await getSingleRimService(id, makeValue, modelValue, yearValue, modificationValue);


      const { data: { wheel, tires } } = result;

      dispatch(getWheelAction(wheel));
      dispatch(getTiresListByCarDateAction(tires));


      // dispatch(setLoadingEffect(false));
    } catch (error: any) {
      // dispatch(setLoadingEffect(false));
      // toast.error("Logined faild");
      console.log(error);

    } finally {

      // dispatch(setLoadingEffect(false));
    }
  };
};

import { log } from "console";
import { AppDispatch } from "../..";
import { getSingleRimService, getRimsListByCarDateService } from "../../../services/rim.service";
import { getTiresListByCarDateAction } from "../../actions/tire/tire.actions";
import { getRimAction, getRimsListByCarDateAction } from "../../actions/rim/rim";

export const getWheelsListByCarDateEffect = (make?: string | null, model?: string | null, year?: string | null, modification?: string | null): any => {
  return async (dispatch: AppDispatch) => {
    try {

      const result = await getRimsListByCarDateService(make, model, year, modification);
      const {
        data: { data: { rims, tires } }
      } = result;


      dispatch(getRimsListByCarDateAction(rims));
      dispatch(getTiresListByCarDateAction(tires));

    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };
};


export const getRimEffect = (id?: string, makeValue?: string | null, modelValue?: string | null, yearValue?: string | null, modificationValue?: string | null): any => {
  return async (dispatch: AppDispatch) => {
    try {

      const result = await getSingleRimService(id, makeValue, modelValue, yearValue, modificationValue);


      const { data: { singleRim, tires } } = result;

      dispatch(getRimAction(singleRim));
      dispatch(getTiresListByCarDateAction(tires));

    } catch (error: any) {
      // dispatch(setLoadingEffect(false));
      // toast.error("Logined faild");
      console.log(error);

    } finally {

      // dispatch(setLoadingEffect(false));
    }
  };
};

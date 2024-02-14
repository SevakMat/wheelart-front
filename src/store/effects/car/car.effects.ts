import { AppDispatch } from "../..";
import { GetCarData, getCarDetailsService } from "../../../services/car.service";
import { getCarListSuccess, getTestListSuccess } from "../../actions/car/car.actions";

export const getCarsEffect = (): any => {
  return async (dispatch: AppDispatch) => {
    try {
      // dispatch(setLoadingEffect(true));
      const result = await GetCarData();
      const {
        data: { data }
      } = result;

      dispatch(getCarListSuccess(data));

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


export const getCarDetailsEffect = (make?: string | null, model?: string | null, generation?: string | null, modification?: string | null): any => {
  return async (dispatch: AppDispatch) => {
    try {

      const result = await getCarDetailsService(make, model, generation, modification);
      const {
        data: { data: {
          modelDada,
          modificationDada,
          generationDada
        } }
      } = result;

      dispatch(getTestListSuccess(modelDada, generationDada, modificationDada));
      // dispatch(getRimsListByCarDateAction(rims));
      // dispatch(getTiresListByCarDateAction(tires));

    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };
};

import { AppDispatch } from "../..";
import { GetCarData, GetModelByCarData } from "../../../services/car.service";
import { getCarListSuccess, getModelListSuccess } from "../../actions/car/car.actions";

export const getCarsEffect = (): any => {
  return async (dispatch: AppDispatch) => {
    try {
      // dispatch(setLoadingEffect(true));
      // Get user

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
      console.log("finally");

      // dispatch(setLoadingEffect(false));
    }
  };
};


export const getModelByCarEffect = (car: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      // dispatch(setLoadingEffect(true));
      // Get user

      const result = await GetModelByCarData(car);
      const {
        data: { data }
      } = result;

      dispatch(getModelListSuccess(data));


      // dispatch(setLoadingEffect(false));
    } catch (error: any) {
      // dispatch(setLoadingEffect(false));
      // toast.error("Logined faild");
      console.log(error);

    } finally {
      console.log("finally");

      // dispatch(setLoadingEffect(false));
    }
  };
};
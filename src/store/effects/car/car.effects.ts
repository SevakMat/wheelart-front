import { AppDispatch } from "../..";
import { GetCarData, GetModelByCarData, GetModificationsByCarData, GetYearByCarData } from "../../../services/car.service";
import { getCarListSuccess, getModelListSuccess, getYearListSuccess, getModificationsListSuccess } from "../../actions/car/car.actions";

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


export const getModelsByCarEffect = (make: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      // dispatch(setLoadingEffect(true));
      // Get user

      const result = await GetModelByCarData(make);
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

export const getYearsByCarEffect = (make: string, model: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      // dispatch(setLoadingEffect(true));
      // Get user

      const result = await GetYearByCarData(make, model);
      const {
        data: { data }
      } = result;

      console.log("getYearsByCarEffect", data);

      dispatch(getYearListSuccess(data));


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


export const getModificationsByCarEffect = (make: string, model: string, year: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      // dispatch(setLoadingEffect(true));
      // Get user

      const result = await GetModificationsByCarData(make, model, year);
      const {
        data: { data }
      } = result;


      dispatch(getModificationsListSuccess(data));

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


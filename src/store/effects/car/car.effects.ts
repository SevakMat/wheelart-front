import { AppDispatch } from "../..";
import { GetCarData, getCarDetailsService } from "../../../services/car.service";
import { getCarListSuccess, getModelListSuccess, getYearListSuccess, getModificationsListSuccess, getTestListSuccess } from "../../actions/car/car.actions";

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
      console.log(333333, generationDada);

      dispatch(getTestListSuccess(modelDada, generationDada, modificationDada));
      // dispatch(getRimsListByCarDateAction(rims));
      // dispatch(getTiresListByCarDateAction(tires));

    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };
};

// export const getModelsByCarEffect = (make: string): any => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       // dispatch(setLoadingEffect(true));
//       // Get user

//       const result = await GetModelByCarData(make);
//       const {
//         data: { data }
//       } = result;

//       dispatch(getModelListSuccess(data, make));


//       // dispatch(setLoadingEffect(false));
//     } catch (error: any) {
//       // dispatch(setLoadingEffect(false));
//       // toast.error("Logined faild");
//       console.log(error);
//     } finally {
//       // dispatch(setLoadingEffect(false));
//     }
//   };
// };

// export const getYearsByCarEffect = (make: string, model: string): any => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       // dispatch(setLoadingEffect(true));
//       // Get user

//       const result = await GetYearByCarData(make, model);
//       const {
//         data: { data }
//       } = result;

//       dispatch(getYearListSuccess(data, model));
//       // dispatch(setLoadingEffect(false));
//     } catch (error: any) {
//       // dispatch(setLoadingEffect(false));
//       // toast.error("Logined faild");
//       console.log(error);

//     } finally {

//       // dispatch(setLoadingEffect(false));
//     }
//   };
// };

// export const getModificationsByCarEffect = (make: string, model: string, year: string): any => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       // dispatch(setLoadingEffect(true));
//       // Get user

//       const result = await GetModificationsByCarData(make, model, year);
//       const {
//         data: { data }
//       } = result;


//       dispatch(getModificationsListSuccess(data, year));

//       // dispatch(setLoadingEffect(false));
//     } catch (error: any) {
//       // dispatch(setLoadingEffect(false));
//       // toast.error("Logined faild");
//       console.log(error);

//     } finally {

//       // dispatch(setLoadingEffect(false));
//     }
//   };
// };


import { log } from "console";
import { AppDispatch } from "../..";
import { getWheelsListByCarDateService } from "../../../services/wheel.service";
import { getWheelsListByCarDateAction } from "../../actions/wheel/wheel.actions";

export const getWheelsListByCarDateEffect = (make: string, model: string, year: string, modification: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      // dispatch(setLoadingEffect(true));
      // Get user


      const result = await getWheelsListByCarDateService(make, model, year, modification);
      const {
        data: { data }
      } = result;


      dispatch(getWheelsListByCarDateAction(data));

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

import { AppDispatch } from "../..";
import { getSingleTireService } from "../../../services/tire.service";
import { getTireAction } from "../../actions/tire/tire.actions";



export const getTireEffect = (
  id?: string,
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await getSingleTireService(id);

      const {
        data: { singleTire },
      } = result;

      dispatch(getTireAction(singleTire));

    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };
};

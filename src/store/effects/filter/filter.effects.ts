import { AppDispatch } from "../..";
import { GetAllFilters } from "../../../services/filters.service";
import { getFiltersListSuccess, getSelectedFiltersListSuccess } from "../../actions/filter/filter.actions";
import { getRimsListCountAction, getWheelsListByCarDateAction } from "../../actions/wheel/wheel.actions";
import { SelectedFilters } from "../../types/filters/filters";

export const getFiltersEffect = (selectedFilters: SelectedFilters): any => {
  return async (dispatch: AppDispatch) => {
    try {

      dispatch(getSelectedFiltersListSuccess(selectedFilters));

      const result = await GetAllFilters(selectedFilters);
      const {
        data: { filterData: { filters, wheelsData, rimsCount } }
      } = result;

      dispatch(getFiltersListSuccess(filters));
      dispatch(getWheelsListByCarDateAction(wheelsData));
      dispatch(getRimsListCountAction(rimsCount));

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




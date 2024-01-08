import { AppDispatch } from "../..";
import { GetAllFilters } from "../../../services/filters.service";
import { getFiltersListSuccess, getSelectedFiltersListSuccess } from "../../actions/filter/filter.actions";
import { getWheelsListByCarDateAction } from "../../actions/wheel/wheel.actions";
import { SelectedFilters } from "../../types/filters/filters";

export const getFiltersEffect = (selectedFilters: SelectedFilters): any => {
  return async (dispatch: AppDispatch) => {
    try {

      dispatch(getSelectedFiltersListSuccess(selectedFilters));
      console.log("selectedFilters", selectedFilters);

      const result = await GetAllFilters(selectedFilters);
      const {
        data: { filterData: { filters, wheelsData } }
      } = result;

      dispatch(getFiltersListSuccess(filters));
      dispatch(getWheelsListByCarDateAction(wheelsData));


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




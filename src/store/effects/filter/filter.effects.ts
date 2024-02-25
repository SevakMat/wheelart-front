import { AppDispatch } from "../..";
import { GetAllRimFilters, GetAllTireFilters } from "../../../services/filters.service";
import { getRimFiltersListSuccess, getSelectedRimFiltersListSuccess, getTireFiltersListSuccess } from "../../actions/filter/filter.actions";
import { getRimsListCountAction, getRimsListByCarDateAction } from "../../actions/rim/rim";
import { getTiresListByCarDateAction, getTiresListCountAction } from "../../actions/tire/tire.actions";
import { SelectedRimFilters } from "../../types/filters/filters";

export const getFiltersEffect = (selectedFilters: SelectedRimFilters): any => {
  return async (dispatch: AppDispatch) => {
    try {

      dispatch(getSelectedRimFiltersListSuccess(selectedFilters));

      const result = await GetAllRimFilters(selectedFilters);
      const {
        data: { filterData: { filters, wheelsData, rimsCount } }
      } = result;

      dispatch(getRimFiltersListSuccess(filters));
      dispatch(getRimsListByCarDateAction(wheelsData));
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


export const getTireFiltersEffect = (selectedFilters: SelectedRimFilters): any => {
  return async (dispatch: AppDispatch) => {
    try {

      // dispatch(getSelectedFiltersListSuccess(selectedFilters));

      const result = await GetAllTireFilters(selectedFilters);
      const {
        data: { filterData: { filters, tiresData, tiresCount } }
      } = result;
      
      dispatch(getTireFiltersListSuccess(filters));
      dispatch(getTiresListByCarDateAction(tiresData));
      dispatch(getTiresListCountAction(tiresCount));

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




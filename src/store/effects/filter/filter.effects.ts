import { AppDispatch } from "../..";
import { GetAllFilters } from "../../../services/filters.service";
import { getFiltersListSuccess, getSelectedFiltersListSuccess } from "../../actions/filter/filter.actions";
import { SelectedFilters } from "../../types/filters/filters";

export const getFiltersEffect = (selectedFilters: SelectedFilters): any => {
  return async (dispatch: AppDispatch) => {
    try {

      dispatch(getSelectedFiltersListSuccess(selectedFilters));

      const result = await GetAllFilters(selectedFilters);
      const {
        data: { filters }
      } = result;

      dispatch(getFiltersListSuccess(filters));


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




import { useDispatch } from "react-redux";
import { AppDispatch, RootState, useAppSelector } from "../../store";
import { getFiltersEffect } from "../../store/effects/filter/filter.effects";
import SelectFilter from "../shere/select/SelectFilter";

const FiltersBlock = () => {
  const { filters, selectedFilters } = useAppSelector((state: RootState) => state.filter)
  const dispatch: AppDispatch = useDispatch();

  const { sizeR, pcd, centerBore, studHoles } = filters

  const getFilters = () => {
    dispatch(getFiltersEffect(selectedFilters))
  }

  return (
    <div>
      {
        sizeR.length > 0 &&
        <SelectFilter filterType={sizeR} name="Size (R)" lable="sizeR" />
      }
      {
        pcd.length > 0 &&
        <SelectFilter filterType={pcd} name="PCD" lable="pcd" />
      }
      {
        centerBore.length > 0 &&
        <SelectFilter filterType={centerBore} name="Center Bore" lable="centerBore" />
      }      {
        studHoles.length > 0 &&
        <SelectFilter filterType={studHoles} name="Stud Holes" lable="studHoles" />
      }
      <button onClick={getFilters}>
        get filters
      </button>
    </div>
  )
}
export default FiltersBlock;

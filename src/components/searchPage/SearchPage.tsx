import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch, RootState, useAppSelector } from "../../store"
import { getCarsEffect, getModelsByCarEffect, getModificationsByCarEffect, getYearsByCarEffect } from "../../store/effects/car/car.effects"
import { getWheelsListByCarDateEffect } from "../../store/effects/wheel/wheel.effect";
import WheelsContent from "../shere/wheels/WheelsContent";

import CreateField from "./CreateField";
import FiltersBlock from "./FiltersBlock";

const SearchPage = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsEffect());
  }, []);


  const { CarTypeList, ModelList, YearList, ModificationList, selectedCarType, selectedYearType, selectedModelType } = useAppSelector((state: RootState) => state.car)
  const { WheelList } = useAppSelector((state: RootState) => state.wheel)




  const onSelect = (filedName: string, selectedElement: any) => {
    switch (filedName) {
      case 'Make':
        dispatch(getModelsByCarEffect(selectedElement))
        break;
      case 'Model':
        dispatch(getYearsByCarEffect(selectedCarType, selectedElement))
        break;
      case 'Year':
        dispatch(getModificationsByCarEffect(selectedCarType, selectedModelType, selectedElement))
        break;
      case 'Modification':
        dispatch(getWheelsListByCarDateEffect(selectedCarType, selectedModelType, selectedYearType, selectedElement))
        break;
    }
  }

  return (
    <div>
      {
        CarTypeList?.length > 0 &&
        <CreateField list={CarTypeList} fieldType="Make" onSelect={onSelect} />
      }
      {
        ModelList?.length > 0 &&
        <CreateField list={ModelList} fieldType="Model" onSelect={onSelect} />
      }
      {
        YearList?.length > 0 &&
        <CreateField list={YearList} fieldType="Year" onSelect={onSelect} />
      }
      {
        ModificationList?.length > 0 &&
        <CreateField list={ModificationList} fieldType="Modification" onSelect={onSelect} />
      }
      {WheelList?.length > 0 && <WheelsContent wheelList={WheelList} />}
      <FiltersBlock />
    </div>
  )
}


export default SearchPage;

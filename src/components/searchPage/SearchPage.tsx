import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch, RootState, useAppSelector } from "../../store"
import { getCarsEffect, getModelsByCarEffect, getModificationsByCarEffect, getYearsByCarEffect } from "../../store/effects/car/car.effects"

const SearchPage = () => {

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getCarsEffect())
  }, [])

  const { CarTypeList, ModelList, YearList, ModificationList } = useAppSelector((state: RootState) => state.car)

  console.log("CarTypeList", CarTypeList);
  console.log("ModelList", ModelList);
  console.log("YearList", YearList);
  console.log("ModificationList", ModificationList);


  const getModalByCar = () => {
    dispatch(getModelsByCarEffect("bmw"))
  }
  const getYearByCar = () => {

    dispatch(getYearsByCarEffect("bmw", "3-series"))
  }

  const getModifiCATIONSByCar = () => {

    dispatch(getModificationsByCarEffect("bmw", "3-series", "2008"))
  }

  return (<div>
    <button
      onClick={getModalByCar}
    >
      getModalByCar
    </button>
    <button
      onClick={getYearByCar}
    >
      getYearByCar
    </button>

    <button
      onClick={getModifiCATIONSByCar}
    >
      getModifiCATIONSByCar
    </button>
  </div>)
}

export default SearchPage

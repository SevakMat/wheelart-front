import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch, RootState, useAppSelector } from "../../store"
import { getCarsEffect, getModelByCarEffect } from "../../store/effects/car/car.effects"

const SearchPage = () => {

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getCarsEffect())
  }, [])

  const carList = useAppSelector((state: RootState) => state.car.CarTypeList)
  console.log(123, carList);

  const getModalByCar = () => {
    dispatch(getModelByCarEffect("bmw"))
  }


  return (<div>
    <button
      onClick={getModalByCar}
    >
      asdasd
    </button>
  </div>)
}

export default SearchPage

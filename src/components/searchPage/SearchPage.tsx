import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch, RootState, useAppSelector } from "../../store"
import { getCarsEffect, getModelsByCarEffect, getModificationsByCarEffect, getYearsByCarEffect } from "../../store/effects/car/car.effects"

import CreateField from "./CreateField";

const SearchPage = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsEffect());
  }, []);

  // const carList = useAppSelector((state: RootState) => state.car.CarTypeList)

  const carList = [
    { name: "Bmw", image: "asdasdasdasd" },
    { name: "Mercedes", image: "asdasdasdasd" },
    { name: "Opel", image: "asdasdasdasd" },
  ];

  const modelList = [
    { name: "Series3", image: "asdasdasdasd" },
    { name: "Series5", image: "asdasdasdasd" },
    { name: "Series7", image: "asdasdasdasd" },
  ];

  const typeList = [
    { name: "E93", image: "asdasdasdasd" },
    { name: "E60", image: "asdasdasdasd" },
    { name: "E36", image: "asdasdasdasd" },
  ];

  const sizeList = [
    { name: "R16", image: "asdasdasdasd" },
    { name: "R17", image: "asdasdasdasd" },
    { name: "R18", image: "asdasdasdasd" },
  ];

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
    <CreateField list={carList} fieldType="Make" />
    <CreateField list={modelList} fieldType="Model" />
    <CreateField list={typeList} fieldType="Type" />
    <CreateField list={sizeList} fieldType="Size" />
  </div>)
}


export default SearchPage;

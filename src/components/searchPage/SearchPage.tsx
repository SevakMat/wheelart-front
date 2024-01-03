import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import {
  AppDispatch,
  RootState,
  useAppSelector,
} from "../../store";
import {
  getCarsEffect,
  getModelsByCarEffect,
  getModificationsByCarEffect,
  getYearsByCarEffect,
} from "../../store/effects/car/car.effects";
import { getWheelsListByCarDateEffect } from "../../store/effects/wheel/wheel.effect";
import TiresContent from "../shere/tires/TiresContent";
import WheelsContent from "../shere/wheels/WheelsContent";

import CreateField from "./CreateField";

const SearchPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    dispatch(getCarsEffect());
  }, []);

  const makeValue = queryParams.get("make");
  const modelValue = queryParams.get("model");
  const yearValue = queryParams.get("year");
  const modificationValue = queryParams.get("modification");

  const fieldTypes = ["Make", "Model", "Year", "Modification"];

  useEffect(() => {

    if (makeValue) {
      dispatch(getModelsByCarEffect(makeValue));
    }
    if (makeValue && modelValue) {
      dispatch(getYearsByCarEffect(makeValue, modelValue));
    }
    if (makeValue && modelValue && yearValue) {
      dispatch(getModificationsByCarEffect(makeValue, modelValue, yearValue));
    }
    if (makeValue && modelValue && yearValue && modificationValue) {
      dispatch(
        getWheelsListByCarDateEffect(
          makeValue,
          modelValue,
          yearValue,
          modificationValue
        )
      );
    }
  }, [makeValue, modelValue, yearValue]);

  const {
    CarTypeList,
    ModelList,
    YearList,
    ModificationList,
    selectedCarType,
    selectedYearType,
    selectedModelType,
  } = useAppSelector((state: RootState) => state.car);
  const { wheelList } = useAppSelector((state: RootState) => state.wheel);
  const { tireList } = useAppSelector((state: RootState) => state.tire);

  const getFieldList = (fieldType: string) => {
    switch (fieldType) {
      case "Make":
        return CarTypeList;
      case "Model":
        return ModelList;
      case "Year":
        return YearList;
      case "Modification":
        return ModificationList;
      default:
        return [];
    }
  };

  const getFieldValue = (fieldType: string) => {
    switch (fieldType) {
      case "Make":
        return makeValue;
      case "Model":
        return modelValue;
      case "Year":
        return yearValue;
      case "Modification":
        return modificationValue;
      default:
        return null;
    }
  };

  const onSelect = useCallback(
    (fieldName: string, selectedElement: any) => {
      const searchParams = new URLSearchParams(location.search);
      switch (fieldName) {
        case "Make":
        case "Model":
        case "Year":
        case "Modification":

          searchParams.set(fieldName.toLowerCase(), selectedElement);
          navigate(`${location.pathname}?${searchParams.toString()}`, {
            replace: true,
          });
          break;
      }
    },
    [navigate, location.search]
  );

  return (
    <div>
      {fieldTypes.map((fieldType) => (
        CarTypeList?.length > 0 && (
          <CreateField
            key={fieldType}
            list={getFieldList(fieldType)}
            fieldType={fieldType}
            onSelect={onSelect}
            value={getFieldValue(fieldType)}
          />
        )
      ))}
      <WheelsContent wheelList={wheelList} />
      {tireList?.length > 0 && <TiresContent tiresList={tireList} />}
    </div>
  );
};

export default SearchPage;

import { Box, Button, Divider, styled } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AppDispatch, RootState, useAppSelector } from "../../../store";
import {
  getCarsEffect,
  getModelsByCarEffect,
  getModificationsByCarEffect,
  getYearsByCarEffect,
} from "../../../store/effects/car/car.effects";
import Field from "./Field";

const SearchModule = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [t] = useTranslation("home")

  const makeValue = queryParams.get("make");
  const modelValue = queryParams.get("model");
  const yearValue = queryParams.get("year");
  const modificationValue = queryParams.get("modification");


  const fieldTypes = [t("search.make"), t("search.model"), t("search.year"), t("search.modification")];
  useEffect(() => {
    dispatch(getCarsEffect());
  }, [dispatch]);

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
  }, [makeValue, modelValue, yearValue, dispatch]);

  const {
    CarTypeList,
    ModelList,
    YearList,
    ModificationList,
  } = useAppSelector((state: RootState) => state.car);

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
    [navigate, location.search, location.pathname]
  );

  const CustomDivider = styled(Divider)({
    display: "inline",
    height: 25,
    margin: "auto 0",
  });

  console.log("mec");

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {fieldTypes.map((fieldType, index) => (
        <span key={index}>
          <Field
            list={getFieldList(fieldType)}
            fieldType={fieldType}
            onSelect={onSelect}
            value={getFieldValue(fieldType)}
          />
          {index !== 3 && <CustomDivider orientation="vertical" flexItem />}
        </span>
      ))}

      <Button
        sx={{
          borderRadius: 20,
          background: "black",
          color: "white",
          padding: 1,

          "&:hover": {
            bgcolor: "#8b0000",
          },
        }}
      >
        {t("buttons.research")}
      </Button>
    </Box>
  );
};

export default SearchModule;

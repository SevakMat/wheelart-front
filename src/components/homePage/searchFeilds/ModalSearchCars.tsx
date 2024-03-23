import * as React from "react";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState, useAppSelector } from "../../../store";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useParamsHook } from "../../../hook/useParams";
import {
  getCarDetailsEffect,
  getCarsEffect,
} from "../../../store/effects/car/car.effects";
import { Box, Button, Divider, Typography } from "@mui/material";
import Field from "./Field";

export default function ModalSearchCars() {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch: AppDispatch = useDispatch();
  const [t] = useTranslation("home");

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = React.useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  // url info
  const { make, model, year, modification } = useParamsHook();

  React.useEffect(() => {

    dispatch(getCarsEffect());
  }, [dispatch]);

  React.useEffect(() => {
    if (make && model && year) {
      dispatch(getCarDetailsEffect(make, model, year));
    } else if (make && model) {
      dispatch(getCarDetailsEffect(make, model));
    } else if (make) {
      dispatch(getCarDetailsEffect(make));
    } else {
    }
  }, [make, model, year, dispatch]);

  const { CarTypeList, ModelList, GenerationList, ModificationList } =
    useAppSelector((state: RootState) => state.car);

  const onSelect = React.useCallback(
    (fieldName: string, selectedElement: any) => {
      queryParams.set(fieldName.toLowerCase(), selectedElement);
      navigate(`${location.pathname}?${queryParams.toString()}`, {
        replace: true,
      });
    },
    [navigate, queryParams, location.pathname]
  );

  return (
    <div>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            color: "white",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 9,
            paddingBottom: 1,
            textShadow: "1px 1px 2px red",
          }}
        >
          {t("content.TheLargestAssortmentInFrance")}
        </Typography>
      </Box>
      <TriggerButton
        type="button"
        onClick={handleOpen}
        sx={{
          width: 480,
          fontSize: 28,
          height: 60,
          borderRadius: 4,
          background:
            "linear-gradient(90deg, rgba(54,7,7,0.9) 0%, rgba(159,13,13,0.9) 50%, rgba(97,5,5,0.9) 100%)",
          boxShadow: "0px 0px 25px rgba(255, 0, 0, 0.5)",
          border: "none",
          color: "white",
          textTransform: "uppercase",

          "@media(max-width: 600px)": {
            width: 300,
            fontSize: 20,
          },

          "&:hover": {
            boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.5)",
            background:
              "linear-gradient(90deg, rgba(54,7,7,0.9) 0%, rgba(159,13,13,0.9) 50%, rgba(97,5,5,0.9) 100%)",
          },
        }}
      >
        Trouvez votre jante
      </TriggerButton>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width: 300, textAlign: "center" }}>
          <h2 id="unstyled-modal-title" className="modal-title">
            Trouvez votre jante
          </h2>
          <div>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                maxWidth: "1000px",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Field
                options={CarTypeList}
                fieldType="Make"
                onSelect={onSelect}
                value={make}
              />
              <Field
                options={ModelList}
                fieldType="Model"
                onSelect={onSelect}
                value={model}
              />
              <Field
                options={GenerationList}
                fieldType="Year"
                onSelect={onSelect}
                value={year}
              />
              <Field
                options={ModificationList}
                fieldType="Modification"
                onSelect={onSelect}
                value={modification}
              />
              <Button
                sx={{
                  borderRadius: 20,
                  maxWidth: 120,
                  width: "100%",
                  background: "black",
                  color: "white",
                  padding: 1,
                  "&:hover": {
                    bgcolor: "#8b0000",
                  },
                }}
                onClick={() => {
                  navigate(
                    `/rims?make=${make}&model=${model}&year=${year}&modification=${modification}`
                  );
                }}
              >
                {t("buttons.research")}
              </Button>
            </Box>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}

const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 24px;
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);

const TriggerButton = styled("button")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px
        ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
      outline: none;
    }
  `
);

import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import { Box, Typography, css } from "@mui/material";
import { Modal as BaseModal } from "@mui/base/Modal";

import { AppDispatch, RootState, useAppSelector } from "../../store";
import { getFiltersEffect } from "../../store/effects/filter/filter.effects";
import { getRimsByCarDetailsEffect } from "../../store/effects/rim/rim.effect";
import clsx from "clsx";

import { useParamsHook, useParamsHookArrays } from "../../hook/useParams";
import { useShowRimsBy } from "../../hook/showRimsBy";

import RimFilterField from "./RimFilterField";

import "../../fonts/monsterrat.css";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function ModalRimFilter() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();
  const { filters } = useAppSelector((state: RootState) => state.filter);
  const { sizeR, pcd, centerBore, studHoles, color, width, price } = filters;
  const [searchParams] = useSearchParams();

  const {
    make: makeValue,
    model: modelValue,
    generation: generationValue,
    modification: modificationValue,
    page: pageValue,
  } = useParamsHook();

  const rimsRequestDetection = useShowRimsBy();

  const urlParamsArray = useParamsHookArrays(searchParams);

  useEffect(() => {
    if (rimsRequestDetection === "by-rim") {
      dispatch(
        getFiltersEffect({
          ...urlParamsArray,
          pagination: pageValue ? +pageValue : 0,
        })
      );
    } else {
      dispatch(
        getRimsByCarDetailsEffect(
          location,
          navigate,
          makeValue,
          modelValue,
          generationValue,
          modificationValue,
          pageValue ? +pageValue : 0
        )
      );
    }

    // dispatch(getFiltersEffect({ ...selectedFilters, pagination: pageValue ? +pageValue : 1 }))
  }, [dispatch, pageValue, searchParams]);

  return (
    <Box sx={{ paddingTop: 3 }}>
      <TriggerButton
        type="button"
        onClick={handleOpen}
        sx={{
          width: 480,
          fontSize: 28,
          height: 60,
          borderRadius: 8,

          background:
            "radial-gradient(circle, rgba(193,193,193,1) 0%, rgba(149,149,149,1) 100%)",
          border: "none",
          color: "white",
          textTransform: "uppercase",

          "@media(max-width: 600px)": {
            width: 300,
            fontSize: 20,
          },

          "&:hover": {
            boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.5)",
            background:
              "radial-gradient(circle, rgba(193,193,193,1) 0%, rgba(149,149,149,1) 100%)",
          },
        }}
      >
        Filters
      </TriggerButton>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent
          sx={{
            width: 300,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 id="unstyled-modal-title" className="modal-title">
            Filter
          </h2>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 280,
                minWidth: 280,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  rowGap: 1,
                }}
              >
                <RimFilterField list={sizeR} fieldType="sizeR" name="sizeR" />
                <RimFilterField list={pcd} fieldType="pcd" name="pcd" />
                <RimFilterField
                  list={centerBore}
                  fieldType="centerBore"
                  name="centerBore"
                />
                <RimFilterField
                  list={studHoles}
                  fieldType="studHoles"
                  name="studHoles"
                />
                <RimFilterField list={color} fieldType="color" name="color" />
                <RimFilterField list={width} fieldType="width" name="width" />
                <RimFilterField list={price} fieldType="price" name="price" />
              </Box>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </Box>
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

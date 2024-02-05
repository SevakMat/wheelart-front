import { FC } from "react";
import { ICreateAccordion } from "../../../hok/interfaces";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const CreateAccordion: FC<ICreateAccordion> = ({ children }) => {
  return (
    <Accordion
      square={true}
      disableGutters
      sx={{ boxShadow: "none", paddingTop: 1 }}
    >
      <AccordionSummary
        expandIcon={<ExpandCircleDownIcon />}
        sx={{
          padding: "0 30px",
          borderRadius: "60px",
          backgroundColor: "#F7F7F7",
          "&:hover": {
            backgroundColor: "#DEDEDE",
          },
        }}
      >
        <Typography variant="h5">More</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0, margin: 0 }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default CreateAccordion;

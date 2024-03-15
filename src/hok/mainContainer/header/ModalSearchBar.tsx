import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";

import TextField from "@mui/material/TextField";

import SearchIcon from "@mui/icons-material/Search";

const style = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgba(0, 0, 0, 0.8)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  borderRadius: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media (max-width: 470px)": {
    width: 280,
  },

  "@media (max-width: 350px)": {
    width: 250,
  },
};

export default function ModalSearchBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen} sx={{ padding: 0 }}>
        <SearchIcon sx={{ fontSize: 28, color: "white" }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            variant="standard"
            InputProps={{ disableUnderline: true, style: { fontSize: 24 } }}
            sx={{
              input: { color: "white" },
              width: "80%",
              height: "20px",
              justifyContent: "center",
            }}
          />
          <Button
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: 18,

              "@media (max-width: 470px)": {
                fontSize: 12,
              },
            }}
          >
            Search
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

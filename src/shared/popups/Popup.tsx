import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

interface PopupProps {
  open: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ open, onClose, content }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        '& .MuiDialog-paper': {
          maxWidth: '600px',
          width: '100%',
        },
        '& .MuiDialogTitle-root': {
          display: 'flex',
          justifyContent: 'center',
        },
      }}
    >
      <DialogTitle>Busket</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
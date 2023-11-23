import * as React from 'react';
import Box from '@mui/material/Box';
import { Image } from '@mui/icons-material';

const Header: React.FC<any> = () => {


  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: "136px",
        padding: "8px",
        justifyContent: "space-evenly",
        alignItems: "center",
        background: "gray"
      }}
    >
      <Box
        mt={{
          display: 'flex',
        }}
      >
        image
      </Box>
      <Box
        sx={{

        }}
      >
        links
      </Box>
      <Box>
        search
      </Box>
    </Box>
  );
}

export default Header
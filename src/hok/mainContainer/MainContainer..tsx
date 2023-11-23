import * as React from 'react';
import Box from '@mui/material/Box';
import { IMainContainer } from '../interfaces';
import Header from './Header';
import Footer from './Footer';



const MainContainer: React.FC<IMainContainer> = ({ children }) => {

  return (
    <Box>
      <Header />
      {children}
      <Footer />

    </Box>
  );
}

export default MainContainer
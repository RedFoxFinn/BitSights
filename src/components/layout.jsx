
// layout.jsx
// file provides basic layout for the BitSights application

import React, {  } from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import Header from './layout/header';
import Content from './layout/content';
import Footer from './layout/footer';

import theme from '../styles/theme';
import { generateID } from '../tools/id';
import { MiniDrawer } from './layout/drawer';

const TheLayout = ({id}) => {
  return <Box id={id} data-testid={id} >
    <ThemeProvider theme={theme} >
      <MiniDrawer id={generateID(id, 'drawer')} />
      <Box id={id} data-testid={id} sx={{margin: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Header id={generateID(id, 'header')} />
        <Content id={generateID(id, 'content')} />
        <Footer id={generateID(id, 'footer')} />
      </Box>
      </ThemeProvider>
    </Box>;
};

export default TheLayout;

// layout.jsx
// file provides basic layout for the BitSights application

import React, {  } from 'react';
import Box from '@mui/material/Box';

import Header from './layout/header';
import Content from './layout/content';
import Footer from './layout/footer';

import { generateID } from '../tools/id';

const TheLayout = ({id}) => {
  return <Box id={id} data-testid={id} sx={{margin: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Header id={generateID(id, 'header')} />
    <Content id={generateID(id, 'content')} />
    <Footer id={generateID(id, 'footer')} />
  </Box>;
};

export default TheLayout;
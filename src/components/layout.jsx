
// layout.jsx
// file provides basic layout for the BitSights application

import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';

import Header from './layout/header';
import Content from './layout/content';
import Footer from './layout/footer';

import theme from '../styles/theme';
import { generateID } from '../tools/id';

import { set_dr_start, set_dr_end } from '../controllers/redux/slices/date';
import { getDRStart, getDREnd } from '../controllers/app/daterange';
import { createDate, decrementByWeek } from '../tools/date';

import { useWindowSize } from '../hooks/useWindowSize';

const TheLayout = ({id}) => {
  const { width, height } = useWindowSize();

  const { daterange_end } = useSelector(state => state.dates);
  const dispatcher = useDispatch();

  useLayoutEffect(() => {
    const drEnd = getDREnd();
    if (!drEnd) {
      dispatcher(set_dr_end(createDate()));
    } else {
      dispatcher(set_dr_end(drEnd));
    }
    const drStart = getDRStart();
    if (!drStart) {
      dispatcher(set_dr_start(decrementByWeek(daterange_end)));
    } else {
      dispatcher(set_dr_start(drStart));
    }
  });
  
  return <ThemeProvider theme={theme} >
    <Box id={id} data-testid={id} sx={{
      margin: '1rem 2rem', display: 'flex',
      flexDirection: 'column', alignItems: 'center'}}>
      <Header id={generateID(id, 'header')} />
      {width < 800 && width < height ? <Typography variant='h4' color='info' >Landscape orientation required</Typography> : <Content id={generateID(id, 'content')} />}
      <Footer id={generateID(id, 'footer')} />
    </Box>
  </ThemeProvider>;
};

export default TheLayout;
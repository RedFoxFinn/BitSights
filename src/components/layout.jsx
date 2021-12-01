
// layout.jsx
// file provides basic layout for the BitSights application

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import Header from './layout/header';
import Content from './layout/content';
import Footer from './layout/footer';

import theme from '../styles/theme';
import { generateID } from '../tools/id';

import { set_dr_start, set_dr_end, reset_dr_start, reset_dr_end } from '../controllers/redux/slices/date';
import { getDRStart, getDREnd } from '../tools/daterange';
import { createDate, decrementByWeek, incrementByWeek } from '../tools/date';

const TheLayout = ({id}) => {
  const { daterange_start, daterange_end } = useSelector(state => state.dates);
  const dispatcher = useDispatch();

  useEffect(() => {
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
  
  return <Box id={id} data-testid={id} >
    <ThemeProvider theme={theme} >
      <Box id={id} data-testid={id} sx={{margin: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Header id={generateID(id, 'header')} />
        <Content id={generateID(id, 'content')} />
        <Footer id={generateID(id, 'footer')} />
      </Box>
      </ThemeProvider>
    </Box>;
};

export default TheLayout;
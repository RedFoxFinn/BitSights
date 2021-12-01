
// insight.jsx
// file contains the UI element of received Bitcoin trend data for the BitSights application

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { getColor, getColorWithAlpha } from '../styles/colors';

const Insight = (props) => {
  const { daterange_start, daterange_end } = useSelector(state => state.dates);
  const { marketvalues, fallback } = useSelector(state => state.values);
  return <Card sx={{backgroundColor: getColor('background'), padding: '1rem', marginTop: '1rem', marginBottom: '1rem'}} >
    <Typography variant='h5' sx={{color: getColorWithAlpha('warn',0.8)}}>BTC market value</Typography>
    <Typography variant='subtitle1' sx={{}} >Date range: </Typography>
    <Typography variant='body1' sx={{}} ></Typography>
    <Typography variant='body1' sx={{color: getColor('warn')}} >Latest: {marketvalues ?? fallback} €</Typography>
  </Card>;
};

export default Insight;
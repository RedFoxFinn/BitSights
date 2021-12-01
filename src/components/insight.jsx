
// insight.jsx
// file contains the UI element of received Bitcoin trend data for the BitSights application

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import ArrowExpandHorizontal from 'mdi-material-ui/ArrowExpandHorizontal';

import { getColor, getColorWithAlpha } from '../styles/colors';

import { sanitiseDate, timestampIt } from '../tools/date';
import { getBitcoinBasic } from '../controllers/services/fetch';
import { fetchMarketData } from '../controllers/redux/slices/value';
import { getDRStart, getDREnd } from '../tools/daterange';

const Insight = ({id}) => {
  const { daterange_start, daterange_end } = useSelector(state => state.dates);
  const dispatcher = useDispatch();
  const { marketvalues, fallback } = useSelector(state => state.values);
  
  useEffect(() => {
    const timestamps = [timestampIt(getDRStart()), timestampIt(getDREnd(), true)]
    dispatcher(fetchMarketData(timestamps[0].toString(), timestamps[1].toString()));
  }, [dispatcher]);
  
  return <Card sx={{backgroundColor: getColor('background'), padding: '1rem', marginTop: '1rem', marginBottom: '1rem'}} >
    <Typography variant='h5' sx={{color: getColorWithAlpha('warn',0.8)}}>BTC market value</Typography>
    <Stack direction='row' spacing={3} sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}} >
      <Typography variant='subtitle1' >Date range: </Typography>
      <Typography variant='body1' >{sanitiseDate(daterange_start)}</Typography>
      <ArrowExpandHorizontal color='special' />
      <Typography variant='body1' >{sanitiseDate(daterange_end)}</Typography>
    </Stack>
    <Typography variant='body1' sx={{color: getColor('warn')}} >Latest: {marketvalues ?? fallback} €</Typography>
  </Card>;
};

export default Insight;

// insight.jsx
// file contains the UI element of received Bitcoin trend data for the BitSights application

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import ArrowExpandHorizontal from 'mdi-material-ui/ArrowExpandHorizontal';

import { getColor, getColorWithAlpha } from '../styles/colors';

import { sanitiseDate } from '../tools/date';
import { fetchBasicData } from '../controllers/redux/slices/basic';
import { fetchMarketData } from '../controllers/redux/slices/value';

const Insight = (props) => {
  const { daterange_start, daterange_end } = useSelector(state => state.dates);
  const dispatcher = useDispatch();
  const { marketvalues, fallback } = useSelector(state => state.values);
  const { basicInfo } = useSelector(state => state.basics);

  useEffect(() => dispatcher(fetchBasicData()), [dispatcher]);

  setTimeout(() => dispatcher(fetchBasicData()), 60000);

  useEffect(() => dispatcher(fetchMarketData()), [dispatcher]);

  const TimeRange = () => {
    return <TableRow >
      <TableCell><Typography variant='subtitle1' >Date range</Typography></TableCell>
      <TableCell><Typography variant='body1' >{sanitiseDate(daterange_start)}</Typography></TableCell>
      <TableCell><Typography variant='body1' >{sanitiseDate(daterange_end)}</Typography></TableCell>
    </TableRow>;
  };

  const TimeRangeData = () => {
    return <Stack direction='column' sx={{marginBottom: '1rem'}} >
      <Table size='small' >
        <TimeRange/>
        <TimeRange/>
      </Table>
    </Stack>;
  };

  const AllTimeHighLow = ({low = false}) => {
    return <TableRow >
      <TableCell><Typography variant='subtitle1' >All-Time {low ? 'Low' : 'High'}</Typography></TableCell>
      <TableCell><Typography variant='body1' >{low ? basicInfo?.market_data?.allTimeLow : basicInfo?.market_data?.allTimeHigh} €</Typography></TableCell>
      <TableCell><Typography variant='body1' >{low ? sanitiseDate(basicInfo?.market_data?.atl_date) : sanitiseDate(basicInfo?.market_data?.ath_date)}</Typography></TableCell>
    </TableRow>
  };

  const BasicData = () => {
    return <Stack direction='column' >
      <Table size='small' >
        <TableRow>
          <TableCell><Typography variant='body1' >Value</Typography></TableCell>
          <TableCell><Typography variant='body1' sx={{color: getColor('warn')}} >{basicInfo?.market_data?.current_price ?? fallback} €</Typography></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Typography variant='subtitle1' >Name</Typography></TableCell>
          <TableCell><Typography variant='body1' >{basicInfo?.name}</Typography></TableCell>
          <TableCell><Typography variant='subtitle1' >Symbol</Typography></TableCell>
          <TableCell><Typography variant='body1' >{basicInfo?.symbol}{basicInfo?.symbol === 'btc' && ', ₿'}</Typography></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Typography variant='subtitle1' >Hashing</Typography></TableCell>
          <TableCell><Typography variant='body1' >{basicInfo?.hashing}</Typography></TableCell>
          <TableCell><Typography variant='subtitle1' >Genesis date</Typography></TableCell>
          <TableCell><Typography variant='body1' >{sanitiseDate(basicInfo?.genesis_date)}</Typography></TableCell>
        </TableRow>
        <AllTimeHighLow />
        <AllTimeHighLow low={true} />
      </Table>
    </Stack>;
  };
  
  return <Card sx={{backgroundColor: getColor('background'), padding: '1rem', marginTop: '1rem', marginBottom: '1rem'}} >
    <Typography variant='h5' sx={{color: getColorWithAlpha('warn',0.8)}}>₿itcoin market value</Typography>
    <TimeRangeData />
    <Typography variant='h5' sx={{color: getColorWithAlpha('warn',0.8)}}>₿itcoin information</Typography>
    <BasicData />
  </Card>;
};

export default Insight;
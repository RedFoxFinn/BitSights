
// insight.jsx
// file contains the UI element of received Bitcoin basic and market value data for the BitSights application

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import ValueChart from './valueChart';

import { getColor, getColorWithAlpha } from '../styles/colors';

import { transmutateValueData, splinterData } from '../tools/marketvalue';
import { transmutateVolumeData } from '../tools/tradingvolume';
import { findLongestDownwardTrend, findLongestUpwardTrend } from '../tools/deepvalueanalytics';
import { sanitiseDate, calculateDateRangeLength, calculateDateDiff } from '../tools/date';

import { fetchBasicData } from '../controllers/redux/slices/basic';
import { fetchMarketData } from '../controllers/redux/slices/value';

// Insight is the component that UI section containing BTC data

const Insight = (props) => {
  const { daterange_start, daterange_end } = useSelector(state => state.dates);
  const dispatcher = useDispatch();
  const { marketvalues, tradingvolumes, fallback } = useSelector(state => state.values);
  const { basicInfo } = useSelector(state => state.basics);

  useEffect(() => dispatcher(fetchBasicData()), [dispatcher]);

  setTimeout(() => dispatcher(fetchBasicData()), 60000);

  useEffect(() => dispatcher(fetchMarketData()), [dispatcher]);

  // DateRange is subcomponent of Insight that displays the starting and ending date for dataset used in the application

  const DateRange = () => {
    return daterange_start && daterange_end
      ? <TableRow >
        <TableCell><Typography variant='subtitle1' >Date range</Typography></TableCell>
        <TableCell><Typography variant='body1' >{sanitiseDate(daterange_start)}</Typography></TableCell>
        <TableCell><Typography variant='body1' >{sanitiseDate(daterange_end)}</Typography></TableCell>
        <TableCell><Typography variant='body1' >{calculateDateRangeLength(daterange_start, daterange_end)} days</Typography></TableCell>
      </TableRow>
      : null;
  };

  // TradingVolumeHighLow is subcomponent that displays the highest/lowest trading volume and date of that value, selection done by using prop 'low', set as `false` by default

  const TradingVolumeHighLow = ({dataset = null, low = false}) => {
    return dataset
      ? <TableRow>
        <TableCell><Typography variant='subtitle1' >{low ? 'Lowest' : 'Highest'} trading volume</Typography></TableCell>
        <TableCell><Typography variant='body1' >{low ? sanitiseDate(dataset[0].datetime) : sanitiseDate(dataset[dataset.length-1].datetime)}</Typography></TableCell>
        <TableCell><Typography variant='body1' >{low ? Math.round((dataset[0].volume + Number.EPSILON)*100)/100 : Math.round((dataset[dataset.length-1].volume + Number.EPSILON)*100)/100} €</Typography></TableCell>
      </TableRow>
      : null;
  };

  // 

  const MarketValueTrendBearishBullish = ({dataset = null, bearish = true}) => {
    return dataset
      ? <React.Fragment>
        <TableRow>
          <TableCell ><Typography variant='subtitle1' sx={{color: getColor(bearish ? 'special' : 'text')}} >Longest {bearish ? 'bearish' : 'bullish'} trend</Typography></TableCell>
          <TableCell><Typography variant='body1' sx={{color: getColor(bearish ? 'special' : 'text')}} >{dataset.length-1} days</Typography></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Typography variant='subtitle1' >{bearish ? 'Bearish' : 'Bullish'} trend start</Typography></TableCell>
          <TableCell><Typography variant='body1' >{sanitiseDate(dataset[0].datetime)}</Typography></TableCell>
          <TableCell><Typography variant='body1' sx={{color: getColor('info')}} >{Math.round((dataset[0].value + Number.EPSILON)*100)/100} €</Typography></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Typography variant='subtitle1' >{bearish ? 'Bearish' : 'Bullish'} trend end</Typography></TableCell>
          <TableCell><Typography variant='body1' >{sanitiseDate(dataset[dataset.length-1].datetime)}</Typography></TableCell>
          <TableCell><Typography variant='body1' sx={{color: getColor(bearish ? 'special' : 'text')}} >{Math.round((dataset[dataset.length-1].value + Number.EPSILON)*100)/100} €</Typography></TableCell>
        </TableRow>
      </React.Fragment>
      : null;
  };

  // AnalysedData is subcomponent that displays the market value data received from the API in a informative form

  const AnalysedData = () => {
    const transmutatedValueDataSet = marketvalues && transmutateValueData(marketvalues);
    const transmutatedVolumeDataSet = tradingvolumes && transmutateVolumeData(tradingvolumes);
    const bearish = marketvalues && findLongestDownwardTrend(transmutatedValueDataSet);
    const bullish = marketvalues && findLongestUpwardTrend(transmutatedValueDataSet);
    console.log(bearish, bullish);
    return transmutatedValueDataSet
      ? <React.Fragment>
        <TableRow>
          <TableCell colSpan={3} >
            <ValueChart data={splinterData(transmutatedValueDataSet)} />
          </TableCell>
        </TableRow>
        <TradingVolumeHighLow dataset={transmutatedVolumeDataSet} low={true} />
        <TradingVolumeHighLow dataset={transmutatedVolumeDataSet} low={false} />
        <MarketValueTrendBearishBullish bearish={true} dataset={bearish} />
        <MarketValueTrendBearishBullish bearish={false} dataset={bullish} />
      </React.Fragment>
      : null;
  };

  // DateRangeData is subcomponent that composes market value data and DateRange subcomponent to informative view in UI

  const DateRangeData = () => {
    return <Stack direction='column' sx={{marginBottom: '1rem'}} >
      <Table size='small' >
        <TableBody>
          <DateRange/>
          <AnalysedData />
        </TableBody>
      </Table>
    </Stack>;
  };

  // AllTimeHighLow is subcomponent that displays either all-time high or low value and date of that value, selection done by prop 'low' which defaults to `false`

  const AllTimeHighLow = ({low = false}) => {
    return basicInfo
      ? <TableRow >
        <TableCell><Typography variant='subtitle1' >All-Time {low ? 'Low' : 'High'}</Typography></TableCell>
        <TableCell><Typography variant='body1' >{low ? sanitiseDate(basicInfo?.market_data?.atl_date) : sanitiseDate(basicInfo?.market_data?.ath_date)}</Typography></TableCell>
        <TableCell><Typography variant='body1' sx={{color: getColor(low ? 'special' : 'text')}} >{low ? basicInfo?.market_data?.allTimeLow : basicInfo?.market_data?.allTimeHigh} €</Typography></TableCell>
      </TableRow>
      : null;
  };

  // BasicData is subcomponent that composes Bitcoin basic data in to one UI section by using subcomponent AllTimeHighLow and data saved into state management (received from API)

  const BasicData = () => {
    return basicInfo
      ? <Stack direction='column' >
        <Table size='small' >
          <TableBody>
            <TableRow>
              <TableCell><Typography variant='body1' >Value</Typography></TableCell>
              <TableCell><Typography variant='body1' sx={{color: getColor('warn')}} >{basicInfo?.market_data?.current_price ?? fallback} €</Typography></TableCell>
              <TableCell><Typography variant='subtitle1' >Name</Typography></TableCell>
              <TableCell><Typography variant='body1' >{basicInfo?.name}</Typography></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Typography variant='subtitle1' >Symbol</Typography></TableCell>
              <TableCell><Typography variant='body1' >{basicInfo?.symbol}{basicInfo?.symbol === 'btc' && ', ₿'}</Typography></TableCell>
              <TableCell><Typography variant='subtitle1' >Hashing</Typography></TableCell>
              <TableCell><Typography variant='body1' >{basicInfo?.hashing}</Typography></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Typography variant='subtitle1' >Genesis date</Typography></TableCell>
              <TableCell><Typography variant='body1' >{sanitiseDate(basicInfo?.genesis_date)}</Typography></TableCell>
            </TableRow>
            <AllTimeHighLow />
            <AllTimeHighLow low={true} />
          </TableBody>
        </Table>
      </Stack>
      : null;
  };
  
  // returned component is a composite of DateRangeData and BasicData subcomponents

  return <Card sx={{backgroundColor: getColor('background'), padding: '1rem', marginTop: '1rem', marginBottom: '1rem'}} >
    <Typography variant='h5' sx={{color: getColorWithAlpha('warn',0.8)}}>₿itcoin market value</Typography>
    <DateRangeData />
    <Typography variant='h5' sx={{color: getColorWithAlpha('warn',0.8)}}>₿itcoin information</Typography>
    <BasicData />
  </Card>;
};

export default Insight;

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

import { generateID } from '../tools/id';

import { getColor, getColorWithAlpha } from '../styles/colors';

import { transmutateValueData, splinterData } from '../tools/marketvalue';
import { transmutateVolumeData } from '../tools/tradingvolume';
import { findLongestDownwardTrend, findLongestUpwardTrend, findBuyingPoint, findSellingPoint } from '../tools/deepvalueanalytics';
import { sanitiseDate, calculateDateRangeLength } from '../tools/date';

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

  const DateRange = ({id}) => {
    return daterange_start && daterange_end
      ? <TableRow id={id} data-testid={id} >
        <TableCell><Typography variant='subtitle1' >Date range</Typography></TableCell>
        <TableCell><Typography variant='body1' >{sanitiseDate(daterange_start)}</Typography></TableCell>
        <TableCell><Typography variant='body1' >{sanitiseDate(daterange_end)}</Typography></TableCell>
        <TableCell><Typography variant='body1' >{calculateDateRangeLength(daterange_start, daterange_end)} days</Typography></TableCell>
      </TableRow>
      : null;
  };

  // ValueHighLow is subcomponent that displays the highest/lowest bitcoin value and date of that value, selection done by using prop 'low', set as `false` by default

  const ValueHighLow = ({dataset = null, low = false, id = 'default'}) => {
    const sorted = dataset.sort((a, b) => a?.value - b?.value);
    console.log(sorted);
    return dataset
      ? <TableRow id={id} data-testid={id} >
        <TableCell><Typography variant='subtitle1' >{low ? 'Lowest' : 'Highest'} value</Typography></TableCell>
        <TableCell><Typography variant='body1' >{low ? sanitiseDate(dataset[0].datetime) : sanitiseDate(dataset[dataset.length-1].datetime)}</Typography></TableCell>
        <TableCell><Typography variant='body1' sx={{color: getColor(low ? 'special' : 'text')}} >{low ? Math.round((dataset[0].value + Number.EPSILON)*100)/100 : Math.round((dataset[dataset.length-1].value + Number.EPSILON)*100)/100} €</Typography></TableCell>
      </TableRow>
      : null;
  };

  // TradingVolumeHighLow is subcomponent that displays the highest/lowest trading volume and date of that value, selection done by using prop 'low', set as `false` by default

  const TradingVolumeHighLow = ({dataset = null, low = false, id = 'default'}) => {
    return dataset
      ? <TableRow id={id} data-testid={id} >
        <TableCell><Typography variant='subtitle1' >{low ? 'Lowest' : 'Highest'} trading volume</Typography></TableCell>
        <TableCell><Typography variant='body1' >{low ? sanitiseDate(dataset[0].datetime) : sanitiseDate(dataset[dataset.length-1].datetime)}</Typography></TableCell>
        <TableCell><Typography variant='body1' >{low ? Math.round((dataset[0].volume + Number.EPSILON)*100)/100 : Math.round((dataset[dataset.length-1].volume + Number.EPSILON)*100)/100} €</Typography></TableCell>
      </TableRow>
      : null;
  };

  // MarketValueTrendBearishBullish is subcomponent that displays the information of longest downward/upward market value trend, selection done by using prop 'bearish', set as `true` by default

  const MarketValueTrendBearishBullish = ({dataset = null, bearish = true, id = 'default'}) => {
    return dataset
      ? <React.Fragment key={id} >
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

  // BuyingSellingRecommendation is subcomponent that shows the recommendations of if and if then when to sell or buy and with what market value

  const BuyingSellingRecommendation = ({datasetBuy = null, datasetSell = null, id = 'default'}) => {
    return <React.Fragment key={id} >
      <TableRow>
        <TableCell><Typography variant='subtitle1' sx={{color: getColorWithAlpha('warn',0.8)}} >Trade recommendations</Typography></TableCell>
      </TableRow>
      {datasetBuy
        ? <TableRow>
          <TableCell><Typography variant='subtitle1' >Buying recommended</Typography></TableCell>
          <TableCell><Typography variant='body1' >{sanitiseDate(datasetBuy?.datetime)}</Typography></TableCell>
          <TableCell><Typography variant='body1' sx={{color: getColor('special')}} >{Math.round((datasetBuy.value + Number.EPSILON)*100)/100} €</Typography></TableCell>
        </TableRow>
        : <TableRow>
          <TableCell><Typography variant='subtitle1' sx={{color: getColor('special')}} >Buying not recommended</Typography></TableCell>
        </TableRow>}
      {datasetSell
        ? <TableRow>
          <TableCell><Typography variant='subtitle1' >Selling recommended</Typography></TableCell>
          <TableCell><Typography variant='body1' >{sanitiseDate(datasetSell?.datetime)}</Typography></TableCell>
          <TableCell><Typography variant='body1' sx={{color: getColor('text')}} >{Math.round((datasetSell?.value + Number.EPSILON)*100)/100} €</Typography></TableCell>
        </TableRow>
        : <TableRow>
          <TableCell><Typography variant='subtitle1' sx={{color: getColor('special')}} >Selling not recommended</Typography></TableCell>
        </TableRow>}
    </React.Fragment>;
  };

  // AnalysedData is subcomponent that displays the market value data received from the API in a informative form

  const AnalysedData = ({id}) => {
    const transmutatedValueDataSet = marketvalues ? transmutateValueData(marketvalues) : null;
    const transmutatedVolumeDataSet = tradingvolumes ? transmutateVolumeData(tradingvolumes) : null;
    const bearish = marketvalues && transmutatedValueDataSet ? findLongestDownwardTrend(transmutatedValueDataSet) : null;
    const bullish = marketvalues && transmutatedValueDataSet ? findLongestUpwardTrend(transmutatedValueDataSet) : null;
    const buyingPoint = marketvalues && transmutatedValueDataSet ? findBuyingPoint(transmutatedValueDataSet) : null;
    const sellingPoint = marketvalues && transmutatedValueDataSet ? findSellingPoint(transmutatedValueDataSet) : null;
    return transmutatedValueDataSet
      ? <React.Fragment key={id} >
        <ValueChart data={splinterData(transmutatedValueDataSet)} id={generateID(id, 'value_chart')} />
        <ValueHighLow dataset={transmutatedValueDataSet} low={true} id={generateID(id, 'value_low')} />
        <ValueHighLow dataset={transmutatedValueDataSet} low={false} id={generateID(id, 'value_high')} />
        <TableRow>
          <TableCell ><Typography variant='subtitle1' sx={{color: getColorWithAlpha('warn',0.8)}} >Trade volume</Typography></TableCell>
        </TableRow>
        <TradingVolumeHighLow dataset={transmutatedVolumeDataSet} low={true} id={generateID(id, 'volume_low')} />
        <TradingVolumeHighLow dataset={transmutatedVolumeDataSet} low={false} id={generateID(id, 'volume_high')} />
        <BuyingSellingRecommendation datasetBuy={buyingPoint} datasetSell={sellingPoint} id={generateID(id, 'trade_recommendations')} />
        <TableRow>
          <TableCell ><Typography variant='subtitle1' sx={{color: getColorWithAlpha('warn',0.8)}} >Market value trend</Typography></TableCell>
        </TableRow>
        <MarketValueTrendBearishBullish bearish={true} dataset={bearish} id={generateID(id, 'trend_bearish')} />
        <MarketValueTrendBearishBullish bearish={false} dataset={bullish} id={generateID(id, 'trend_bullish')} />
      </React.Fragment>
      : null;
  };

  // DateRangeData is subcomponent that composes market value data and DateRange subcomponent to informative view in UI

  const DateRangeData = ({id = 'default'}) => {
    return <Stack direction='column' sx={{margin: '0 1rem'}} id={id} data-testid={id} >
      <Table size='small' >
        <TableBody>
          <DateRange id={generateID(id, 'date_range')} />
          <AnalysedData id={generateID(id, 'analysed_data')} />
        </TableBody>
      </Table>
    </Stack>;
  };

  // AllTimeHighLow is subcomponent that displays either all-time high or low value and date of that value, selection done by prop 'low' which defaults to `false`

  const AllTimeHighLow = ({low, id = 'default'}) => {
    return basicInfo
      ? <TableRow id={id} data-testid={id} >
        <TableCell><Typography variant='subtitle1' >All-Time {low ? 'Low' : 'High'}</Typography></TableCell>
        <TableCell><Typography variant='body1' >{low ? sanitiseDate(basicInfo?.market_data?.atl_date) : sanitiseDate(basicInfo?.market_data?.ath_date)}</Typography></TableCell>
        <TableCell><Typography variant='body1' sx={{color: getColor(low ? 'special' : 'text')}} >{low ? basicInfo?.market_data?.allTimeLow : basicInfo?.market_data?.allTimeHigh} €</Typography></TableCell>
      </TableRow>
      : null;
  };

  // BasicData is subcomponent that composes Bitcoin basic data in to one UI section by using subcomponent AllTimeHighLow and data saved into state management (received from API)

  const BasicData = ({id = 'default'}) => {
    return basicInfo
      ? <Stack direction='column' sx={{margin: '0 1rem'}} id={id} data-testid={id} >
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
            <AllTimeHighLow id={generateID(id, 'athl_high')} />
            <AllTimeHighLow low={true} id={generateID(id, 'athl_low')} />
          </TableBody>
        </Table>
      </Stack>
      : null;
  };

  // returned component is a composite of DateRangeData and BasicData subcomponents

  return <section id={props.id} data-testid={props.id} >
    <Card sx={{backgroundColor: getColor('background'), padding: '1rem', margin: '1rem'}} >
      <Typography variant='h5' sx={{color: getColorWithAlpha('warn',0.8), margin: '0 1rem'}}>₿itcoin market value</Typography>
      <DateRangeData id={generateID(props.id, 'ranged_data')} />
    </Card>
    <Card sx={{backgroundColor: getColor('background'), padding: '1rem', margin: '1rem'}} >
      <Typography variant='h5' sx={{color: getColorWithAlpha('warn',0.8), margin: '0 1rem'}}>₿itcoin information</Typography>
      <BasicData id={generateID(props.id, 'basic_data')}/>
    </Card>
  </section>;
};

export default Insight;
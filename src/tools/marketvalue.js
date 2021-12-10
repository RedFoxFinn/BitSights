
// marketvalue.js
// toolset for mangling market value data received from the coingecko.com API for more suitable form

import { getDRStart, getDREnd } from '../controllers/app/daterange';
import { timestampIt, calculateDateDiff, incrementByDays, sanitiseDate, createDate } from './date';

import { getColorWithAlpha } from '../styles/colors';

// transmutateValueData converts array of array to array of objects:
// [[datetime (milliseconds), market value (euros)]] => [{datetime (seconds), value (euros)}]

export const transmutateValueData = (marketvalueData = [], transmutateOnly = false) => {
  const transmutated = marketvalueData.map((dataPair) => ({datetime: Math.floor(dataPair[0]/1000), value: dataPair[1]}));
  return transmutateOnly ? transmutated : sortValueData(transmutated);
};

// sortData sorts transmutated array of data by the datetime (seconds) from earliest to latest

export const sortValueData = (data = [], sortOnly = false) => {
  const sorted = data.sort((a,b) => a.datetime - b.datetime);
  return sortOnly ? sorted : filterValueData(sorted);
};

// getClosest is internal and not exported tool function to get from array the object that has closest datetime value to desired one (start, end or any from middle; these are UTC midnight values)

const getClosest = (data, target) => data.reduce((a, b) => Math.abs(target - a?.datetime) > Math.abs(target - b?.datetime) ? b : a);

// filterData builds an array of UTC midnight timestamps and then by using these values and getClosest tool function creates filtered array of {datetime, value} which it will return at the end

export const filterValueData = (data = []) => {
  const start = createDate(getDRStart());
  const end = createDate(getDREnd());
  const increments = calculateDateDiff(start, end);
  let dates = [];
  let filtered = [];
  dates.push(timestampIt(start,false,true));
  if (increments > 1) {
    for (let i = 1; i < increments; i++) {
      dates.push(timestampIt(incrementByDays(start,i),false,true));
    }
  }
  dates.push(timestampIt(end,false,true));
  dates.forEach((stamp) => {
    filtered.push(getClosest(data, stamp));
  });
  return filtered.map(({datetime, value}, index) => ({datetime: datetime*1000, value: value, index: index}));
};

// splinterData tool function forms chart usable data from given data set

export const splinterData = (data = []) => {
  let labels = [];
  const dataset = {
    id: 1,
    label: '₿TC, €',
    data: [],
    borderColor: getColorWithAlpha('warn',0.8),
    backgroundColor: getColorWithAlpha('warn',0.6)
  };
  data.forEach(({datetime, value}) => {
    labels.push(sanitiseDate(datetime));
    dataset.data.push(value);
  });
  const splinteredData = {
    labels: labels,
    datasets: [dataset]
  };

  return splinteredData;
};
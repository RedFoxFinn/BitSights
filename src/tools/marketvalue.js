
// marketvalue.js
// toolset for mangling market value data received from the coingecko.com API for more suitable form

import { getDRStart, getDREnd } from '../controllers/app/daterange';
import { timestampIt, calculateDateDiff, incrementByDays, sanitiseDate } from './date';

import { getColorWithAlpha } from '../styles/colors';

// transmutateData converts array of array to array of objects:
// [[datetime (milliseconds), market value (euros)]] => [{datetime (seconds), value (euros)}]

export const transmutateData = (marketvalueData = [], transmutateOnly = false) => {
  const transmutated = marketvalueData.map((dataPair) => ({datetime: Math.floor(dataPair[0]/1000), value: dataPair[1]}));
  return transmutateOnly ? transmutated : sortData(transmutated);
};

// sortData sorts transmutated array of data by the datetime (seconds) from earliest to latest

export const sortData = (data = [], sortOnly = false) => {
  const sorted = data.sort((a,b) => a.datetime - b.datetime);
  return sortOnly ? sorted : filterData(sorted);
};

// getClosest is internal and not exported tool function to get from array the object that has closest datetime value to desired one (start, end or any from middle; these are UTC midnight values)

const getClosest = (data, target) => data.reduce((a, b) => Math.abs(target - b.datetime) < Math.abs(target - a.datetime) ? b : a);

// filterData builds an array of UTC midnight timestamps and then by using these values and getClosest tool function creates filtered array of {datetime, value} which it will return at the end

export const filterData = (data = []) => {
  const start = getDRStart();
  const end = getDREnd();
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
  return filtered;
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
    labels.push(sanitiseDate(datetime*1000));
    dataset.data.push(value);
  });
  const splinteredData = {
    labels: labels,
    datasets: [dataset]
  };
  return splinteredData;
};

// trading.js
// toolset for mangling market value data received from the coingecko.com API for more suitable form

import { getDRStart, getDREnd } from '../controllers/app/daterange';
import { timestampIt, calculateDateDiff, incrementByDays } from './date';

import { getColorWithAlpha } from '../styles/colors';

// transmutateVolumeData converts array of array to array of objects:
// [[datetime (milliseconds), trading volume (euros)]] => [{datetime (seconds), volume (euros)}]

export const transmutateVolumeData = (tradingvolumeData = [], transmutateOnly = false) => {
  const transmutated = tradingvolumeData.map((dataPair) => ({datetime: Math.floor(dataPair[0]/1000), volume: dataPair[1]}));
  return transmutateOnly ? transmutated : filterVolumeData(transmutated);
};

// getClosest is internal and not exported tool function to get from array the object that has closest datetime value to desired one (start, end or any from middle; these are UTC midnight values)

const getClosest = (data, target) => data.reduce((a, b) => Math.abs(target - b.datetime) < Math.abs(target - a.datetime) ? b : a);

// filterData builds an array of UTC midnight timestamps and then by using these values and getClosest tool function creates filtered array of {datetime, volume} which it will return at the end

export const filterVolumeData = (data = [], filterOnly = false) => {
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
  return filterOnly ? filtered : sortVolumeData(filtered);
};

// sortVolumeData sorts transmutated array of data by the trading volume (volume) from lowest to highest

export const sortVolumeData = (data = []) => {
  const sorted = data.sort((a,b) => a.volume - b.volume);
  return sorted.map(({datetime, volume}) => ({datetime: datetime*1000, volume}));
};
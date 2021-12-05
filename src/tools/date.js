
// date.js
// tool to create and manipulate dates for BitSights app

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

// date limitations for date range

const dateLowerLimit = dayjs('2013-05-01');
let dateUpperLimit;

// tool function to convert date to UNIX timestamp (seconds)

export const timestampIt = (date = new Date(), end = false, midnight = false) => {
  const timestampDate = midnight
    ? dayjs.utc(date).hour(0).minute(0).second(0).millisecond(0)
    : end
      ? dayjs.utc(date).add(1, 'hour')
      : dayjs.utc(date).subtract(1, 'hour');
  return timestampDate.unix();
};

// tool to calculate date difference

export const calculateDateDiff = (start, end) => {
  return dayjs.utc(end).diff(dayjs.utc(start), 'day');
};

// tool to calculate date range length

export const calculateDateRangeLength = (start, end) => {
  return calculateDateDiff(start, end) +1;
};

// tool to add days to date (one by default)

export const incrementByDays = (date = new Date(), howMany = 1, format = false) => {
  dateUpperLimit = dayjs.utc(new Date());
  const incremented = dayjs.utc(date).add(howMany, 'day');
  if (incremented.diff(dateUpperLimit, 'day') <= 0 && dayjs.utc(date).diff(dateLowerLimit, 'day') >= 0) {
    return format ? incremented.format('YYYY-MM-DD') : incremented;
  } else {
    return null;
  }
};

// tool function to sanitise date in to human readable format

export const sanitiseDate = (date = new Date()) => {
  return dayjs.utc(date).hour(0).minute(0).second(0).millisecond(0).format('YYYY-MM-DD');
};

// tool function to decrement date by one week

export const decrementByWeek = (date = new Date(), format = false) => {
  dateUpperLimit = dayjs.utc(new Date());
  const decremented = dayjs.utc(date).hour(0).minute(0).second(0).millisecond(0).subtract(7, 'day');
  if (decremented.diff(dateLowerLimit, 'day') >= 0 && dayjs.utc(date).diff(dateUpperLimit, 'day') <= 0) {
    return format ? decremented.format('YYYY-MM-DD') : decremented;
  } else {
    return null;
  }
};

// tool function to increment date by one week

export const incrementByWeek = (date = new Date(), format = false) => {
  dateUpperLimit = dayjs.utc(new Date());
  const incremented = dayjs.utc(date).hour(0).minute(0).second(0).millisecond(0).add(7, 'day');
  if (incremented.diff(dateUpperLimit, 'day') <= 0 && dayjs.utc(date).diff(dateLowerLimit, 'day') >= 0) {
    return format ? incremented.format('YYYY-MM-DD') : incremented;
  } else {
    return null;
  }
};

// tool function to create date

export const createDate = (date = new Date(), format = false) => {
  dateUpperLimit = dayjs.utc(new Date());
  if (dayjs.utc(date).diff(dateLowerLimit, 'day') >= 0 && dayjs.utc(date).diff(dateUpperLimit, 'day') <= 0) {
    return format ? dayjs.utc(date).hour(0).minute(0).second(0).millisecond(0).format('YYYY-MM-DD') : dayjs.utc(date).hour(0).minute(0).second(0).millisecond(0);
  } else {
    return null;
  }
};
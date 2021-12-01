
// date.js
// tool to create and manipulate dates for BitSights app

import dayjs from 'dayjs';

// date limitations for date range

const dateLowerLimit = dayjs('2013-05-01');
const dateUpperLimit = dayjs(new Date());

// tool function to sanitise date in to human readable format

export const sanitiseDate = (date = new Date()) => {
  return dayjs(date).format('YYYY-MM-DD');
};

// tool function to decrement date by one week

export const decrementByWeek = (date = new Date(), format = false) => {
  const decremented = dayjs(date).subtract(7, 'day');
  if (decremented.diff(dateLowerLimit, 'day') >= 0 && dayjs(date).diff(dateUpperLimit, 'day') <= 0) {
    console.log('valid');
    return format ? decremented.format('YYYY-MM-DD') : decremented;
  } else {
    console.log('invalid');
    return null;
  }
};

// tool function to increment date by one week

export const incrementByWeek = (date = new Date(), format = false) => {
  const incremented = dayjs(date).add(7, 'day');
  if (incremented.diff(dateUpperLimit, 'day') <= 0 && dayjs(date).diff(dateLowerLimit, 'day') >= 0) {
    console.log('valid');
    return format ? incremented.format('YYYY-MM-DD') : incremented;
  } else {
    console.log('invalid');
    return null;
  }
};

// tool function to create date

export const createDate = (date = new Date(), format = false) => {
  if (dayjs(date).diff(dateLowerLimit, 'day') >= 0 && dayjs(date).diff(dateUpperLimit, 'day') <= 0) {
    console.log('valid');
    return format ? dayjs(date).format('YYYY-MM-DD') : dayjs(date);
  } else {
    console.log('invalid');
    return null;
  }
};
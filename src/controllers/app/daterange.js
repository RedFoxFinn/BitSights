
// daterange.js
// BitSights internal tool to handle set dates within localstorage

import { APPID } from '../../tools/info';

// getters

export const getDRStart = () => {
  return JSON.parse(localStorage.getItem(`${APPID()}.drstart`)) ?? null;
};

export const getDREnd = () => {
  return JSON.parse(localStorage.getItem(`${APPID()}.drend`)) ?? null;
};

// setters

export const setDRStart = (date = null) => {
  date !== null
    ? localStorage.setItem(`${APPID()}.drstart`, JSON.stringify(date))
    : localStorage.setItem(`${APPID()}.drstart`, JSON.stringify(null));
};

export const setDREnd = (date = null) => {
  date !== null
    ? localStorage.setItem(`${APPID()}.drend`, JSON.stringify(date))
    : localStorage.setItem(`${APPID()}.drend`, JSON.stringify(null));
};
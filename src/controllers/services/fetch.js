
// 
// 

import axios from 'axios';

import { timestampIt } from '../../tools/date';
import { getDRStart, getDREnd } from '../app/daterange';

const baseUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin';

const basicDataUrlAdditive = '?localization=false&tickers=false';

const marketUrlAdditive = '/market_chart/range?';

const currencyUrlAdditive = 'vs_currency=eur';

export const getBitcoinBasic = async () => {
  const response = await axios.get(`${baseUrl}${basicDataUrlAdditive}`);
  const {
    categories,
    genesis_date,
    hashing_algorithm,
    id,
    market_data,
    name,
    symbol
  } = response?.data;
  const {
    ath, ath_date, atl, atl_date,
    current_price,
    last_updated
  } = market_data;
  const basics = {
    categories: categories,
    genesis_date: genesis_date,
    hashing: hashing_algorithm,
    id: id,
    name: name,
    symbol: symbol,
    market_data: {
      allTimeHigh: ath.eur,
      ath_date: ath_date.eur,
      allTimeLow: atl.eur,
      atl_date: atl_date.eur,
      current_price: current_price.eur,
      updated: last_updated
    }
  };
  return basics ?? null;
};

export const getBitcoinMarket = async () => {
  const start = timestampIt(getDRStart(), false, false);
  const end = timestampIt(getDREnd(), true, false);
  const response = await axios.get(`${baseUrl}${marketUrlAdditive}${currencyUrlAdditive}&from=${start}&to=${end}`);
  return response?.data ?? null;
};
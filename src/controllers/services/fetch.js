
// 
// 

import axios from 'axios';
import { createDate } from '../../tools/date';

const baseUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin';

const basicDataUrlAdditive = '?localization=false&tickers=false';

const marketUrlAdditive = '/market_chart/range?';

const currencyUrlAdditive = 'vs_currency=eur';

const daterangeUrlAdditive = (start, end) => {
  return `&from=${start}&to=${end}`;
};

export const getBitcoinBasic = async () => await axios.get(`${baseUrl}${basicDataUrlAdditive}`).then(({data}) => {
  const {
    categories,
    genesis_date,
    hashing_algorithm,
    id,
    market_data,
    name,
    symbol
  } = data;
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
  //console.log(basics);
  return basics ?? null;
});

export const getBitcoinMarket = async (start, end) => await axios.get(`${baseUrl}${marketUrlAdditive}${currencyUrlAdditive}${daterangeUrlAdditive(start, end)}`).then(({data}) => {
  const {prices} = data;
  const marketvalues = prices.map((mv) => {
    return {time: mv[0], price: mv[1]};
  });
  //console.log(marketvalues);
  return marketvalues ?? null;
});
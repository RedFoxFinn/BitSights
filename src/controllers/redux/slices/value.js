
// 
// 

import { createSlice } from '@reduxjs/toolkit';

import { timestampIt } from '../../../tools/date';
import { getBitcoinMarket } from '../../services/fetch';

export const valueSlice = createSlice({
  name: 'values',
  initialState: {
    marketvalues: null,
    fallback: -0
  },
  reducers: {
    SET_MARKETVALUES: (state, action) => {
      state.marketvalues = action.payload;
    },
    RESET_MARKETVALUES: (state, action) => {
      state.marketvalues = null;
    }, 
  }
});

export const { SET_MARKETVALUES, RESET_MARKETVALUES } = valueSlice.actions;

export const set_marketvalues = async (startdate, enddate) => {
  const marketvalues = await getBitcoinMarket(timestampIt(startdate), timestampIt(enddate));
  return {
    type: 'values/SET_MARKETVALUES',
    payload: marketvalues
  };
};

export const reset_marketvalues = () => {
  return {
    type: 'values/RESET_MARKETVALUES'
  };
};

export default valueSlice.reducer;

// 
// 

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getBitcoinMarket } from '../../services/fetch';

export const fetchMarketData = createAsyncThunk(
  'values/fetchMarketData',
  async (thunkAPI) => {
    const market_data = await getBitcoinMarket();
    return market_data ?? null;
  });

export const valueSlice = createSlice({
  name: 'values',
  initialState: {
    marketvalues: null,
    tradingvolumes: null,
    fallback: -0
  },
  reducers: {
    SET_MARKETVALUES: (state, action) => {
      state.marketvalues = action.payload;
    },
    RESET_MARKETVALUES: (state, action) => {
      state.marketvalues = null;
    },
  },
  extraReducers: {
    [fetchMarketData.pending]: (state) => {
      state.loading = true;
    },
    [fetchMarketData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.marketvalues = payload.prices;
      state.tradingvolumes = payload.total_volumes;
    },
    [fetchMarketData.rejected]: (state) => {
      state.loading = false;
    }
  }
});

export const { SET_MARKETVALUES, RESET_MARKETVALUES } = valueSlice.actions;

export default valueSlice.reducer;
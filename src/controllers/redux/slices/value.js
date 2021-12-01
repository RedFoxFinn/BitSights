
// 
// 

import { createSlice } from '@reduxjs/toolkit';

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

export const set_marketvalues = (marketvalues) => {
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
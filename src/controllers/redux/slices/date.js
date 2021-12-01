
// 
// 

import { createSlice } from '@reduxjs/toolkit';

export const dateSlice = createSlice({
  name: 'dates',
  initialState: {
    daterange_start: null,
    daterange_end: null
  },
  reducers: {
    SET_DATERANGE_START: (state, action) => {
      state.daterange_start = action.payload;
    },
    RESET_DATERANGE_START: (state, action) => {
      state.daterange_start = null;
    },
    SET_DATERANGE_END: (state, action) => {
      state.daterange_end = action.payload;
    },
    RESET_DATERANGE_END: (state, action) => {
      state.daterange_end = null;
    } 
  }
});

export const { SET_DATERANGE_START, RESET_DATERANGE_START, SET_DATERANGE_END, RESET_DATERANGE_END } = dateSlice.actions;

export const set_dr_start = (startdate) => {
  return {
    type: 'dates/SET_DATERANGE_START',
    payload: startdate
  };
};

export const set_dr_end = (enddate) => {
  return {
    type: 'dates/SET_DATERANGE_END',
    payload: enddate
  };
};

export const reset_dr_start = () => {
  return {
    type: 'dates/RESET_DATERANGE_START'
  };
};

export const reset_dr_end = () => {
  return {
    type: 'dates/RESET_DATERANGE_END'
  };
};

export default dateSlice.reducer;

// store.js
// BitSights global state lies in here

import { configureStore } from '@reduxjs/toolkit';

import dateSlice from './slices/date';
import valueSlice from './slices/value';
import basicSlice from './slices/basic';

export const store = configureStore({
  reducer: {
    basics: basicSlice,
    dates: dateSlice,
    values: valueSlice
  }
});
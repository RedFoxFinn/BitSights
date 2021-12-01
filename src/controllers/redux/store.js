
// store.js
// BitSights global state lies in here

import { configureStore } from '@reduxjs/toolkit';

import dateSlice from './slices/date';
import valueSlice from './slices/value';

export const store = configureStore({
  reducer: {
    dates: dateSlice,
    values: valueSlice
  }
});
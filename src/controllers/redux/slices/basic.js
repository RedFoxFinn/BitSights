
// 
// 

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getBitcoinBasic } from '../../services/fetch';

export const fetchBasicData = createAsyncThunk(
  'basics/fetchBasicData',
  async (thunkAPI) => {
    const data = await getBitcoinBasic();
    return data ?? null;
  });

export const basicSlice = createSlice({
  name: 'basics',
  initialState: {
    basicInfo: null,
    loading: false
  },
  reducers: {
    SET_BASICINFO: (state, action) => {
      state.basicInfo = action.payload;
    },
    RESET_BASICINFO: (state, action) => {
      state.basicInfo = null;
    }, 
  },
  extraReducers: {
    [fetchBasicData.pending]: (state) => {
      state.loading = true;
    },
    [fetchBasicData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.basicInfo = payload;
    },
    [fetchBasicData.rejected]: (state) => {
      state.loading = false;
    }
  }
});

export const { SET_MARKETVALUES, RESET_MARKETVALUES } = basicSlice.actions;

export default basicSlice.reducer;
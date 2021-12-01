
//
//

import React, { } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { set_dr_start, set_dr_end, reset_dr_start, reset_dr_end } from '../controllers/redux/slices/date';
import { getColor, getColorWithAlpha } from '../styles/colors';

const DateRange = ({id}) => {
  const dates = useSelector(state => state.dates);
  const dispatch = useDispatch();
  return <section style={{display: 'flex', flexDirection: 'row', justifyItems: 'space-evenly'}} >
    <StartDate dispatcher={dispatch} value={dates?.daterange_start} />
    <EndDate dispatcher={dispatch} value={dates?.daterange_end} />
  </section>;
};

const StartDate = ({dispatcher, value}) => {

  const handleDateChange = (newValue) => {
    dispatcher(set_dr_start(newValue))
  };

  return <LocalizationProvider dateAdapter={DateAdapter}>
    <DatePicker
      sx={{
        padding: '1rem'
      }}
      color={value !== null ? 'success' : 'info'}
      label='Date range start'
      value={value}
      onChange={(newValue) => handleDateChange(newValue)}
      inputFormat='YYYY-MM-DD'
      mask='____-__-__'
      renderInput={(params) => <TextField {...params} size='small' color={value !== null ? 'success' : 'info' } sx={{'&:hover:selected': {outlineColor: 'success'}}} />}
    />
  </LocalizationProvider>;
};

const EndDate = ({dispatcher, value}) => {

  const handleDateChange = (newValue) => {
    dispatcher(set_dr_end(newValue))
  };

  return <LocalizationProvider dateAdapter={DateAdapter}>
    <DatePicker
      sx={{
        padding: '1rem'
      }}
      color={value !== null ? 'success' : 'info'}
      label='Date range end'
      value={value}
      onChange={(newValue) => handleDateChange(newValue)}
      inputFormat='YYYY-MM-DD'
      mask='____-__-__'
      renderInput={(params) => <TextField {...params} size='small' color={value !== null ? 'success' : 'info'} />}
    />
  </LocalizationProvider>;
};

export default DateRange;
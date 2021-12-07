
// dateInput.jsx
// component and subcomponents for the UI, date range selector of the application

import React, { } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { fetchMarketData } from '../controllers/redux/slices/value';
import { set_dr_start, set_dr_end } from '../controllers/redux/slices/date';
import { getColor } from '../styles/colors';

// DateRange is component for user to set date range for the application

const DateRange = ({id}) => {
  const dates = useSelector(state => state.dates);
  const dispatch = useDispatch();
  return <Card sx={{backgroundColor: getColor('background'), padding: '1rem'}} >
    <Table>
      <TableBody>
        <TableRow>
          <StartDate dispatcher={dispatch} value={dates?.daterange_start} />
          <EndDate dispatcher={dispatch} value={dates?.daterange_end} />
        </TableRow>
      </TableBody>
    </Table>
  </Card>;
};

// StartDate is subcomponent that forms the date selection tool for DateRange

const StartDate = ({dispatcher, value}) => {

  const handleDateChange = (newValue) => {
    dispatcher(set_dr_start(newValue));
    dispatcher(fetchMarketData());
  };

  return <TableCell>
    <LocalizationProvider dateAdapter={DateAdapter}>
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
    </LocalizationProvider>
  </TableCell>;
};

// EndDate is subcomponent that forms the date selection tool for DateRange

const EndDate = ({dispatcher, value}) => {

  const handleDateChange = (newValue) => {
    dispatcher(set_dr_end(newValue));
    dispatcher(fetchMarketData());
  };

  return <TableCell>
    <LocalizationProvider dateAdapter={DateAdapter}>
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
    </LocalizationProvider>
  </TableCell>;
};

export default DateRange;
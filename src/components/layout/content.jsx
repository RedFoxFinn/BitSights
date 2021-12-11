
// content.jsx
// file provides view of content for the BitSights application

import React from 'react';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

import { generateID } from '../../tools/id';
import DateRange from '../dateInput';
import Insight from '../insight';

const Content = ({id}) => {
  const { daterange_start, daterange_end } = useSelector(state => state.dates);
  return <Stack id={id} data-testid={id} direction='column' spacing={2} sx={{margin: '1rem'}} >
    <DateRange id={generateID(id, 'daterange')} />
    {daterange_start && daterange_end && <Insight id={generateID(id, 'insight')} />}
  </Stack>;
};

export default Content;
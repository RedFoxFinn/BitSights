
// content.jsx
// file provides view of content for the BitSights application

import React, {  } from 'react';
import { } from 'react-redux';
import Stack from '@mui/material/Stack';

import { generateID } from '../../tools/id';
import DateRange from '../dateInput';
import Insight from '../insight';

const Content = ({id}) => {
  return <Stack id={id} data-testid={id} direction='column' spacing={2} sx={{marginTop: '1rem', marginBottom: '1rem'}} >
    <DateRange id={generateID(id, 'daterange')} />
    <Insight id={generateID(id, 'insight')} />
  </Stack>;
};

export default Content;
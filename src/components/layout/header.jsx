
// header.jsx
// file provides header for the BitSights application

import React, {  } from 'react';
import Typography from '@mui/material/Typography';

import { getColor } from '../../styles/colors';

const Header = ({id}) => {
  return <header id={id} data-testid={id} style={{display: 'inline-flex', textAlign: 'center', justifyContent: 'center'}} >
    <Typography variant='overline' sx={{fontSize: '1rem', color: getColor('special')}} >BitSights application header</Typography>
  </header>;
};

export default Header;
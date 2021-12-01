
// footer.jsx
// file provides footer for the BitSights application

import React, {  } from 'react';
import Typography from '@mui/material/Typography';

import { getColorWithAlpha } from '../../styles/colors';

const Footer = ({id}) => {
  return <footer id={id} data-testid={id} style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}} >
    <Typography variant='overline' sx={{fontSize: '0.7rem', color: getColorWithAlpha('text',0.5)}} >BitSights application footer</Typography>
  </footer>;
};

export default Footer;
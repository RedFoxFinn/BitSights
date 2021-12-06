
// footer.jsx
// file provides footer for the BitSights application

import React, {  } from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { getColorWithAlpha } from '../../styles/colors';
import { VERSION } from '../../tools/info';

const Footer = ({id}) => {
  return <footer id={id} data-testid={id} style={{display: 'inline-flex', alignItems: 'baseline', justifyContent: 'center', justifyItems: 'center'}} >
    <Typography variant='overline' sx={{fontSize: '0.7rem', color: getColorWithAlpha('text',0.5)}} >Version {VERSION()}</Typography>
    <Link underline='hover' href='https://github.com/RedFoxFinn/BitSights' sx={{marginLeft: '1rem', color: getColorWithAlpha('special', 0.5)}} >
      <Typography variant='overline' sx={{fontSize: '0.7rem'}} >Repository</Typography>
    </Link>
    <Link underline='hover' href='https://github.com/RedFoxFinn' sx={{marginLeft: '1rem', color: getColorWithAlpha('special', 0.5)}} >
      <Typography variant='overline' sx={{fontSize: '0.7rem'}} >Author</Typography>
    </Link>
  </footer>;
};

export default Footer;
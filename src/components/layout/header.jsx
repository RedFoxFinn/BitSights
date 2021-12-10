
// header.jsx
// file provides header for the BitSights application

import React, {  } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

import { getColor } from '../../styles/colors';

const Header = ({id}) => {
  const basic = useSelector(state => state.basics);
  const value = useSelector(state => state.values);

  function renderIt() {
    return basic.loading || value.loading ? true : false;
  }

  return <header id={id} data-testid={id} style={{
    display: 'inline-flex',
    textAlign: 'center',
    justifyItems: 'center',
    alignItems: 'center'
  }} >
    <Typography variant='h1' title='₿itcoint market value analytics' sx={{fontSize: '1.5rem', color: getColor('special')}} >₿itSights</Typography>
    {renderIt() && <Typography variant='overline' sx={{marginLeft: '1rem', color: getColor('text')}} >[LOADING..]</Typography>}
  </header>;
};

export default Header;
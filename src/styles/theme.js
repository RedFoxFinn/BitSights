
import { createTheme } from '@mui/material/styles';

import { getColorWithAlpha, getColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: `${getColor()}`
    },
    secondary: {
      main: `${getColor('header')}`
    },
    info: {
      main: `${getColor('info')}`
    },
    error: {
      main: `${getColor('err')}`
    },
    warning: {
      main: `${getColor('warn')}`
    },
    success: {
      main: `${getColor('text')}`
    },
    special: {
      main: `${getColor('special')}`
    },
    background: {
      main: `${getColor('background')}`
    }
  }
});

export default theme;
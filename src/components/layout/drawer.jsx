import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CachedIcon from '@mui/icons-material/Cached';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { getColor, getColorWithAlpha } from '../../styles/colors';
import '../../styles/pulse.css';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  backgroundColor: getColor('background'),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(5)} + 1px)`,
  backgroundColor: getColor('background'),
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export const MiniDrawer = ({id = 'drawer.default', elements = ['BitSights', 'UpToDate', 'Status', 'default']}) => {
  return <Drawer variant='permanent' open={false} id={id} data-testid={id} >
    <List sx={{backgroundColor: getColor('background')}} >
      {elements.map((text, index) => {
        switch (text) {
          case 'BitSights': return <ListItem key={text} sx={{backgroundColor: getColor('background')}} >
            <ListItemText sx={{color: getColor('special'), transform: 'rotate(-90deg)', marginTop: '2.5rem', textDecoration: 'underline'}} >
              {text}
            </ListItemText>
          </ListItem>;
          case 'Status': return <ListItem key={text} sx={{backgroundColor: getColor('background')}} >
            <Avatar className='ringring load' sx={{backgroundColor: 'transparent'}} >
              <CachedIcon sx={{color: getColorWithAlpha('text',0.5)}} />
            </Avatar>
          </ListItem>;
          case 'UpToDate': return <ListItem key={text} sx={{backgroundColor: getColor('background')}} >
            <ListItemIcon sx={{backgroundColor: 'transparent'}} >
              <CheckCircleOutlineIcon sx={{color: getColor('text'), paddingLeft: '0.1rem'}} />
            </ListItemIcon>
          </ListItem>;
          default: return <ListItem key={'default'} sx={{backgroundColor: getColor('background')}} >
            <Avatar className='ringring warn' sx={{backgroundColor: 'transparent'}} >
              <RunningWithErrorsIcon sx={{color: getColorWithAlpha('warn',0.5)}} />
            </Avatar>
          </ListItem>;
        }
      })}
    </List>
  </Drawer>;
};

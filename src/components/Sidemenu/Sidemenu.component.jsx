import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';

import { useSidemenu } from '../../providers/Sidemenu';
import { useAuth } from '../../providers/Auth';

import { MENU_ITEMS } from '../../utils/constants';

const useStyles = makeStyles(theme => ({
  root: {
    width: 260,
  },
  list: {
    paddingTop: 0,
  },
  title: {
    height: theme.spacing(8),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    marginBottom: theme.spacing(2),
  },
  icon: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  item: {
    paddingTop: theme.spacing(1.6),
    paddingBottom: theme.spacing(1.6),
  },
}));

function Sidemenu() {
  const classes = useStyles();
  const { authenticated } = useAuth();
  const { open, toggleDrawer } = useSidemenu();

  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      <div
        className={classes.root}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List className={classes.list}>
          <ListItem className={classes.title} button onClick={toggleDrawer(true)} >
            <ListItemIcon className={classes.icon}>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ variant: 'h6' }} primary='WizeTube' />
          </ListItem>
          {MENU_ITEMS.map(({ text, Icon, to, requiresAuth }, index) => (
            requiresAuth && !authenticated
              ? (
                <Fragment key={index} />
              )
              : (
                <ListItem className={classes.item} button key={text} component={RouterLink} to={to}>
                  <ListItemIcon><Icon /></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
          ))}
        </List>
      </div>
    </Drawer>
  );
}

export default Sidemenu;
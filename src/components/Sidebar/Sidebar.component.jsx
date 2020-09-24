import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import BarItem from './BarItem.component';

import { useAuth } from '../../providers/Auth';

import { MENU_ITEMS } from '../../utils/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: theme.spacing(10),
    height: '100vh',
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(8),
    position: 'fixed',
  },
}));

function SimpleList() {
  const classes = useStyles();
  const { authenticated } = useAuth();

  return (
    <div className={classes.root}>
      <List component="nav">
        {MENU_ITEMS.map(({ text, Icon, to, requiresAuth }, i) => (
          requiresAuth && !authenticated
            ? (
              <Fragment key={i} />
            )
            : (
              <BarItem text={text} to={to} key={i}>
                <Icon />
              </BarItem>
            )
        ))}
      </List>
    </div >
  );
}

export default SimpleList;
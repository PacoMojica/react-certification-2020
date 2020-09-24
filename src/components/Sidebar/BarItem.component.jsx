import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  barItem: {
    paddingTop: theme.spacing(1.6),
    paddingBottom: theme.spacing(1.6),
  },
  icon: {
    textAlign: 'center',
    color: theme.palette.grey[600],
  },
}));


function BarItem({ text, to, children }) {
  const classes = useStyles();

  return (
    <Tooltip title={text} placement='right'>
      <ListItem button className={classes.barItem} component={RouterLink} to={to}>
        <ListItemText className={classes.icon} >
          {children}
        </ListItemText>
      </ListItem>
    </Tooltip>
  );
}

export default BarItem;
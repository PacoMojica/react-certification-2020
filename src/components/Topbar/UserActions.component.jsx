import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';

import { useAuth } from '../../providers/Auth';
import { useFeedback } from '../../providers/Feedback';

import { useStyles } from '../../providers/Styles';

function UserActions() {
  const { classes } = useStyles();
  const history = useHistory();
  const { authenticated, logout, user } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const { showFeedback } = useFeedback();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deauthenticate = event => {
    event.preventDefault();
    setOpen(true);
    logout();
    history.push('/');
    showFeedback('Hasta la vista, baby!')()
    setOpen(false);
  }

  useEffect(() => {
    if (!authenticated) {
      setAnchorEl(null);
    }
  }, [authenticated])

  return (
    <>
      {authenticated ? (
        <>
          <Button
            className={classes.more}
            onClick={handleClick}
            variant='text'
            color='inherit'
          >
            <Avatar alt={user.name} src={user.avatarUrl} title={user.name} />
          </Button>
          <Menu
            id='user-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={deauthenticate}>Logout</MenuItem>
          </Menu>
          <Backdrop className={classes.backdrop} open={open}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </>
      ) : (
          <Button color='inherit' component={RouterLink} to='/login'>
            Login
          </Button>
        )}
    </>
  );
}

export default UserActions;
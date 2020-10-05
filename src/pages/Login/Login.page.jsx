import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useLocation } from "react-router-dom";

import Main from '../../components/Main';

import { useAuth } from '../../providers/Auth';

import useStyles from './Login.styles';

function Login() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { login, authenticated } = useAuth();
  const [open, setOpen] = useState(false);
  const { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    if (authenticated) {
      history.push(from);
    }

    document.title = 'Login | WizeTube';

    return () => document.title = 'WizeTube';
  }, [authenticated, from, history]);

  const authenticate = event => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    setOpen(true);
    login(username, password, from);
    setOpen(false);
  }

  return (
    <Main withSidebar={false}>
      <Paper className={classes.paper} component='form' onSubmit={authenticate} data-testid='login-form'>
        <TextField
          label='Username'
          inputProps={{
            'data-testid': 'username-input',
            'name': 'username',
          }}
          variant='filled'
          required
          className={classes.input}
        />
        <TextField
          label='Password'
          inputProps={{
            'data-testid': 'password-input',
            'type': 'password',
            'name': 'password',
          }}
          variant='filled'
          required
          className={classes.input}
        />
        <Button
          type='submit'
          data-testid='login-submit'
          variant='contained'
          className={classes.button}
          color='primary'
        >
          Login
        </Button>
        <Backdrop className={classes.backdrop} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Paper>
    </Main>
  );
}

export default Login;
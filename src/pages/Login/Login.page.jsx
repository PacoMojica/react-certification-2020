import React, { useState, useEffect } from 'react';
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
  const { login } = useAuth();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    document.title = 'Login | WizeTube';

    return () => document.title = 'WizeTube';
  }, []);

  const authenticate = event => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      login(username, password, from);
    }, 600);
  }

  return (
    <Main withSidebar={false}>
      <Paper className={classes.paper} component='form' onSubmit={authenticate}>
        <TextField
          label='Username'
          name='username'
          variant='filled'
          required
          className={classes.input}
          />
        <TextField
          label='Password'
          type='password'
          name='password'
          variant='filled'
          required
          className={classes.input}
        />
        <Button type='submit' variant='contained' className={classes.button} color='primary'>Login</Button>
        <Backdrop className={classes.backdrop} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Paper>
    </Main>
  );
}

export default Login;
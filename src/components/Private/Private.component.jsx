import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

function Private({ children, ...rest }) {
  const { authenticated } = useAuth();
  const render = ({ location }) => {
    return authenticated
      ? children
      : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )
  };

  return (
    <Route {...rest} render={render} />
  );
}

export default Private;

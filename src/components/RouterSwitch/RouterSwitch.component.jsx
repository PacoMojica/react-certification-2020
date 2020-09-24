import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTES from './routes';

import PageLoading from '../PageLoading';
import Private from '../Private';

function RouterSwitch() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        {ROUTES.map(({ Component, exact, path, isPrivate }, index) => (
          isPrivate ? (
            <Private key={index} path={path} exact={exact}>
              <Component />
            </Private>
          ) : (
              <Route key={index} path={path} exact={exact}>
                <Component />
              </Route>
            )
        ))}
      </Switch>
    </Suspense>
  );
}

export default RouterSwitch;
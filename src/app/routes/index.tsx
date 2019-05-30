import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ROUTES from './routes';

const Login = lazy((): any => import('containers/Login'));

export const Routes = (): any => (
  <Router>
    <Suspense fallback={ <div>Loading...</div> }>
      <Switch>
        <Route exact={ true } path={ ROUTES.PUBLIC.ROOT } component={ Login } />
      </Switch>
    </Suspense>
  </Router>
);

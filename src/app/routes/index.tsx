import React, { lazy, Suspense, ComponentType } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ROUTES from './routes';

const Login = lazy((): Promise<{ default: ComponentType }> => import('containers/Login'));

export const Routes = (): React.ReactNode => (
  <Router>
    <Suspense fallback={ <div>Loading...</div> }>
      <Switch>
        <Route exact={ true } path={ ROUTES.PUBLIC.ROOT } component={ Login } />
      </Switch>
    </Suspense>
  </Router>
);

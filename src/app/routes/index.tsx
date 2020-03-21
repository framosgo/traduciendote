import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import About from 'containers/About';
import { ROOT, ABOUT } from './routes';

export const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact={ true } path={ ROOT } component={ Home } />
      <Route exact={ true } path={ ABOUT } component={ About } />
    </Switch>
  </Router>
);

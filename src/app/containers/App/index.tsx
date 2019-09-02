import * as React from 'react';

import { Routes } from '../../routes';
import Header from './components/Header';
import { Global, AppWrapper } from './styles';

const App: React.FC = () => (
  <>
    <Global />
    <Header />
    <AppWrapper>
      <Routes />
    </AppWrapper>
  </>
);

export default App;

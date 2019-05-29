import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { initialState } from 'base/store/index';
import { configureStore } from 'base/store/index';
import App from 'containers/App';

const store = configureStore(initialState);

const ReactApp = (): any => (
  <Provider store={ store }>
    <App />
  </Provider>
);

render(<ReactApp />, document.getElementById('root'));

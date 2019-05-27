/* eslint-disable global-require */
import { createLogger } from 'redux-logger';
import reduxReqMiddleware from 'redux-req-middleware';
import { createStore, applyMiddleware, Store } from 'redux';
// FIXME (path)
import { env } from '../shared/env';
import { AppState, Action } from '../../app/types';
import { rootReducer } from '../reducers';

export const configureStore = (initialState: AppState): Store<{}, Action> => {
  let middleware;
  if (env === 'development') {
    middleware = applyMiddleware(reduxReqMiddleware(), createLogger({ level: 'info', collapsed: true }));
  } else {
    middleware = applyMiddleware(reduxReqMiddleware());
  }

  const store = createStore(rootReducer, initialState, middleware);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      /* eslint global-require: "error" */
      const nextRootReducer = require('../reducers');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

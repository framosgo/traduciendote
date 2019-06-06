/* eslint-disable */
import { createLogger } from 'redux-logger';
import reduxReqMiddleware from 'redux-req-middleware';
import { createStore, applyMiddleware, Store, Action } from 'redux';
// FIXME (path)
import { composeWithDevTools } from 'redux-devtools-extension';
import { env } from '../shared/env';
import { AppState } from '../../app/types/index';
import { rootReducer } from '../reducers/index';

export const configureStore = (initialState: AppState): Store<{}, Action> => {
  let middleware;
  if (env === 'development') {
    middleware = applyMiddleware(
      reduxReqMiddleware(),
      createLogger({ level: 'info', collapsed: true })
    );
    middleware = composeWithDevTools(middleware);
  } else {
    middleware = applyMiddleware(reduxReqMiddleware());
  }
  const store = createStore(rootReducer, initialState, middleware);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

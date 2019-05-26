import { createLogger } from "redux-logger";
import reduxReqMiddleware from "redux-req-middleware";
import { createStore, applyMiddleware, Store } from "redux";
// FIXME (path)
import { env } from "../shared/env";
import { State, Action } from "../../app/types";
import { rootReducer } from "../reducers";

export const configureStore = (initialState): Store<{}, Action> => {
  let middleware;
  if (env === "development") {
    middleware = applyMiddleware(
      reduxReqMiddleware(),
      createLogger({ level: "info", collapsed: true })
    );
  } else {
    middleware = applyMiddleware(reduxReqMiddleware());
  }

  const store = createStore(rootReducer, initialState, middleware);

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers");

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

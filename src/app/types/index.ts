/* eslint-disable */
import { rootReducer } from '../../base/store';

export type AppState = ReturnType<typeof rootReducer>;

export interface Action<T> {
  type: T;
  payload?: object;
  request?: Promise<any>;
}

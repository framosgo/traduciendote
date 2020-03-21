import { Action as ReduxAction } from 'redux';
import { AppState } from 'app/containers/App/models';

export interface Action extends ReduxAction {
  type: string;
}

export interface ActionHandler<T> {
  [key: string]: (state: T, action: Action) => T;
}

export interface RootState {
  app: AppState;
}

export interface RootReducer {
  app: (state: AppState, action: Action) => AppState;
}

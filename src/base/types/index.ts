import { Action as ReduxAction } from 'redux';
import { LoginState } from 'containers/Login/types';

export interface Action extends ReduxAction {
  type: string;
}

export interface ActionHandler<T> {
  [key: string]: (state: T, action: Action) => T;
}

export interface RootState {
  login: LoginState;
}

export interface RootReducer {
  login: (state: LoginState, action: Action) => LoginState;
}

import produce from 'immer';
import { AppState } from '../../../types';

export interface LoginState {
  readonly id: number;
  readonly name: string;
}

export const LoginModel: LoginState = {
  id: -1,
  name: 'Default Text'
};

export const setInitialState = (initialState: AppState): AppState => {
  return (initialState.login = LoginModel);
};

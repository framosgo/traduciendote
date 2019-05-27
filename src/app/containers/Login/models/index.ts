import { AppState } from '../../../types';

export interface LoginState {
  id: number;
  name: string;
}

export const LoginModel: LoginState = {
  id: -1,
  name: 'hola'
};

export const setInitialState = (initialState: AppState): AppState => {
  initialState.login = LoginModel;
  return initialState;
};

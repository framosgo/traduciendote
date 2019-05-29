import { AppState } from 'types';
import { LoginType } from './types';

export const loginState: LoginType = {
  id: -1,
  name: 'Default Text'
};

export const setInitialState = (initialState: AppState): AppState => {
  return (initialState.login = loginState);
};

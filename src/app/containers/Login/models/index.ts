import { AppState } from 'types';
import { LoginModel } from './login.model';

export { LoginModel } from './login.model';

export const loginInitialState: LoginModel = {
  id: -1,
  name: 'Default Text'
};

export const setInitialState = (initialState: AppState): AppState => {
  return (initialState.login = loginInitialState);
};

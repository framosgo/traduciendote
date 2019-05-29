import { AppState } from 'types';

export interface AppModel {
  readonly lang: string;
}

export const appInitialState: AppModel = {
  lang: ''
};

export const setInitialState = (initialState: AppState): AppState => {
  return (initialState.login = appInitialState);
};

import { createReducer } from 'base';
import { AppState, appInitialState } from '../models';
import { ActionTypes, AppActionType } from '../actionTypes';

const setLanguage = (state: AppState, action: AppActionType): AppState => {
  // @ts-ignore `lang` is not present in <{}>
  const { lang: langFromServer } = action.payload;
  return {
    ...state,
    lang: langFromServer
  };
};

const actionHandlers = {
  [ActionTypes.SET_LANGUAGE]: setLanguage
};

export default createReducer(appInitialState, actionHandlers);

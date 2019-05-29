import { createReducer } from 'base';
import { AppState } from 'types';
import { AppModel, appInitialState } from '../models';
import { ActionTypes, AppActionType } from '../actionTypes';

const setLanguage = (state: AppState, action: AppActionType): AppModel => ({
  ...state,
  lang: action.payload
});

const actionHandlers = {
  [ActionTypes.SET_LANGUAGE]: setLanguage
};

export default createReducer(appInitialState, actionHandlers);

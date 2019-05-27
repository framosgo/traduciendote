// FIXME
import { createReducer } from '../../../../base';
import { LoginState, LoginModel } from '../models';
import { ActionTypes, LoginActionType } from '../actionTypes';
import { Action, AppState } from '../../../types';

const loginRequest = (state: LoginState, action: LoginActionType): LoginState => state;
const loginError = (state: LoginState, action: LoginActionType): LoginState => state;
const loginSuccess = (state: LoginState, action: LoginActionType): LoginState => {
  console.log(888888, state, action);
  // return (state.name = 'holaaaa');
  return state; // (state.name = 'holaa');
  // return (state.name = action.payload.name);
};
const logoutRequest = (state: LoginState, action: LoginActionType): LoginState => state;
const logoutError = (state: LoginState, action: LoginActionType): LoginState => state;
const logoutSuccess = (state: LoginState, action: LoginActionType): LoginState => state.set('name', '').set('id');

const actionHandlers = {
  [ActionTypes.LOGIN_REQUEST]: loginRequest,
  [ActionTypes.LOGIN_ERROR]: loginError,
  [ActionTypes.LOGIN_SUCCESS]: loginSuccess,
  [ActionTypes.LOGOUT_REQUEST]: logoutRequest,
  [ActionTypes.LOGOUT_ERROR]: logoutError,
  [ActionTypes.LOGOUT_SUCCESS]: logoutSuccess
};

export default createReducer(LoginModel, actionHandlers);

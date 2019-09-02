import { createReducer } from 'base';
import { ActionHandler } from 'base/types';
import { ActionTypes, LoginActionType } from '../actionTypes';
import { loginState } from '../models';
import { LoginState } from '../types';

const loginRequest = (state: LoginState): LoginState => ({ ...state, isFetching: true });
const loginError = (state: LoginState): LoginState => ({ ...state, isFetching: false });
const loginSuccess = (state: LoginState, action: LoginActionType): LoginState => ({
  ...state,
  ...action.payload,
  isFetching: false
});

const logoutRequest = (state: LoginState): LoginState => ({ ...state, isFetching: true });
const logoutError = (state: LoginState): LoginState => ({ ...state, isFetching: false });
const logoutSuccess = (state: LoginState): LoginState => ({ ...state, isFetching: false });

const actionHandlers: ActionHandler<LoginState> = {
  [ActionTypes.LOGIN_REQUEST]: loginRequest,
  [ActionTypes.LOGIN_ERROR]: loginError,
  [ActionTypes.LOGIN_SUCCESS]: loginSuccess,
  [ActionTypes.LOGOUT_REQUEST]: logoutRequest,
  [ActionTypes.LOGOUT_ERROR]: logoutError,
  [ActionTypes.LOGOUT_SUCCESS]: logoutSuccess
};

export default createReducer(loginState, actionHandlers);

import * as api from '../api';
import { ActionTypes, LoginActionType } from '../actionTypes';

export const loginRequest = (): LoginActionType => ({
  type: ActionTypes.LOGIN_REQUEST,
  request: api.postRequest()
});

export const loginError = (): LoginActionType => ({
  type: ActionTypes.LOGIN_ERROR
});

import * as api from '../api';
import { ActionTypes, LoginActionType } from '../actionTypes';
// FIXME PATHS
import { Action } from '../../../types';

export const loginRequest = (user: string, password: string): LoginActionType => ({
  type: ActionTypes.LOGIN_REQUEST,
  request: api.postRequest(user, password)
});

export const loginError = (user: string, password: string): LoginActionType => ({
  type: ActionTypes.LOGIN_ERROR
});

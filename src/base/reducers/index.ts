import LoginReducer from 'containers/Login/reducers';
import produce from 'immer';
import { combineImmerReducers } from '../shared/combineImmerReducer';

export const rootReducer = combineImmerReducers({
  login: LoginReducer
});

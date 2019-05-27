import LoginReducer from 'containers/Login/reducers';
import { combineImmerReducers } from '../shared/combineImmerReducer';

export const rootReducer = combineImmerReducers({
  login: LoginReducer
});

import { combineReducers } from 'redux';
import app from 'containers/App/reducers';
// import { combineImmerReducers } from '../shared/combineImmerReducer';

export const rootReducer = combineReducers({
  app
});

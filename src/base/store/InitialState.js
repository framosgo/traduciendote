// FIXME TO TS

import * as models from '../models';
import setGlobalState from './GlobalState';

export const initialState = window.$REACTBASE_STATE || {};

setGlobalState(initialState, models);

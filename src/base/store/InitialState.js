// FIXME TO TS

import * as models from '../models';
import setGlobalState from './globalState';

export const initialState = window.$REACTBASE_STATE || {};

setGlobalState(initialState, models);

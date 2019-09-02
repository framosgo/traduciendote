import * as dev from './env.development';
import * as prod from './env.production';

import { env } from '../base/shared/env';

export * from './env.common';

export const API = {
  LOGIN_GET: `${ env === 'development' ? dev.API_URL : prod.API_URL }/login.egt.json`,
  LOGIN_POST: `${ env === 'development' ? dev.API_URL : prod.API_URL }/login`
};

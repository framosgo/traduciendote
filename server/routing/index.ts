import { Express, RouterOptions } from 'express';
import routes from './routes';
import { Routes } from './types';

const setRouting = (app: Express): Routes =>
  // SUPERFIXME
  routes.map(route => app[route.method](route.url, route.handler));

export default setRouting;

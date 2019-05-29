import { Express } from 'express';
import routes from './routes';
import { Routes } from './types';

interface ExpressApp extends Express.Application {
  [key: string]: any;
}

const setRouting = (app: ExpressApp): Routes =>
  routes.map((route: any): any => app[route.method](route.url, route.handler));

export default setRouting;

import { Application } from 'express';
import routes from './routes';
import { Route, Routes } from './types';

interface ExpressApp extends Application {
  [key: string]: any;
}

const setRouting = (app: ExpressApp): Routes =>
  routes.map((route: Route): Route => app[route.method](route.url, route.handler));

export default setRouting;

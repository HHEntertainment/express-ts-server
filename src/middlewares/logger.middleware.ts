import { Application } from 'express';
import * as logger from 'morgan';

const applyLoggerMiddleware: (app: Application) => void = (app: Application) => {
  app.use(logger('dev'));
};

export default applyLoggerMiddleware;

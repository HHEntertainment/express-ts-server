
import { Request, Response, Application, NextFunction } from 'express';
import { DefinedErrors } from '../errors';

const apply404Middleware = (app: Application) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    next(new Error(DefinedErrors.ERROR_404_NOT_FOUND));
  });
}

export default apply404Middleware;
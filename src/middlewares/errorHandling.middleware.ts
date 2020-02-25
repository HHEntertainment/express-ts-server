import {
  Request, Response, Application, NextFunction,
} from 'express';

const applyErrorHandlingMiddleware: (app: Application) => void = (app: Application) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // Error Handling
  });
};

export default applyErrorHandlingMiddleware;

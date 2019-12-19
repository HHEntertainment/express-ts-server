
import { Request, Response, Application, NextFunction } from 'express';

const apply404Middleware = (app: Application) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    next(new Error("404"));
  });
}

export default apply404Middleware;
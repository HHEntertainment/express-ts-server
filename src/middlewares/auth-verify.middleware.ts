import * as jwt from 'jsonwebtoken';
import { isEmpty, get } from 'lodash/fp';
import { Request, Response, Application, NextFunction } from 'express';

const applyAuthMiddleware = (app: Application) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    const token: string = req.headers['authorization'];
    
    jwt.verify(token, "secret key", (err: jwt.VerifyErrors, decoded: object | string) => {
      if (!isEmpty(err)) {
        // Permission handling
        return next();
      }

      // Extract userId from jwt
      const userID = get('userId')(decoded);
      return next();
    })
  });
}

export default applyAuthMiddleware;
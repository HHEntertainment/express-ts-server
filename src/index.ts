import * as express from 'express';
import { Request, Response, Application } from 'express';

import { schema } from './graphql';
import { loadEnvVariables } from './env';

import applyLoggerMiddleware from './middlewares/logger.middleware';
import applyGraphqlMiddleware from './middlewares/graphql.middleware';
import apply404Middleware from './middlewares/404.middleware';
import applyErrorHandlingMiddleware from './middlewares/errorHandling.middleware';

loadEnvVariables(process.env.NODE_ENV);

const app: Application = express();

app.get('/', (req: Request, res: Response) => { res.send('Hello world!'); });

applyLoggerMiddleware(app);
applyGraphqlMiddleware('/graphql', app, schema);
apply404Middleware(app);
applyErrorHandlingMiddleware(app);

app.listen(process.env.PORT,() => console.log('Express server with ts have been started.'));

import * as express from 'express';
import { Request, Response, Application } from 'express';

import { schema } from './graphql';

import applyGraphqlMiddleware from './middlewares/graphql.middleware';
import apply404Middleware from './middlewares/404.middleware';
import applyErrorHandlingMiddleware from './middlewares/error-handling.middleware';

const app: Application = express();

app.get('/', (req: Request, res: Response) => { res.send('Hello world!'); });

applyGraphqlMiddleware('/graphql', app, schema);
apply404Middleware(app);
applyErrorHandlingMiddleware(app);

app.listen(4000,() => console.log('Express server with ts was started.'));

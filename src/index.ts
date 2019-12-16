import * as express from 'express';
import { Request, Response, Application } from 'express';

import { applyGraphqlMiddleware } from './middleware';
import { schema } from './graphql';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

applyGraphqlMiddleware(app, schema);

app.listen(4000,() => console.log('Express server with ts is started.'));

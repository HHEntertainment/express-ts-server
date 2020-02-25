import { Application } from 'express';
import * as graphqlHTTP from 'express-graphql';
import { GraphQLSchema, GraphQLError } from 'graphql';

type GraphQLMiddleware = {
  (path: string, app: Application, schema: GraphQLSchema): void;
}

const applyGraphqlMiddleware: GraphQLMiddleware = (path: string, app: Application, schema: GraphQLSchema) => {
  app.use(path, graphqlHTTP({
    schema,
    graphiql: process.env.GRAPHIQL === 'true',
    customFormatErrorFn: (error: GraphQLError) => {
      // Error handling
      return error;
    },
  }));
};

export default applyGraphqlMiddleware;

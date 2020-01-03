import { Application } from 'express';
import * as graphqlHTTP from 'express-graphql';
import { GraphQLSchema, GraphQLError } from 'graphql';

const applyGraphqlMiddleware = (path: string, app: Application, schema: GraphQLSchema) => {
  app.use(path, graphqlHTTP({
    schema,
    graphiql: process.env.GRAHPIQL,
    customFormatErrorFn: (error: GraphQLError) => {
      // Error handling
      return error;
    },
  }))
}

export default applyGraphqlMiddleware;
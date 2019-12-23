import { Application } from 'express';
import * as graphqlHTTP from 'express-graphql';
import { GraphQLSchema, GraphQLError } from 'graphql';

const applyGraphqlMiddleware = (path: string, app: Application, schema: GraphQLSchema) => {
  app.use(path, graphqlHTTP({
    schema,
    graphiql: true,
    customFormatErrorFn: (err: GraphQLError) => {
      // Error handling
      return {
        message: err.message,
        locations: err.locations,
        path: err.path,
      };
    },
  }))
}

export default applyGraphqlMiddleware;
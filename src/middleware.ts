import { Application } from 'express';
import * as graphqlHTTP from 'express-graphql';
import { GraphQLSchema } from 'graphql';

export const applyGraphqlMiddleware = (app: Application, schema: GraphQLSchema) => {
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }))
}
import * as path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

const typesPath: string = path.join(__dirname, './');
const typesArray = fileLoader(typesPath, { recursive: true, extensions: ['.graphql'] });
const typeDefs = mergeTypes(typesArray, { all: true });

const resolverPath: string = path.join(__dirname, '/**/*.resolver.*');
const resolverArray = fileLoader(resolverPath);
const resolvers = mergeResolvers(resolverArray);

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export { schema };

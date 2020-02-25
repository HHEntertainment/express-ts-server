import { IncomingMessage } from 'http';

export type GraphqlResolver = {
  (parent: any, args: any, context: IncomingMessage): Promise<any>;
};

export type GraphqlResolverMap = {
  [key: string]: GraphqlResolver;
};

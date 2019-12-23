import { IncomingMessage } from "http";

export default interface GraphqlResolver {
  (parent: any, args: any, context: IncomingMessage): Promise<any>,
}

export type GraphqlResolverMap = {
  [key: string]: GraphqlResolver;
}

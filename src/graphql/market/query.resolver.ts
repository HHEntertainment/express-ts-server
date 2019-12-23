import { GraphqlResolverMap } from '../resolver';
import { IncomingMessage } from 'http';
import { Market } from '../../models';

const query: GraphqlResolverMap = {
  markets: markets,
};

type MarketsParamType = {}
async function markets(parent: any, args: MarketsParamType, context: IncomingMessage): Promise<Market[]> {
  return [{ base: "BTC", counter: "KRW" }];
};

export default {
  Query: query,
};
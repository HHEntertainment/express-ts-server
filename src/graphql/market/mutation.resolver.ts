import { IncomingMessage } from 'http';
import { GraphqlResolverMap } from '../resolver';
import withAuthCheck from '../withAuthCheck';
import { Market } from '../../models';

const mutation: GraphqlResolverMap = {
  addMarket: withAuthCheck(addMarket),
};

type AddMarketParamType = {
  base: string,
  counter: string,
};

async function addMarket(parent: any, args: AddMarketParamType, context: IncomingMessage): Promise<Market[]> {
  return [{ base: "BTC", counter: "KRW" }];
};

export default {
  Mutation: mutation,
};
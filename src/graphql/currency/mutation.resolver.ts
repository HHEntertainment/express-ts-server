import { IncomingMessage } from 'http';
import { GraphqlResolverMap } from '../resolver';
import withAuthCheck from '../withAuthCheck';
import { Currency, CurrencyType, CurrencyServiceStatusType } from '../../models';

const mutation: GraphqlResolverMap = {
  currencyMutation: withAuthCheck(currencyMutation),
};

type CurrencyMutationParamType = {};

async function currencyMutation(parent: any, args: CurrencyMutationParamType, context: IncomingMessage): Promise<Currency[]> {
  return [{
    id: "btc-id",
    type: CurrencyType.CRYPTO,
    name: "Bitcoin",
    acronym: "BTC",
    addressMaxLength: 10,
    addressRegexFormat: "regex",
    confirmationCount: 10,
    floatingPoint: 8,
    withdrawalMaxPerRequest: "100000",
    withdrawalMinOut: "444444",
    withdrawalTxFee: "1000",
    services: {
      brokerStatus: CurrencyServiceStatusType.LAUNCHED,
      depositStatus: CurrencyServiceStatusType.LAUNCHED,
      exchangeStatus: CurrencyServiceStatusType.LAUNCHED,
      withdrawalStatus: CurrencyServiceStatusType.LAUNCHED,
    },
    addressExtraProps: {
      extraAddressField: "aaa",
      regexFormat: "aa",
      required: false,
    },
  }];
};

export default {
  Mutation: mutation,
};

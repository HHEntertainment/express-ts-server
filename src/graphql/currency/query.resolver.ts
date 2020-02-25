import { GraphqlResolverMap } from '../resolver';
import { IncomingMessage } from 'http';
import { Currency, CurrencyType, CurrencyServiceStatusType } from '../../models';

const query: GraphqlResolverMap = {
  currencies,
};

type CurrenciesParamType = {}
async function currencies(parent: any, args: CurrenciesParamType, context: IncomingMessage): Promise<Currency[]> {
  return [{
    id: 'btc-id',
    type: CurrencyType.CRYPTO,
    name: 'Bitcoin',
    acronym: 'BTC',
    addressMaxLength: 10,
    addressRegexFormat: 'regex',
    confirmationCount: 10,
    floatingPoint: 8,
    withdrawalMaxPerRequest: '100000',
    withdrawalMinOut: '444444',
    withdrawalTxFee: '1000',
    services: {
      brokerStatus: CurrencyServiceStatusType.LAUNCHED,
      depositStatus: CurrencyServiceStatusType.LAUNCHED,
      exchangeStatus: CurrencyServiceStatusType.LAUNCHED,
      withdrawalStatus: CurrencyServiceStatusType.LAUNCHED,
    },
    addressExtraProps: {
      extraAddressField: 'aaa',
      regexFormat: 'aa',
      required: false,
    },
  }];
}

export default {
  Query: query,
};

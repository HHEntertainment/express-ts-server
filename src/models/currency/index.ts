export enum CurrencyType {
  FIAT = "FIAT",
  CRYPTO = "CRYPTO",
}

export type CurrencyServices = {
  brokerStatus: CurrencyServiceStatusType,
  depositStatus: CurrencyServiceStatusType,
  exchangeStatus: CurrencyServiceStatusType,
  withdrawalStatus: CurrencyServiceStatusType,
}

export enum CurrencyServiceStatusType {
  LAUNCHED = "LAUNCHED",
  STOPPED = "STOPPED",
  DISABLED = "DISABLED",
}

export type CurrencyAddressExtraProps = {
  extraAddressField: string,
  regexFormat: string,
  required: boolean,
}

export default class Currency {
  id: string;
  type: CurrencyType;
  name: string;
  acronym: string;
  addressMaxLength: number;
  addressRegexFormat: string;
  confirmationCount: number;
  floatingPoint: number;
  withdrawalMaxPerRequest: string;
  withdrawalMinOut: string;
  withdrawalTxFee: string;
  services: CurrencyServices;
  addressExtraProps: CurrencyAddressExtraProps;
};

const query = {
  Currencies: async () => {
    return [{ symbol: "BTC" }];
  }
}

export default {
  Query: query,
}
const query = {
  Markets: async () => {
    return [{ base: "BTC", counter: "KRW" }];
  }
}

export default {
  Query: query,
}
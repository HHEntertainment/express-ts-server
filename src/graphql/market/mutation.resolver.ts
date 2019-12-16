const mutation = {
  addMarket: addMarket,
};

async function addMarket() {
  return [{ base: "BTC", counter: "KRW" }];
};

export default {
  Mutation: mutation,
};
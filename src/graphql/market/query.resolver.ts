const query = {
  markets: markets,
};

async function markets() {
  return [{ base: "BTC", counter: "KRW" }];
};

export default {
  Query: query,
};
const nanoid = require("nanoid");

const createProduct = async (_, args, ctx) => {
  const { es } = ctx;
  const body = {
    id: nanoid(),
    ...args,
  };

  try {
    await es.index({ index: "product", body });
    return body;
  } catch (e) {
    console.log(e);
  }
};

const searchProduct = async (_, args, ctx) => {
  const { name } = args;
  const { es } = ctx;
  try {
    const { body } = await es.search({
      index: "product",
      body: { query: { match: { name } } },
    });

    console.log(`Found ${body.hits.total.value} items in ${body.took}ms`);

    return body.hits.hits.map(item => item._source);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  Query: { searchProduct },
  Mutation: { createProduct },
};

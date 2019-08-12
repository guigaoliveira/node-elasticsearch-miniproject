const { getSchemaFromFile } = require("../../helpers");
const resolvers = require("./resolvers");

module.exports = {
  typeDefs: getSchemaFromFile(__dirname.concat("/schema.graphql")),
  resolvers,
};

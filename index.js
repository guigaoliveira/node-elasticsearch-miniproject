const { ApolloServer } = require("apollo-server");
const createContext = require("./createContext");
const modules = require("./modules");

const server = new ApolloServer({
  modules,
  context: createContext()
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

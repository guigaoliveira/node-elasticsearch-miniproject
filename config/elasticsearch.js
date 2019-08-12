const { Client } = require("@elastic/elasticsearch");

module.exports = new Client({
  node: "http://localhost:9200",
  maxRetries: 5,
  requestTimeout: 60000,
  sniffOnStart: true,
  compression: true,
});

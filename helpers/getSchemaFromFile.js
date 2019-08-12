const fs = require("fs");
const { gql } = require("apollo-server");

const getSchemaFromFile = filePath => {
  const text = fs.readFileSync(filePath, "utf8");
  return gql(text);
};

module.exports = getSchemaFromFile;

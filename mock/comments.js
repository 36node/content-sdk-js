const faker = require("faker");
const _ = require("lodash");
const constants = require("./constants");
const posts = require("./posts");

module.exports = _.range(500).map(() => ({
  id: faker.random.uuid(),
  createdBy: faker.random.uuid(),
  author: {
    id: faker.random.uuid(),
    name: faker.name.findName(),
  },
  content: faker.lorem.paragraph(),
  format: faker.random.arrayElement(["TEXT", "HTML", "MARKDOWN"]),
  type: "COMMENT",
  post: faker.random.arrayElement(posts).id,
  replies: [],
  ns: constants.NAMESPACE,
}));

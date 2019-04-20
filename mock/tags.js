const faker = require("faker");
const _ = require("lodash");

module.exports = _.range(20).map(() => ({
  name: faker.random.word(),
  count: faker.random.number(100),
}));

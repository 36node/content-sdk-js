const faker = require("faker");
const _ = require("lodash");
const constants = require("./constants");

function genCategories(
  level = 0,
  depth = 3,
  breadth = 20
) {
  if (level < depth) {
    return _.range(_.random(breadth)).map(() => ({
      createdBy: faker.random.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      id: faker.random.uuid(),
      cover: faker.image.imageUrl(),
      title: faker.lorem.words(),
      summary: faker.lorem.paragraph(),
      weight: faker.random.number(20),
      ns: constants.NAMESPACE,
      children: genCategories(level + 1, depth, breadth),
    }));
  }

  return [];
}

module.exports = genCategories();

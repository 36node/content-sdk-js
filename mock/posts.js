const faker = require("faker");
const _ = require("lodash");
const constants = require("./constants");

const categories = require("./categories");
const tags = require("./tags");

module.exports = _.range(categories.length * 5).map((x, index) => {
  const published = faker.random.boolean();
  return {
    id: faker.random.uuid(),
    createdBy: faker.random.uuid(),
    createdAt: faker.date.recent(),
    author: {
      id: faker.random.uuid(),
      name: faker.name.findName(),
    },
    uri: "",
    category: faker.random.arrayElement(categories).id,
    content: `<p>${faker.lorem.paragraphs().replace(/\n/g, "<p></p>")}</p>`,
    format: faker.random.arrayElement(["TEXT", "HTML"]),
    cover: faker.image.imageUrl(),
    photos: [faker.image.imageUrl()],
    pinned: faker.random.boolean(),
    published,
    publishedAt: published ? faker.date.recent() : null,
    source: null,
    summary: faker.lorem.paragraph,
    tags: tags.slice(Math.floor(Math.random()*tags.length)).map(item => item.name),
    title: faker.lorem.words(),
    topics: null,
    weight: faker.random.number,
    likes: 0,
    favs: 0,
    ns: constants.NAMESPACE,
    type: "ARTICLE",
    lang: faker.random.arrayElement(["zh", "en"]),
    link: faker.internet.url,
    date: faker.date.recent(),
  };
});

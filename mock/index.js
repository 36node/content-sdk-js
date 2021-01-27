const posts = require("./posts");
const comments = require("./comments");
const categories = require("./categories");
const tags = require("./tags");

module.exports = {
  /**
   * mock data
   */
  db: {
    posts,
    categories,
    comments,
    tags,
  },

  /**
   * rewrites
   */
  rewrites: {},

  /**
   * routers
   */
  routers: [],
};

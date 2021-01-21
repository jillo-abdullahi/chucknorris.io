const axios = require("axios");

const resolvers = {
  Query: {
    categories: () =>
      axios
        .get("https://api.chucknorris.io/jokes/categories")
        .then((res) => res.data),
    joke: (parent, args) =>
      axios
        .get(
          `https://api.chucknorris.io/jokes/random?category=${args.category}`
        )
        .then((res) => res.data),
  },
};

module.exports = resolvers;
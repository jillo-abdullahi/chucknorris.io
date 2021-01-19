const { gql } = require("apollo-server");

const typeDefs = gql`
  type Joke {
    categories: [String]
    created_at: String
    icon_url: String
    id: String
    updated_at: String
    url: String
    value: String
  }
  type Query {
    categories: [String]
    joke(category: String!): Joke
  }
`;

module.exports = typeDefs;

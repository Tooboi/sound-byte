const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    followers: Int
    following: [User]!
    userPosts: [Post]!
    userLikes: [Like]!
  }

  type Post {
    _id: ID
    createdAt: String
  }

  type Like {
    _id: ID
    createdAt: String
  }

  type Tag {
    _id: ID
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// ! EXAMPLES
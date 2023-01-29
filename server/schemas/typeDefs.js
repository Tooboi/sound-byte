const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    followers: [User]!
    following: [User]!
    userPosts: [Post]!
    userLikes: [Post]!
    followerCount: Int
    followingCount: Int
  }

  type Post {
    _id: ID
    audioFile: String
    artist: String
    likes: Int
    likers: [User]!
    createdAt: String
  }

  type Like {
    _id: ID
    createdAt: String
  }

  type Tag {
    _id: ID
    tagName: String
    postsWithThisTag: [Post]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts: [Post]
    post(postId: ID!): Post
    tags: [Tag]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// ! EXAMPLES
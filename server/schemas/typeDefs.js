const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    followers: [ID]
    following: [ID]
    userPosts: [Post]
    userLikes: [Post]
    followerCount: Int
    followingCount: Int
  }

  type Post {
    _id: ID!
    songName: String!
    audioFile: String!
    artist: String
    likes: Int
    likers: [User]
    createdAt: String
  }

  type Tag {
    _id: ID!
    tagName: String!
    postsWithThisTag: [Post]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    allPosts: [Post]
    posts(username: String!): [Post]
    post(id: ID!): Post
    tags: [Tag]
    tag(id: ID!): Tag
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

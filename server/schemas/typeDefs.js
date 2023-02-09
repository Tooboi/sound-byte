const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bio: String
    followers: [ID]
    following: [ID]
    posts: [Post]!
    userLikes: [Post]
    followerCount: Int
    followingCount: Int
    profileImgURL: String
  }

  type Post {
    _id: ID!
    songName: String!
    imageFile: String!
    audioFile: String!
    artist: String
    tags: [Tag]
    likes: Int
    likers: [User]
    comments: [Comment]
    createdAt: String
  }
  
  type Tag {
    tagName: String
  }

  type Comment {
    commentText: String!
    commentAuthor: User!
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User!
    me: User
    allPosts: [Post]
    posts(username: String!): [Post]
    getPost(postId: ID!): Post
    profile(username: String!): [User]
    tags: [Tag]
    tag(id: ID!): Tag
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    editProfile(username: String!, bio: String, profileImageURL: String): User
  }
`;

module.exports = typeDefs;

const { AuthenticationError } = require('apollo-server-express');
const { User, Tag, Post, Like } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({}).populate('posts');
    },
    profile: async (parent, { username }) => {
      return User.findOne({ username });
    },
    user: async (parent, { username }) => {
      return User.findOne({ username: username });
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    getPost: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    allPosts: async () => {
      return Post.find()
    },
    me: async (parent, args, context) => {
      // console.log(context.user.username, " is logged in");
      if (context.user) {
        return User.findOne({ username: context.user.username });
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);

        return { token, user };
      },
    },
  };


module.exports = resolvers;

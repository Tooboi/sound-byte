const { AuthenticationError } = require('apollo-server-express');
const { User, Tag, Post, Like } = require('../models');
const { signToken } = require('../utils/auth');


module.exports = resolvers;
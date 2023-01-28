const { AuthenticationError } = require('apollo-server-express');
const { User, Tag, Post, Like } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        
    }
}
module.exports = resolvers;
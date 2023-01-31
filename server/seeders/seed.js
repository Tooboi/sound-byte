const db = require('../config/connection');
const { User, Post } = require('../models');
const userSeeds = require('./userSeeds.json');
const postSeeds = require('./postSeeds.json');

db.once('open', async () => {
  try {
    // Delete all existing User documents
    await User.deleteMany({});
    await Post.deleteMany({});

    // Create new User documents
    for (const seed of userSeeds) {
      await User.create(seed);
    }
    for (const seed of postSeeds) {
      await Post.create(seed);
    }
  } catch (error) {
    console.log(error);
  }
});

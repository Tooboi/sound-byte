const db = require('../config/connection');
const { User, Tag, Post, Like } = require('../models');
const userSeeds = require('./userSeeds.json');
const tagSeeds = require('./tagSeeds.json');
const likeSeeds = require('./likeSeeds.json');
const postSeeds = require('./postSeeds.json');

db.once('open', async () => {
  try {
    await Tag.deleteMany({});
    await User.deleteMany({});
    await Post.deleteMany({});
    await Like.deleteMany({});

    await User.create(userSeeds);
    await Post.create(postSeeds);
    await Tag.create(tagSeeds);
    await Like.create(likeSeeds);

    for (let i = 0; i < postSeeds.length; i++) {
      const { _id } = await Post.create(postSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: postSeeds[i].artist },
        {
          $addToSet: {
            posts: _id,
            likedPosts: _id,
          },
        },
      );

      for (let j = 0; j < postSeeds[i].tags.length; j++) {
        const tag = await Tag.findOneAndUpdate(
          { name: postSeeds[i].tags[j] },
          {
            $addToSet: {
              posts: _id,
            },
          },
        );
      }

      for (let k = 0; k < postSeeds[i].likes.length; k++) {
        const like = await Like.findOneAndUpdate(
          { user: postSeeds[i].likes[k] },
          {
            $addToSet: {
              post: _id,
            },
          },
        );
      }
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

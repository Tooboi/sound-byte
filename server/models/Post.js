const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  songName: {
    type: String,
    required: 'Your track needs a name',
    minlength: 1,
    maxlength: 150,
    trim: true,
  },
  audioFile: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  artist: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  likes: {
    type: Number,
    default: 0,
  },
  likers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag',
    },
  ],
});

const Post = model('Post', postSchema);

module.exports = Post;

// you can use the like and unlike methods to increase and decrease the likes on the post
// you can also check if the user has already liked the post by checking if their id exists in the 'likers' array

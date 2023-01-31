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
  imageFile: {
    type: String,
    trim: true
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
      tagName: {
        type: String,
        minlength: 1,
        maxlength: 24,
        trim: true,
      },
    },
  ],
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

postSchema.pre('save', async function (next) {
    this.likes = this.likers.length;
    next();
  });

const Post = model('Post', postSchema);

module.exports = Post;

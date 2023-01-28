const { Schema, model } = require('mongoose');

const tagSchema = new Schema({
  tagName: {
    type: String,
    required: 'Please include a tag :)',
    minlength: 1,
    maxlength: 24,
    trim: true,
  },
  postsWithThisTag: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

const Tag = model('Tag', tagSchema);

module.exports = Tag;

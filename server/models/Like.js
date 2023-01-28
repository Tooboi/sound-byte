const { Schema, model } = require('mongoose');

const likeSchema = new Schema({
  usersWhoLiked: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Like = model('Like', likeSchema);

module.exports = Like;
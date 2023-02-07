const { Schema, model } = require('mongoose');

const likeSchema = new Schema({
  usersWhoLiked: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
},
{
  versionKey: false
}, {
  timestamps: true
});

const Like = model('Like', likeSchema);

module.exports = Like;
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Not valid email'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  followers: {
    type: Number,
    default: 0
  },
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  userPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  ],
  userLikes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Like' 
    }
  ]
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 12;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  const User = model('User', userSchema);
  
  module.exports = User;
  
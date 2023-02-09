const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
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
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    bio: {
      type: String,
      required: false,
      maxlength: 250,
    },
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
    userLikes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
    profileImgURL: {
      type: String,
    },
  },
  {
    versionKey: false,
  },
  {
    timestamps: true,
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

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

// Number of user's followers
userSchema.virtual('followerCount').get(function () {
  return this.followers.length;
});

// Number of user's you follow
userSchema.virtual('followingCount').get(function () {
  return this.following.length;
});

const User = model('User', userSchema);

module.exports = User;

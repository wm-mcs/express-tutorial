const moongoose = require('mongoose');

const postSchema = moongoose.Schema(
  {
    user: {
      type: moongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    title: {
      type: String,
      require: [true, 'Please add a  title'],
    },
    description: {
      type: String,
      require: [true, 'Please add a description'],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = moongoose.model('Post', postSchema);

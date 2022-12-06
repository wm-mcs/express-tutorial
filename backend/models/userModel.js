const moongoose = require('mongoose');

const userSchema = moongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'Please add a text value'],
    },
    email: {
      type: String,
      require: [true, 'Please add an email value'],
    },
    password: {
      type: String,
      require: [true, 'Please add a password'],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = moongoose.model('User', userSchema);

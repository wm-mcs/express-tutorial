const asyncHandler = require('express-async-handler');
const { responseDataParser } = require('./../utils/generalUtils');
const { generateToken } = require('./../services/tokenServices');
const bcrypt = require('bcryptjs');

const User = require('./../models/userModel');

// @desc    Set user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error('User already exist');
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(200).json(
      responseDataParser('User created successfully', {
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      })
    );
  }

  if (!user) {
    res.status(400);

    throw new Error('Error on creating');
  }
});

// @desc    Login user
// @route   POST /api/users
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json(
      responseDataParser('Ok', {
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      })
    );
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
});

// @desc    Data user
// @route   GET /api/users
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user._id);

  res.status(200).json(
    responseDataParser('Ok', {
      _id,
      name,
      email,
    })
  );
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};

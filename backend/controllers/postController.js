const asyncHandler = require('express-async-handler');
const Post = require('./../models/postModel');
const { responseDataParser } = require('./../utils/generalUtils');

// @desc    Get posts
// @route   GET /api/posts
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user.id });
  res.status(200).json(responseDataParser('Posts data', posts));
});

// @desc    Set post
// @route   POST /api/posts
// @access  Private
const setPosts = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const post = await Post.create({ title, description, user: req.user.id });
  res.status(200).json(responseDataParser('Post ok', post));
});

// @desc    Update post
// @route   PUT /api/posts:id
// @access  Private
const updatePosts = (req, res) => {
  res.status(200).json({ message: `Update post ${req.params.id}` });
};

// @desc    Delete post
// @route   DELETE /api/posts:id
// @access  Private
const deletePosts = (req, res) => {
  res.status(200).json({ message: `Delete post ${req.params.id}` });
};

module.exports = {
  getPosts,
  setPosts,
  updatePosts,
  deletePosts,
};

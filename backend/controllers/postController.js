// @desc    Get posts
// @route   GET /api/posts
// @access  Private
const getPosts = (req, res) => {
  res.status(200).json({ message: 'Get posts' });
};

// @desc    Set post
// @route   POST /api/posts
// @access  Private
const setPosts = (req, res) => {
  res.status(200).json({ message: 'Create post' });
};

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

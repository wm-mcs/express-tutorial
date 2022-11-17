const express = require('express');
const router = express.Router();
const {
  getPosts,
  setPosts,
  updatePosts,
  deletePosts,
} = require('../controllers/postController');

const { postsValidator } = require('../validators/postsValidator');

router.route('/').get(getPosts).post(postsValidator, setPosts);

router.route('/:id').put(postsValidator, updatePosts).delete(deletePosts);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
  getPosts,
  setPosts,
  updatePosts,
  deletePosts,
} = require('../controllers/postController');

const { postsValidator } = require('../validators/postsValidator');

const { protect } = require('../middlewares/authMiddleware');

router
  .route('/')
  .get(protect, getPosts)
  .post(protect, postsValidator, setPosts);

router
  .route('/:id')
  .put(protect, postsValidator, updatePosts)
  .delete(protect, deletePosts);

module.exports = router;

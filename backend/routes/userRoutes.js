const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController');

const { usersValidator } = require('../validators/userValidator');

const { protect } = require('../middlewares/authMiddleware');

router.route('/').post(usersValidator, registerUser);
router.route('/login').post(loginUser);
router.route('/me').get(protect, getMe);

module.exports = router;

const { responseDataParser } = require('../utils/generalUtils');
const { check, validationResult } = require('express-validator');

exports.usersValidator = [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage({ en: 'name name can not be empty!' })
    .bail()
    .isLength({ min: 3 })
    .withMessage({ en: 'Minimum 3 characters required!' })
    .bail(),
  check('email')
    .trim()
    .escape()
    .isEmail()
    .withMessage({ en: 'is not an email' })
    .bail(),
  check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage({ en: 'is not a strong password' })
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json(responseDataParser('upss', null, errors.array()));
    } else {
      next();
    }
  },
];

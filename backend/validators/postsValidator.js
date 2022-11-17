const { responseDataParser } = require('../utils/generalUtils');
const { check, validationResult } = require('express-validator');

exports.postsValidator = [
  check('title')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage({ en: 'Title name can not be empty!' })
    .bail()
    .isLength({ min: 3 })
    .withMessage({ en: 'Minimum 3 characters required!' })
    .bail(),
  check('description')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Description name can not be empty!')
    .bail()
    .isLength({ min: 3 })
    .withMessage('Minimum 3 characters required!')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json(responseDataParser('upss', null, errors.array()));
      next();
    }
  },
];

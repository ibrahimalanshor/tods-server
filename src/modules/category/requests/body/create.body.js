const { body } = require('express-validator');
const { unique: uniqueCategory } = require('../../helpers/validator');

module.exports = [
  body('name')
    .exists()
    .bail()
    .notEmpty()
    .bail()
    .isString()
    .bail()
    .custom((val, { req }) =>
      uniqueCategory({ name: val, userId: req.user.id })
    ),
];

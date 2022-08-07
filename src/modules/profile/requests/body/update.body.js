const { body } = require('express-validator');

module.exports = [
  body('name').exists().bail().notEmpty().bail().isString().bail(),
  body('password')
    .exists()
    .bail()
    .notEmpty()
    .bail()
    .isString()
    .bail()
    .isLength({ min: 5 })
    .bail(),
];

const { body } = require('express-validator');
const { passwordConfirmed } = require('../../helpers/validator');

module.exports = [
  body('email').exists().bail().notEmpty().bail().isEmail().bail(),
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
  body('password_confirmation').custom(passwordConfirmed),
];

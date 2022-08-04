const { body } = require('express-validator');

module.exports = [
  body('email').exists().bail().notEmpty().bail().isEmail().bail(),
  body('password').exists().bail().notEmpty().bail().isString().bail(),
];

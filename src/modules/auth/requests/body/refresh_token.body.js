const { body } = require('express-validator');

module.exports = [
  body('token').exists().bail().notEmpty().bail().isString().bail(),
];

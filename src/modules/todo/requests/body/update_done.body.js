const { body } = require('express-validator');

module.exports = [
  body('done').exists({ checkNull: true }).bail().isBoolean().bail(),
];

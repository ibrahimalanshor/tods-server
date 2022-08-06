const { body } = require('express-validator');

module.exports = [
  body('status').exists({ checkNull: true }).bail().isBoolean().bail(),
];

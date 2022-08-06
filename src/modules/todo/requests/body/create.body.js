const { body } = require('express-validator');

module.exports = [
  body('name')
    .exists({ checkNull: true, checkFalsy: true })
    .bail()
    .notEmpty()
    .bail()
    .isString()
    .bail(),
  body('description')
    .optional({ nullable: true, checkFalsy: true })
    .bail()
    .notEmpty()
    .bail()
    .isString()
    .bail(),
  body('due')
    .optional({ nullable: true, checkFalsy: true })
    .bail()
    .notEmpty()
    .bail()
    .isISO8601()
    .bail(),
  body('categoryId')
    .optional({ nullable: true, checkFalsy: true })
    .bail()
    .notEmpty()
    .bail()
    .isInt()
    .bail(),
];

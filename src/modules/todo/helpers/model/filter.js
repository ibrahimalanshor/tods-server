const { Op } = require('sequelize');
const {
  optionalObjectProperty,
  sort,
  paginate,
  toBoolean,
} = require('../../../../utils');

module.exports = (options = {}) => ({
  where: {
    ...optionalObjectProperty(
      options.filter?.userId,
      'userId',
      options.filter.userId
    ),
    ...optionalObjectProperty(options.filter?.name, 'name', {
      [Op.substring]: options.filter.name,
    }),
    ...optionalObjectProperty(options.filter?.due, 'due', options.filter.due),
    ...optionalObjectProperty(
      options.filter?.categoryId,
      'categoryId',
      options.filter.categoryId
    ),
    ...optionalObjectProperty(
      options.filter?.parentId,
      'parentId',
      options.filter.parentId
    ),
    ...optionalObjectProperty(
      options.filter?.done,
      'done',
      toBoolean(options.filter.done)
    ),
    ...optionalObjectProperty(options.filter?.late, 'due', {
      [Op.lt]: options.filter.late,
    }),
    ...optionalObjectProperty(options.filter?.late, 'done', false),
  },
  ...sort(options),
  ...paginate(options),
});

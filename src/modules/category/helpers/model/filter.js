const { Op, fn, col, literal } = require('sequelize');
const {
  optionalObjectProperty,
  sort: sortUtil,
  paginate,
} = require('../../../../utils');
const Todo = require('../../../todo/model/todo.model.js');

module.exports = (options = {}) => {
  const sort =
    options?.sort === 'todoCount'
      ? {
          order: [[literal('todoCount'), options?.order ?? 'DESC']],
        }
      : sortUtil(options);

  return {
    attributes: {
      include: [[fn('COUNT', col('todos.id')), 'todoCount']],
    },
    include: [
      {
        model: Todo,
        attributes: [],
      },
    ],
    where: {
      ...optionalObjectProperty(
        options.filter?.userId,
        'userId',
        options.filter.userId
      ),
      ...optionalObjectProperty(options.filter?.name, 'name', {
        [Op.substring]: options.filter.name,
      }),
    },
    group: 'category.id',
    ...sort,
    ...paginate(options),
  };
};

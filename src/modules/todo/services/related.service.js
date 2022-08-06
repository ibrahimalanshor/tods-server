const Todo = require('../model');
const { optionalObjectProperty } = require('../../../utils');
const { Service: TodoService } = require('../helpers/class');

module.exports = class RelatedTodoService extends TodoService {
  static async get(options = {}) {
    return Todo.findAll({
      include: ['category'],
      where: {
        ...RelatedTodoService.filter(options.filter),
      },
    });
  }

  static async find(id) {
    const todo = await Todo.findByPk(id, {
      include: ['category'],
    });

    return RelatedTodoService.findOrFail(todo);
  }
};

const Todo = require('../model');
const { filter } = require('../helpers');
const { Service } = require('../../../helpers/class');

module.exports = class RelatedTodoService extends Service {
  static async get(options = {}) {
    return await Todo.scope('parent').findAll({
      include: ['category'],
      ...filter(options),
    });
  }

  static async find(id) {
    const todo = await Todo.findByPk(id, {
      include: ['category', 'children'],
    });

    return RelatedTodoService.findOrFail(todo);
  }
};

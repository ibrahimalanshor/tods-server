const Todo = require('../model');
const { filter } = require('../helpers/model');
const { findOrFail, modelOrId } = require('../../../helpers');

module.exports = class RelatedTodoService {
  static async get(options = {}) {
    return await Todo.scope('parent').findAndCountAll({
      include: ['category'],
      ...filter(options),
    });
  }

  static async findParent(id) {
    const todo = await Todo.scope('parent').findByPk(id);

    return findOrFail(todo);
  }

  static async find(id) {
    const todo = await Todo.findByPk(id, {
      include: ['category', 'children'],
    });

    return findOrFail(todo);
  }
};

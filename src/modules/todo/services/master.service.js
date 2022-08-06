const Todo = require('../model');
const CategoryHelper = require('../helpers');
const { Service } = require('../../../helpers/class');

module.exports = class MasterTodoService extends Service {
  static async get(options = {}) {
    return await Todo.findAndCountAll(CategoryHelper.filter(options));
  }

  static async create(body) {
    return await Todo.create(body);
  }

  static async find(id) {
    const todo = await Todo.findByPk(id);

    return MasterTodoService.findOrFail(todo);
  }

  static async update(id, body) {
    const todo = await CategoryHelper.modelOrId(id);

    return await todo.update(body);
  }

  static async delete(id) {
    const todo = await CategoryHelper.modelOrId(id);

    return await todo.destroy();
  }
};

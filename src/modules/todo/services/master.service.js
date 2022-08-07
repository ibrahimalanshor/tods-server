const Todo = require('../model');
const CategoryModelHelper = require('../helpers/model');
const { Service } = require('../../../helpers/class');

module.exports = class MasterTodoService extends Service {
  static async get(options = {}) {
    return await Todo.findAndCountAll(CategoryModelHelper.filter(options));
  }

  static async create(body) {
    return await Todo.create(body);
  }

  static async find(id) {
    const todo = await Todo.findByPk(id);

    return MasterTodoService.findOrFail(todo);
  }

  static async findParent(id) {
    const todo = await Todo.scope('parent').findByPk(id);

    return MasterTodoService.findOrFail(todo);
  }

  static async update(id, body) {
    const todo = await CategoryModelHelper.modelOrId(id);

    return await todo.update(body);
  }

  static async delete(id) {
    const todo = await CategoryModelHelper.modelOrId(id);

    return await todo.destroy();
  }
};

const Todo = require('../model');
const { modelOrId: todoModelOrId } = require('../helpers');
const { Service: CategoryService } = require('../helpers/class');

module.exports = class MasterTodoService extends CategoryService {
  static async get(options = {}) {
    return Todo.findAll({
      where: {
        ...MasterTodoService.filter(options.filter),
      },
    });
  }

  static async create(body) {
    return await Todo.create(body);
  }

  static async find(id) {
    const todo = await Todo.findByPk(id);

    return MasterTodoService.findOrFail(todo);
  }

  static async update(id, body) {
    const todo = await todoModelOrId(id);

    return await todo.update(body);
  }

  static async delete(id) {
    const todo = await todoModelOrId(id);

    return await todo.destroy();
  }
};

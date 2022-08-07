const Todo = require('../model');
const { findOrFail, modelOrId } = require('../../../helpers');

module.exports = class MasterTodoService {
  static async create(body) {
    return await Todo.create(body);
  }

  static async find(id) {
    const todo = await Todo.findByPk(id);

    return findOrFail(todo);
  }

  static async update(id, body) {
    const todo = await modelOrId(Todo, id);

    return await todo.update(body);
  }

  static async delete(id) {
    const todo = await modelOrId(Todo, id);

    return await todo.destroy();
  }
};

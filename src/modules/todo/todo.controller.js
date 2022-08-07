const Response = require('@ibrahimanshor/express-app/lib/response');
const { MasterTodo, RelatedTodo } = require('./services');
const { MasterCategory } = require('../category/services');
const { extractQueryFilter } = require('../../utils');

module.exports = class TodoController {
  static async get(req, res, next) {
    try {
      const todos = await RelatedTodo.get({
        filter: {
          userId: req.user.id,
          name: req.query.name,
          due: req.query.due,
          categoryId: req.query.categoryId,
          status: req.query.status,
          late: req.query.late,
        },
        ...extractQueryFilter(req.query),
      });

      return new Response.SuccessResponse('', todos).use(res);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      if (req.body.categoryId) {
        const category = await MasterCategory.find(req.body.categoryId);
        req.user.canAccessCategory(category);
      }

      if (req.body.parentId) {
        const parent = await MasterTodo.findParent(req.body.parentId);
        req.user.canAccessTodo(parent);
      }

      const todo = await MasterTodo.create({
        ...req.body,
        userId: req.user.id,
      });

      return new Response.CreatedResponse('', todo).use(res);
    } catch (err) {
      next(err);
    }
  }

  static async find(req, res, next) {
    try {
      const todo = await RelatedTodo.find(req.params.id);
      req.user.canAccessTodo(todo);

      return new Response.SuccessResponse('', todo).use(res);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const todo = await MasterTodo.find(req.params.id);
      req.user.canAccessTodo(todo);

      if (req.body.categoryId) {
        const category = await MasterCategory.find(req.body.categoryId);
        req.user.canAccessCategory(category);
      }

      if (req.body.parentId) {
        todo.mustChildren();

        const parent = await MasterTodo.findParent(req.body.parentId);

        req.user.canAccessTodo(parent);
      }

      await MasterTodo.update(todo, req.body);

      return new Response.SuccessResponse('', todo).use(res);
    } catch (err) {
      next(err);
    }
  }

  static async updateStatus(req, res, next) {
    try {
      const todo = await MasterTodo.find(req.params.id);
      req.user.canAccessTodo(todo);

      await MasterTodo.update(todo, {
        status: req.body.status,
      });

      return new Response.SuccessResponse('', todo).use(res);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const todo = await MasterTodo.find(req.params.id);

      req.user.canAccessTodo(todo);

      await MasterTodo.delete(todo);

      return new Response.SuccessResponse('', todo).use(res);
    } catch (err) {
      next(err);
    }
  }
};

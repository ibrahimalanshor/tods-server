const Response = require('@ibrahimanshor/express-app/lib/response');
const { MasterCategory } = require('./services');
const { extractQueryFilter } = require('../../utils');

module.exports = class CategoryController {
  static async get(req, res, next) {
    try {
      const categories = await MasterCategory.get({
        filter: {
          name: req.query.name,
          userId: req.user.id,
          hasTodo: req.query.hasTodo,
        },
        ...extractQueryFilter(req.query),
      });

      return new Response.SuccessResponse('', categories).use(res);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const category = await MasterCategory.create({
        ...req.body,
        userId: req.user.id,
      });

      return new Response.CreatedResponse('', category).use(res);
    } catch (err) {
      next(err);
    }
  }

  static async find(req, res, next) {
    try {
      const category = await MasterCategory.find(req.params.id);

      req.user.canAccessCategory(category);

      return new Response.SuccessResponse('', category).use(res);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const category = await MasterCategory.find(req.params.id);

      req.user.canAccessCategory(category);

      await MasterCategory.update(category, req.body);

      return new Response.SuccessResponse('', category).use(res);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const category = await MasterCategory.find(req.params.id);

      req.user.canAccessCategory(category);

      await MasterCategory.delete(category);

      return new Response.SuccessResponse('', category).use(res);
    } catch (err) {
      next(err);
    }
  }
};

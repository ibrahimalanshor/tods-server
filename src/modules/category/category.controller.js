const Response = require('@ibrahimanshor/express-app/lib/response');
const { MasterCategory, RelatedCategory } = require('./services');

module.exports = class CategoryController {
  static async get(req, res, next) {
    try {
      const categories = await MasterCategory.get({
        filter: {
          userId: req.user.id,
        },
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
      const category = await RelatedCategory.find(req.params.id);

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

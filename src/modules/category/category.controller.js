const Response = require('@ibrahimanshor/express-app/lib/response');
const { MasterCategory } = require('./services');

module.exports = class CategoryController {
  static async get(req, res, next) {
    try {
      const categories = await MasterCategory.get();

      new Response.SuccessResponse('', categories).use(res);
    } catch (err) {
      next(err);
    }
  }
};

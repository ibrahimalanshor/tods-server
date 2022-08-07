const Response = require('@ibrahimanshor/express-app/lib/response');
const { PasswordService } = require('@ibrahimanshor/express-auth');
const { MasterUser } = require('../user/services');

module.exports = class TodoController {
  static async get(req, res, next) {
    try {
      return new Response.SuccessResponse('', req.user).use(res);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const password = await PasswordService.hashPassword(req.body.password);

      await MasterUser.update(req.user, {
        ...req.body,
        password,
      });

      return new Response.SuccessResponse().use(res);
    } catch (err) {
      next(err);
    }
  }
};

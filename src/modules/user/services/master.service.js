const { UniqueConstraintError } = require('sequelize');
const Exception = require('@ibrahimanshor/express-app/lib/exceptions');
const User = require('../model');
const UserModelHelper = require('../helpers/model');
const { Service } = require('../../../helpers/class');

module.exports = class MasterUserService extends Service {
  static async create(body) {
    try {
      return await User.create(body);
    } catch (err) {
      if (err instanceof UniqueConstraintError) {
        throw new Exception.ConflictException('user already exists');
      }

      throw err;
    }
  }

  static async find(id) {
    const user = await User.findByPk(id);

    return MasterUserService.findOrFail(user);
  }

  static async findByEmail(email) {
    const user = await User.unscoped().findOne({
      where: { email },
    });

    return MasterUserService.findOrFail(user);
  }

  static async update(id, body) {
    try {
      const user = await UserModelHelper.modelOrId(id);

      return await user.update(body);
    } catch (err) {
      if (err instanceof UniqueConstraintError) {
        throw new Exception.ConflictException('user already exists');
      }

      throw err;
    }
  }
};

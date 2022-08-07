const User = require('../model');
const { isConflict, findOrFail, modelOrId } = require('../../../helpers');

module.exports = class MasterUserService {
  static async create(body) {
    try {
      return await User.create(body);
    } catch (err) {
      isConflict(err);

      throw err;
    }
  }

  static async find(id) {
    const user = await User.findByPk(id);

    return findOrFail(user);
  }

  static async update(id, body) {
    try {
      const user = await modelOrId(User, id);

      return await user.update(body);
    } catch (err) {
      isConflict(err);

      throw err;
    }
  }
};

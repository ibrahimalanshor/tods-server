const RefreshToken = require('../model');
const { Service } = require('../../../helpers/class');

module.exports = class MasterRefreshTokenService extends Service {
  static async create(body) {
    return await RefreshToken.create(body);
  }

  static async findByToken(token) {
    const refreshToken = await RefreshToken.unscoped().findOne({
      where: { token },
    });

    return MasterRefreshTokenService.findOrFail(refreshToken);
  }

  static async deleteByUserId(userId) {
    return await RefreshToken.destroy({ where: { userId } });
  }

  static async deleteByToken(token) {
    return await RefreshToken.destroy({ where: { token } });
  }
};

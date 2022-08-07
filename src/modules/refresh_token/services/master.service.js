const RefreshToken = require('../model');
const { findOrFail } = require('../../../helpers');

module.exports = class MasterRefreshTokenService {
  static async create(body) {
    return await RefreshToken.create(body);
  }

  static async findByToken(token) {
    const refreshToken = await RefreshToken.findOne({
      where: { token },
    });

    return findOrFail(refreshToken);
  }

  static async deleteByUserId(userId) {
    return await RefreshToken.destroy({ where: { userId } });
  }

  static async deleteByToken(token) {
    return await RefreshToken.destroy({ where: { token } });
  }
};

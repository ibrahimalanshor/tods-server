const ExpressAuth = require('@ibrahimanshor/express-auth');
const config = require('../../../../config');
const { MasterUser } = require('../../user/services');
const { MasterRefreshToken } = require('../../refresh_token/services');

module.exports = class AuthService extends ExpressAuth.PasswordService {
  static config = {
    withRegisterVerification: false,
    auth: {
      secret: config.app.key,
      accessToken: { expire: '30m' },
      refreshToken: { expire: '365d' },
    },
  };

  static async createUser(credentials) {
    return await MasterUser.create(credentials);
  }
  static async getUserByEmail(email) {
    return await MasterUser.findByEmail(email);
  }
  static async getUserById(id) {
    return await MasterUser.find(id);
  }

  static async createRefreshToken(token, user) {
    await MasterRefreshToken.deleteByUserId(user.id);

    return await MasterRefreshToken.create({
      userId: user.id,
      expireAt: Date.now() + 1000 * 86400 * 30,
      token,
    });
  }
  static async getRefreshTokenByToken(token) {
    const refreshToken = await MasterRefreshToken.findByToken(token);

    if (!refreshToken) throw new Error('token not found');
    if (new Date() > new Date(refreshToken.expireAt))
      throw new Error('token expired');

    return refreshToken;
  }
  static async deleteRefreshTokenByToken(token) {
    await MasterRefreshToken.deleteByToken(token);
  }

  // verification service
  static async createVerification(user) {} // create new verification (user = user object), return created verification
  static async sendVerificationEmail(verification) {} // send verification email (verification = verification object)
  static async getVerification(userId, token) {} // get verification by user and token
  static async verificateUserById(userId) {} // update user verification status
  static async deleteVerificationById(verificationId) {} // delete verification by verification id

  // reset password service
  static async createResetPassword(user) {} // create new reset password (user = user object), return created forgot password
  static async sendForgotPasswordEmail(resetPassword) {} // send forgot password email (resetPassword = reset password object)
  static async getResetPassword(userId, token) {} // get reset password by user id and token
  static async resetPasswordByUserId(userId, password) {} // change user password by user id
  static async deleteResetPasswordById(resetPasswordId) {} // delete reset password by reset password id
};

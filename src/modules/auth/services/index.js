const ExpressAuth = require('@ibrahimanshor/express-auth');
const config = require('../../../../config');
const User = require('../../user/model');
const RefreshToken = require('../../refresh_token/model');

module.exports = class AuthService extends ExpressAuth.PasswordService {
  static config = {
    withRegisterVerification: false, // send register verification (default false)
    auth: {
      secret: config.app.key,
      accessToken: { expire: '30m' }, // jwt access token expire time
      refreshToken: { expire: '365d' }, // jwt refresh token expire time
    },
  };

  // user service
  static async createUser(credentials) {} // create new user (credential = { ...req.body, password: hashedPassword }), return created user
  static async getUserByEmail(email) {
    const user = await User.unscoped().findOne({
      where: { email },
    });

    if (!user) throw new Error('email not found');

    return user;
  }
  static async getUserById(id) {
    return await User.findByPk(id);
  }

  // refresh token service
  static async createRefreshToken(token, user) {
    await RefreshToken.destroy({ where: { userId: user.id } });

    return await RefreshToken.create({
      userId: user.id,
      expireAt: Date.now() + 1000 * 86400 * 30,
      token,
    });
  }
  static async getRefreshTokenByToken(token) {} // get refresh token by token
  static async deleteRefreshTokenByToken(token) {} // delete refresh token by token

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

const { Router } = require('express');
const ExpressAuth = require('@ibrahimanshor/express-auth');
const AuthService = require('./services');
const AuthRequest = require('./requests');

const router = Router();

router.post('/login', AuthRequest.login, ExpressAuth.login(AuthService));
router.post(
  '/register',
  AuthRequest.register,
  ExpressAuth.register(AuthService)
);
router.post(
  '/refresh_token',
  AuthRequest.refreshToken,
  ExpressAuth.refreshToken(AuthService)
);
router.post('/logout', AuthRequest.logout, ExpressAuth.logout(AuthService));

module.exports = {
  path: '/api/auth',
  router,
};

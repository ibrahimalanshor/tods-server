const { Router } = require('express');
const ExpressAuth = require('@ibrahimanshor/express-auth');
const AuthService = require('./services');
const AuthRequest = require('./requests');

const router = Router();

router.post('/login', AuthRequest.login, ExpressAuth.login(AuthService));

module.exports = {
  path: '/api/auth',
  router,
};

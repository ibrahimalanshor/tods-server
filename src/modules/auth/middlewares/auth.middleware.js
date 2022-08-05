const ExpressAuth = require('@ibrahimanshor/express-auth');
const AuthService = require('../services');

module.exports = ExpressAuth.requireAuth(AuthService);

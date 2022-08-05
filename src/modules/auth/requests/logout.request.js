const Middlewares = require('@ibrahimanshor/express-app/lib/middlewares');
const { logout } = require('./body');

module.exports = Middlewares.body(logout);

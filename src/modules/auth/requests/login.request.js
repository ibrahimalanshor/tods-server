const Middlewares = require('@ibrahimanshor/express-app/lib/middlewares');
const { login } = require('./body');

module.exports = Middlewares.body(login);

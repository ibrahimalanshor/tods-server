const Middlewares = require('@ibrahimanshor/express-app/lib/middlewares');
const { refreshToken } = require('./body');

module.exports = Middlewares.body(refreshToken);

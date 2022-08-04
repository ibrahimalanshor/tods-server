const Middlewares = require('@ibrahimanshor/express-app/lib/middlewares');
const { register } = require('./body');

module.exports = Middlewares.body(register);

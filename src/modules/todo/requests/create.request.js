const Middlewares = require('@ibrahimanshor/express-app/lib/middlewares');
const { create } = require('./body');

module.exports = Middlewares.body(create);

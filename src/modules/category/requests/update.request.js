const Middlewares = require('@ibrahimanshor/express-app/lib/middlewares');
const { update } = require('./body');

module.exports = Middlewares.body(update);

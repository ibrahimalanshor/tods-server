const Middlewares = require('@ibrahimanshor/express-app/lib/middlewares');
const { updateStatus } = require('./body');

module.exports = Middlewares.body(updateStatus);

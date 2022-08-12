const Middlewares = require('@ibrahimanshor/express-app/lib/middlewares');
const { updateDone } = require('./body');

module.exports = Middlewares.body(updateDone);

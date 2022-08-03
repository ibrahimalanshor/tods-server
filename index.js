const ExpressApp = require('@ibrahimanshor/express-app');
const config = require('./config');

const app = new ExpressApp({
  port: config.app.port,
  loggingRequest: config.env === 'development',
  loggingError: config.env === 'development',
});

app.run();

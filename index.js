const ExpressApp = require('@ibrahimanshor/express-app');
const config = require('./config');
const router = require('./src/router');
const { sequelize } = require('./src/database');

const app = new ExpressApp({
  port: config.app.port,
  loggingRequest: config.env === 'development',
  loggingError: config.env === 'development',
  routes: router,
});

const main = async () => {
  try {
    await sequelize.authenticate();

    console.log('database connected');

    app.run();
  } catch (err) {
    console.error(err);
  }
};

main();

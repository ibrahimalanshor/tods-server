const sequelize = require('./sequelize.js');
const { PasswordService } = require('@ibrahimanshor/express-auth');
const User = require('../modules/user/model');
const RefreshToken = require('../modules/refresh_token/model');

const run = async () => {
  try {
    await sequelize.drop();

    await User.sync({ force: true });
    await RefreshToken.sync({ force: true });

    const password = await PasswordService.hashPassword('userpass');

    await User.create({
      email: 'user@gmail.com',
      name: 'User',
      password,
    });
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
};

run();

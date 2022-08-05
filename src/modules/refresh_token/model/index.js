const RefreshToken = require('./model.js');
const User = require('../../user/model');

RefreshToken.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = RefreshToken;

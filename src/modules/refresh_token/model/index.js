const RefreshToken = require('./refresh_token.model.js');
const User = require('../../user/model');

RefreshToken.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = RefreshToken;

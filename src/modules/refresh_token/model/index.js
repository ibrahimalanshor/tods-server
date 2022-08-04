const RefreshToken = require('./model.js');
const User = require('../../user/model');

RefreshToken.belongsTo(User, {
  foreignId: 'userId',
});

module.exports = RefreshToken;

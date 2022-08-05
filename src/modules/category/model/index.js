const Category = require('./category.model.js');
const User = require('../../user/model');

Category.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = Category;

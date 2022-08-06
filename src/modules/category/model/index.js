const Category = require('./category.model.js');
const User = require('../../user/model/user.model.js');
const Todo = require('../../todo/model/todo.model.js');

Category.belongsTo(User, {
  foreignKey: 'userId',
});

Category.hasMany(Todo, {
  foreignKey: 'categoryId',
});

module.exports = Category;

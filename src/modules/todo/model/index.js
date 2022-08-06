const Todo = require('./todo.model.js');
const Category = require('../../category/model/category.model.js');
const User = require('../../user/model/user.model.js');

Todo.belongsTo(Category, {
  foreignKey: 'categoryId',
});

Todo.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = Todo;

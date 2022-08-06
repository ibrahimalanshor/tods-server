const Todo = require('./todo.model.js');
const Category = require('../../category/model');
const User = require('../../user/model');

Todo.belongsTo(Category, {
  foreignKey: 'categoryId',
});

Todo.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = Todo;

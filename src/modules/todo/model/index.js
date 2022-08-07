const Exception = require('@ibrahimanshor/express-app/lib/exceptions');
const Todo = require('./todo.model.js');
const Category = require('../../category/model/category.model.js');
const User = require('../../user/model/user.model.js');

Todo.belongsTo(User, {
  foreignKey: 'userId',
});

Todo.belongsTo(Category, {
  foreignKey: 'categoryId',
});

Todo.hasMany(Todo, {
  as: 'children',
  foreignKey: 'parentId',
});

Todo.prototype.mustChildren = function () {
  if (this.parentId === null) throw new Exception.ForbiddenException('');
};

module.exports = Todo;

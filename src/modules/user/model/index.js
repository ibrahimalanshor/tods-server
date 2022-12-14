const User = require('./user.model.js');
const { isForbidden } = require('../../../helpers');

User.prototype.canAccessCategory = function (category) {
  isForbidden(category.userId !== this.id);
};

User.prototype.canAccessTodo = function (todo) {
  isForbidden(todo.userId !== this.id);
};

module.exports = User;

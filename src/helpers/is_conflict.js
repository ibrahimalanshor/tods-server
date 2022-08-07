const { UniqueConstraintError } = require('sequelize');
const Exception = require('@ibrahimanshor/express-app/lib/exceptions');

module.exports = (err) => {
  if (err instanceof UniqueConstraintError)
    throw new Exception.ConflictException('user already exists');
};

const Exception = require('@ibrahimanshor/express-app/lib/exceptions');

module.exports = (cond) => {
  if (cond) throw new Exception.ForbiddenException('');
};

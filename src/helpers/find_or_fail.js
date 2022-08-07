const Exception = require('@ibrahimanshor/express-app/lib/exceptions');

module.exports = (resource) => {
  if (!resource) {
    throw new Exception.NotFoundException();
  }

  return resource;
};

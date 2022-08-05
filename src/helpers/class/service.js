const Exception = require('@ibrahimanshor/express-app/lib/exceptions');

module.exports = class Service {
  static findOrFail(resource) {
    if (!resource) {
      throw new Exception.NotFoundException();
    }

    return resource;
  }
};

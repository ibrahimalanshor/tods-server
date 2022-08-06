const { optionalObjectProperty } = require('../../../../utils');
const { Service } = require('../../../../helpers/class');

module.exports = class CategoryService extends Service {
  static filter(params = {}) {
    const { userId = '' } = params;

    return {
      ...optionalObjectProperty('userId', userId),
    };
  }
};

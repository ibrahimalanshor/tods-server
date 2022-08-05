const Category = require('../model');

module.exports = class MasterCategoryService {
  static async get() {
    return Category.findAll();
  }
};

const Category = require('../model');
const CategoryHelper = require('../helpers');
const { Service } = require('../../../helpers/class');

module.exports = class MasterCategoryService extends Service {
  static async get(options = {}) {
    return await Category.findAndCountAll(CategoryHelper.filter(options));
  }

  static async create(body) {
    return await Category.create(body);
  }

  static async find(id) {
    const category = await Category.findByPk(id);

    return MasterCategoryService.findOrFail(category);
  }

  static async update(id, body) {
    let category = await CategoryHelper.modelOrId(id);

    return await category.update(body);
  }

  static async delete(id) {
    let category = await CategoryHelper.modelOrId(id);

    return await category.destroy();
  }
};

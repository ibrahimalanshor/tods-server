const Category = require('../model');
const CategoryModelHelper = require('../helpers/model');
const { modelOrId, findOrFail } = require('../../../helpers');

module.exports = class MasterCategoryService {
  static async get(options = {}) {
    return await Category.findAndCountAll(CategoryModelHelper.filter(options));
  }

  static async create(body) {
    return await Category.create(body);
  }

  static async find(id) {
    const category = await Category.findByPk(id);

    return findOrFail(category);
  }

  static async update(id, body) {
    const category = await modelOrId(Category, id);

    return await category.update(body);
  }

  static async delete(id) {
    const category = await modelOrId(Category, id);

    return await category.destroy();
  }
};

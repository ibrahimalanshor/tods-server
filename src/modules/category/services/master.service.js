const Category = require('../model');
const { modelOrId: categoryModelOrId } = require('../helpers');
const { Service: CategoryService } = require('../helpers/class');

module.exports = class MasterCategoryService extends CategoryService {
  static async get(options = {}) {
    return Category.findAll({
      where: {
        ...MasterCategoryService.filter(options.filter),
      },
    });
  }

  static async create(body) {
    return await Category.create(body);
  }

  static async find(id) {
    const category = await Category.findByPk(id);

    return MasterCategoryService.findOrFail(category);
  }

  static async update(id, body) {
    let category = await categoryModelOrId(id);

    return await category.update(body);
  }

  static async delete(id) {
    let category = await categoryModelOrId(id);

    return await category.destroy();
  }
};

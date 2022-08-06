const Category = require('../model');
const { Service: CategoryService } = require('../helpers/class');

module.exports = class RelatedCategoryService extends CategoryService {
  static async find(id) {
    const category = await Category.findByPk(id, {
      include: ['todos'],
    });

    return RelatedCategoryService.findOrFail(category);
  }
};

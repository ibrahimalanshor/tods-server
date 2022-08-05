const Category = require('../model');
const { optionalObjectProperty } = require('../../../utils');
const { modelOrId: categoryModelOrId } = require('../helpers');
const { Service } = require('../../../helpers/class');

module.exports = class MasterCategoryService extends Service {
  static async get(options = {}) {
    const { userId = '' } = options.filter;

    return Category.findAll({
      where: {
        ...optionalObjectProperty('userId', userId),
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

  static async findWithTodo(id) {
    const category = await Category.findByPk(id, {
      // include: ['todo']
    });

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

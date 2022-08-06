const { Op } = require('sequelize');
const { optionalObjectProperty, sort, paginate } = require('../../../utils');

module.exports = (options = {}) => ({
  where: {
    ...optionalObjectProperty(
      options.filter?.userId,
      'userId',
      options.filter.userId
    ),
    ...optionalObjectProperty(options.filter?.name, 'name', {
      [Op.substring]: options.filter.name,
    }),
  },
  ...sort(options),
  ...paginate(options),
});

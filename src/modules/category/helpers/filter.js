const { Op } = require('sequelize');
const { optionalObjectProperty, sort, paginate } = require('../../../utils');

module.exports = (options) => ({
  where: {
    ...optionalObjectProperty('userId', options?.filter?.userId || ''),
    ...optionalObjectProperty('name', {
      [Op.substring]: options?.filter?.name || '',
    }),
  },
  ...sort(options),
  ...paginate(options),
});

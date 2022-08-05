const { Op } = require('sequelize');

module.exports =
  (Model) =>
  async (where, options = { update: false, updateKey: 'id' }) => {
    const count = await Model.count({
      where: {
        ...(options.update
          ? {
              [options.updateKey ?? 'id']: {
                [Op.ne]: options.updateId,
              },
            }
          : {}),
        ...where,
      },
    });

    if (count > 0) throw new Error();

    return count;
  };

const Exception = require('@ibrahimanshor/express-app/lib/exceptions');

module.exports = async (Model, id) => {
  let instance = id;

  if (!(instance instanceof Model)) {
    instance = await Model.findByPk(id);

    if (!instance) {
      throw new Exception.NotFound();
    }
  }

  return instance;
};

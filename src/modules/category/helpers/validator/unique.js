const { unique } = require('../../../../helpers/validator');
const Category = require('../../model');

module.exports = unique(Category);

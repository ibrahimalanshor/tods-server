const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../database');

module.exports = sequelize.define(
  'Category',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'categories',
  }
);

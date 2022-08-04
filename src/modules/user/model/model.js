const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../database');

module.exports = sequelize.define(
  'User',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['password'],
      },
    },
    tableName: 'users',
  }
);

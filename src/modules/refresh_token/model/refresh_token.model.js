const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../database');

module.exports = sequelize.define(
  'RefreshToken',
  {
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expireAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'refresh_tokens',
  }
);

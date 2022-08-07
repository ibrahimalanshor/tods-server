const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../database');

module.exports = sequelize.define(
  'todo',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    due: {
      type: DataTypes.DATEONLY,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'todos',
    scopes: {
      parent: {
        where: {
          parentId: null,
        },
      },
    },
  }
);

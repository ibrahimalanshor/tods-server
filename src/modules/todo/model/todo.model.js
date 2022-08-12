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
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    doneAt: {
      type: DataTypes.DATE,
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

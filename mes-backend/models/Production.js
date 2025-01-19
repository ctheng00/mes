const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const Production = sequelize.define('Production', {
  id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  batch_size: { type: DataTypes.DECIMAL, allowNull: false },
  status: { type: DataTypes.INTEGER, allowNull: false },//0:scheduled, 1:running, 2:completed, 3:cancelled
  schedule_date: { type: DataTypes.DATE, allowNull: false },
  createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
});

module.exports = Production;
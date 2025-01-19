const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const Production = sequelize.define('Production', {
  material: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
  scheduleDate: { type: DataTypes.DATE, allowNull: false },
});

module.exports = Production;
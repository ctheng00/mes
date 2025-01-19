const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const QualityControl = sequelize.define('QualityControl', {
  inspectionDate: { type: DataTypes.DATE, allowNull: false },
  defectRate: { type: DataTypes.FLOAT, allowNull: false },
  notes: { type: DataTypes.TEXT },
});

module.exports = QualityControl;
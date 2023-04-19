'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {

    static associate(models) {

      Appointment.belongsTo(models.Client,{
        foreignKey:'client_id'
      });
      Appointment.belongsTo(models.Dressmaker,{
        foreignKey:'dressmaker_id'
      });
    }
  }
  Appointment.init({
    date: DataTypes.DATE,
    client_id: DataTypes.INTEGER,
    dressmaker_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};
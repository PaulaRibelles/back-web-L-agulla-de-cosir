'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
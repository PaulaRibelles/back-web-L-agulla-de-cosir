'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dressmaker extends Model {

    static associate(models) {

      Dressmaker.belongsTo(models.User,{
        foreignKey: 'user_id'
      });
      Dressmaker.belongsToMany(models.Client,{
        through: 'appointments',
        foreignKey: 'dressmaker_id'
      });
      Dressmaker.hasMany(models.Appointment,{
        foreignKey: "dressmaker_id"
      });
    }
  }
  Dressmaker.init({
    speciality: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dressmaker',
  });
  return Dressmaker;
};
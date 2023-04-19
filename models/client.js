'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {

    static associate(models) {

      Client.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      Client.belongsToMany(models.Dressmaker, {
        through: 'appointments',
        foreignKey: 'client_id'
      });
      Client.hasMany(models.Appointment,{
        foreignKey: "client_id"
      });
    }
  }
  Client.init({
    age: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    gender: DataTypes.STRING,
    adress: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};
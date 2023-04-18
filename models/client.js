'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
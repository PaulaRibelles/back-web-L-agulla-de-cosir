'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
    
      User.belongsTo(models.Role, {
        foreignKey: 'role_id'
      });
      User.hasMany(models.Client,{
        foreignKey:'user_id'
      });
      User.hasMany(models.Dressmaker,{
        foreignKey: 'user_id'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    dni: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rol_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dressmaker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dressmaker.belongsTo(models.User,{
        foreignKey: 'user_id'
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
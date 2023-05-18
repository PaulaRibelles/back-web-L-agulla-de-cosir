'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      client_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Clients",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete:'CASCADE',
      },
      dressmaker_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Dressmakers",
          key:"id"
        },
        onUpdate: 'CASCADE',
        onDelete:'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};